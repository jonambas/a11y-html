import {
  FC,
  PropsWithChildren,
  ReactNode,
  Fragment,
  ComponentProps,
  useEffect
} from 'react';
import cx from 'classnames';
import { PrismLight as Syntax } from 'react-syntax-highlighter';
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup-templating';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import { CopyButton } from '~components/CopyButton';
import { useCodeLinks } from '~context/codeLinks';
import { css } from '~stitches';

Syntax.registerLanguage('html', html);

import { styled } from '~stitches';

const Wrapper = styled('div', {
  padding: '$3 $12 $3 $3',
  background: '$codeBg',
  borderRadius: '$lg',
  position: 'relative',
  pre: {
    fontFamily: '$mono',
    margin: 0,
    fontSize: '$200',
    lineHeight: '1.8em',
    fontWeight: 'semibold',
    color: '$gray100'
  },
  '.link': {
    opacity: '1',
    background: '$gray800',
    borderRadius: '$sm',
    padding: '0.22em 0.3em',
    marginLeft: '-0.3em',
    cursor: 'pointer',
    transition: '0.15s',
    color: 'unset',
    textDecoration: 'none',
    '&.in-view': {
      background: '$purple700'
    },
    '&:hover': {
      background: '$gray700',
      '&.in-view': {
        background: '$purple700'
      }
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: '$focusDark'
    }
  }
});

type RowProps = {
  tagName: string;
  type: string;
  stylesheet: Record<string, any>;
  value: string;
  children: Array<any>;
  properties: {
    className: Array<string>;
    href: string;
  };
};

const Row: FC<RowProps> = (props) => {
  const { tagName, children = [], properties, stylesheet } = props;
  const { active } = useCodeLinks();

  const contents = children.map((child, i) => {
    if (child.type === 'text') {
      return (
        <Fragment key={i}>{child.value.replace(/\[#(\S+)\]/, '')}</Fragment>
      );
    }
    return <Row key={i} {...child} stylesheet={stylesheet} />;
  });

  const Elem = (tagName || 'span') as unknown as FC<
    PropsWithChildren<ComponentProps<'a'>>
  >;

  const style = properties?.className?.reduce((acc, name) => {
    const rules = stylesheet[name] ?? {};
    return { ...acc, ...rules };
  }, {});

  return (
    <Elem
      className={cx(
        properties?.className,
        active[properties.href] && 'in-view'
      )}
      href={properties.href}
      style={style}
    >
      {contents}
    </Elem>
  );
};

const rowNodeHasLink = (node: any): boolean => {
  const children = node.children || [];
  return !!children[0]?.value.match(/\[#(\S+)\]/);
};

const rowNodeHasEndLink = (node: any): boolean => {
  const children = node.children || [];
  return !!children[0]?.value.match(/\[/);
};

const rowHasLink = (row: any): boolean => {
  return row.children?.reduce((bcc: boolean, child: any) => {
    return bcc || rowNodeHasLink(child);
  }, false);
};

const makeNewLinkNode = (node: any) => ({
  type: 'element',
  tagName: 'a',
  children: [node],
  properties: {
    className: ['link'],
    href: ''
  }
});

const Renderer = (props: any): ReactNode => {
  const { add } = useCodeLinks();

  const parsedLinks = props.rows.reduce((acc: any[], row: any) => {
    if (rowHasLink(row)) {
      let newRowChildren = [];
      let insideLink = false;
      let newLinkNode;

      // Iterates over row children
      // finds nodes encapsulated by the custom link sytanx
      // and injects them as children under a new `a` node

      for (const node of row.children) {
        if (!insideLink && rowNodeHasLink(node)) {
          insideLink = true;
          newLinkNode = makeNewLinkNode(node);
          const hrefParts = node.children[0].value
            .split(/(\[|\])/)
            .filter(Boolean);
          newLinkNode.properties.href = hrefParts[1];
          continue;
        }

        if (rowNodeHasEndLink(node)) {
          insideLink = false;
          newRowChildren.push(newLinkNode);
          continue;
        }

        if (insideLink) {
          newLinkNode?.children.push(node);
          continue;
        }

        newRowChildren.push(node);
      }

      acc.push({ ...row, children: newRowChildren });
      return acc;
    }

    acc.push(row);
    return acc;
  }, []);

  // Collects links and pushes to context
  useEffect(() => {
    let hrefs = [];
    for (const row of parsedLinks) {
      for (const child of row.children) {
        if (child.tagName === 'a') {
          hrefs.push(child.properties.href);
        }
      }
    }
    add(hrefs);
  }, []);

  return parsedLinks.map((row: any, i: number) => {
    return <Row key={i} stylesheet={props.stylesheet} {...row} />;
  });
};

type CodeProps = {
  code: string;
};

export const Code: FC<CodeProps> = (props) => {
  const { code } = props;
  const string = code.trim();
  const copyString = string.replaceAll('[]', '').replaceAll(/\[#(\S+)\]/g, '');

  return (
    <Wrapper id="code">
      <CopyButton
        toCopy={copyString}
        className={css({ position: 'absolute', right: '$3' })()}
      />
      <Syntax
        language="html"
        style={style}
        renderer={Renderer}
        useInlineStyles={false}
        codeTagProps={{ style: {} }}
      >
        {string}
      </Syntax>
    </Wrapper>
  );
};
