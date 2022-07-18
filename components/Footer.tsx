import { FC } from 'react';
import { css } from '~stitches';
import { InlineLink } from '~components/InlineLink';

export const Footer: FC = () => {
  return (
    <footer
      className={css({
        padding: '0',
        textAlign: 'center',
        '@md': {
          padding: '$32 0'
        }
      })()}
    >
      <p>
        Made by{' '}
        <InlineLink href="https://www.jonambas.com">Jon Ambas</InlineLink>
      </p>
      <p>
        <InlineLink href="https://github.com/jonambas/a11y-html">
          Contribute on GitHub
        </InlineLink>
      </p>
    </footer>
  );
};
