import { FC, ReactNode, PropsWithChildren } from 'react';

import { css } from '~stitches';
import { Code } from '~components/Code';
import { CodeLinkProvider } from '~context/codeLinks';

type CodeContainerProps = {
  code: string;
  title: string;
  id: string;
};

const Container: FC<PropsWithChildren<CodeContainerProps>> = (props) => {
  const { code, title, children, id } = props;

  return (
    <>
      <h2
        id={id}
        className={css({
          fontSize: '$700',
          fontWeight: 'bold',
          marginBottom: '$8'
        })()}
      >
        {title}
      </h2>
      <div
        className={css({
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr',
          borderBottom: '1px solid $gray100',
          '@md': {
            gridTemplateColumns: '1fr 50%'
          },
          gridGap: '$8',
          paddingBottom: '$20',
          marginBottom: '$20'
        })()}
      >
        <div>{children}</div>
        <div
          className={css({
            order: '-1',
            '@md': {
              order: 'inherit',
              position: 'sticky',
              top: '$16',
              alignSelf: 'start'
            }
          })()}
        >
          <Code code={code} />
        </div>
      </div>
    </>
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
