import {
  FC,
  PropsWithChildren,
  ReactNode,
  Fragment,
  ComponentProps
} from 'react';
import cx from 'classnames';
import { PrismLight as Syntax } from 'react-syntax-highlighter';
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup-templating';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/vs-dark';

Syntax.registerLanguage('html', html);

import { styled } from '~stitches';

const Wrapper = styled('div', {
  padding: '$3',
  background: '$codeBg',
  borderRadius: '$lg',
  fontFamily: '$mono',
  pre: {
    fontFamily: '$mono',
    margin: 0,
    fontSize: '$200',
    lineHeight: '1.75em',
    fontWeight: 'semibold',
    color: '$gray100'
  },
  '.token': {
    opacity: '0.7'
  },
  '.link': {
    opacity: '1',
    background: '$gray800',
    borderRadius: '$sm',
    padding: '0.2em 0.5em',
    marginLeft: '-0.5em',
    cursor: 'pointer',
    transition: '0.15s',
    color: 'unset',
    textDecoration: 'none',
    '&:hover': {
      background: '$gray600'
    },
    '.token': {
      opacity: '1'
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
      className={cx(properties?.className)}
      href={properties.href}
      style={style}
      children={contents}
    />
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

const renderer = (props: any): ReactNode => {
  const parsedLinks = props.rows.reduce((acc: any[], row: any) => {
    if (rowHasLink(row)) {
      const newRowChildren = [];
      let linkStatus = '';
      const newLinkNode = {
        type: 'element',
        tagName: 'a',
        children: [] as any[],
        properties: {
          className: ['link'],
          href: ''
        }
      };

      for (const node of row.children) {
        if (rowNodeHasLink(node)) {
          linkStatus = 'started';
          newLinkNode.children = [node];
          const hrefParts = node.children[0].value
            .split(/(\[|\])/)
            .filter(Boolean);
          newLinkNode.properties.href = hrefParts[1];
          continue;
        }

        if (rowNodeHasEndLink(node)) {
          linkStatus = '';
          newRowChildren.push(newLinkNode);
          continue;
        }

        if (linkStatus === 'started') {
          newLinkNode.children.push(node);
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

  return (
    <Wrapper id="code">
      <Syntax
        language="html"
        style={style}
        renderer={renderer}
        useInlineStyles={false}
        codeTagProps={{ style: {} }}
      >
        {string}
      </Syntax>
    </Wrapper>
  );
};
