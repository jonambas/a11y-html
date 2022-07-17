import { FC, ReactNode } from 'react';

import { css } from '~stitches';
import { Code } from '~components/Code';

type CodeSectionProps = {
  code: string;
  title: ReactNode;
};

export const CodeSection: FC<CodeSectionProps> = (props) => {
  const { code, title } = props;

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
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum
        </p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
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
