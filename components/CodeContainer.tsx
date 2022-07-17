import { FC, ReactNode, PropsWithChildren } from 'react';

import { css } from '~stitches';
import { Code } from '~components/Code';
import { CodeLinkProvider } from '~context/codeLinks';

type CodeContainerProps = {
  code: string;
  title: ReactNode;
};

const Container: FC<PropsWithChildren<CodeContainerProps>> = (props) => {
  const { code, title, children } = props;

  return (
    <>
      <h2
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
          '@md': {
            gridTemplateColumns: '1fr 50%'
          },
          gridGap: '$8',
          marginBottom: '$12',
          '&:last-child .spacer': {
            // adds extra scroll area for last content block so
            // intersection observer reacts correctly
            // todo: fix me
            marginBottom: '75vh'
          },
          '& p': {
            marginBottom: '$6',
            lineHeight: '1.6em'
          }
        })()}
      >
        <div>
          {children}
          <div className="spacer" />
        </div>
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
