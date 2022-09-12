import { FC, PropsWithChildren } from 'react';
import { css } from '~stitches';

export const InlineCode: FC<PropsWithChildren> = (props) => {
  return (
    <code
      className={css({
        fontFamily: '$mono',
        background: '$purple100',
        padding: '0.15em 0.3em',
        borderRadius: '$sm',
        color: '$purple800',
        fontSize: '0.85em'
      })()}
    >
      {props.children}
    </code>
  );
};
