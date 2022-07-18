import { FC } from 'react';
import { css } from '~stitches';
import { InlineLink } from '~components/InlineLink';

export const Toc: FC = () => {
  return (
    <nav>
      <p className={css({ margin: 0 })()}>The components:</p>
      <ul className={css({ margin: 0 })()}>
        <li>
          <InlineLink href="#dialog">Dialog</InlineLink>
        </li>
        {/* <li>
          <InlineLink href="#menu">Menu</InlineLink>
        </li> */}
        <li>
          <InlineLink href="#popover">Popover</InlineLink>
        </li>
        <li>
          <InlineLink href="#switch">Switch</InlineLink>
        </li>
        <li>
          <InlineLink href="#togglebutton">Toggle Button</InlineLink>
        </li>
        <li>
          <em>More coming soon!</em>
        </li>
      </ul>
    </nav>
  );
};
