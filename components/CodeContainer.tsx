import { FC, ReactNode, PropsWithChildren } from 'react';

import { css } from '~stitches';
import { Code } from '~components/Code';
import { CodeLinkProvider, useCodeLinks } from '~context/codeLinks';

type CodeContainerProps = {
  code: string;
  title: ReactNode;
};

const Container: FC<PropsWithChildren<CodeContainerProps>> = (props) => {
  const { code, title, children } = props;
  const { links } = useCodeLinks();

  return (
    <div
      className={css({
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 50%',
        gridGap: '1rem',
        marginBottom: '$12'
      })()}
    >
      <div>
        <h2
          className={css({
            fontSize: '$700',
            fontWeight: 'bold',
            marginBottom: '$4'
          })()}
        >
          {title}
        </h2>
        {children}
      </div>
      <div
        className={css({
          position: 'sticky',
          top: '$8',
          alignSelf: 'start'
        })()}
      >
        <Code code={code} />
      </div>
    </div>
  );
};

export const CodeContainer: FC<PropsWithChildren<CodeContainerProps>> = (
  props
) => {
  return (
    <CodeLinkProvider>
      <Container {...props} />
    </CodeLinkProvider>
  );
};
