import { FC, PropsWithChildren, ComponentProps } from 'react';
import { css } from '~stitches';

export const InlineLink: FC<PropsWithChildren<ComponentProps<'a'>>> = ({
  children,
  ...rest
}) => {
  return (
    <a
      className={css({
        borderRadius: '$sm',
        padding: '0.15em 0.1em',
        color: '$gray900',
        cursor: 'pointer',
        textDecoration: 'underline',
        transition: '0.15s',
        '&:hover': { background: '$purple200', color: '$purple800' },
        '&:focus-visible': { outline: 'none', boxShadow: '$focus' }
      })()}
      {...rest}
    >
      {children}
    </a>
  );
};
