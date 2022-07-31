import { FC } from 'react';

import { CodeContainer } from '~components/CodeContainer';
import { CodeSection } from '~components/CodeSection';
import { InlineCode } from '~components/InlineCode';
import { InlineLink } from '~components/InlineLink';

const menu = `
<button 
  [#menu-idtrigger]id="menu-trigger"[]
  [#menu-haspopup]aria-haspopup="true"[]
  [#menu-expanded]aria-expanded="true"[]
  [#menu-controls]aria-controls="menu-container"[]
>
  Menu Button
</button>
<div
  [#menu-rolemenu]role="menu"[]
  [#menu-idtrigger]aria-labelledby="menu-trigger"[]
  [#menu-controls]id="menu-container"[]
>
  <button [#menu-rolemenuitem]role="menuitem"[] [#menu-tabindex]tabindex="-1"[]>
    Action
  </button>
  <button [#menu-rolemenuitem]role="menuitem"[] [#menu-tabindex]tabindex="-1"[]>
    Action
  </button>
</div>
`;

export const Menu: FC = () => {
  return (
    <CodeContainer code={menu} title="Dropdown Menu" id="menu">
      <p>
        A menu is an interactive component that groups together a list of
        actions or choices that a user can invoke.
      </p>
      <CodeSection title="role='menu'" linkTarget="#menu-rolemenu">
        <p>
          The attribute <InlineCode>role=&quot;menu&quot;</InlineCode> tells
          assistive technology that this element is a menu.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role">
              MDN menu role documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#menu">
              WAI-ARIA menu role documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
      <CodeSection title="role='menuitem'" linkTarget="#menu-rolemenuitem">
        <p>
          The attribute <InlineCode>role=&quot;menuitem&quot;</InlineCode> tells
          assistive technology that this element is an option in a set of
          actions contained by a <InlineCode>menu</InlineCode>.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role">
              MDN menuitem role documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#menuitem">
              WAI-ARIA menuitem role documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
      <CodeSection title="aria-labelledby" linkTarget="#menu-idtrigger">
        <p>
          The attribute <InlineCode>aria-labelledby</InlineCode> refers to the
          element that contains the accessible name for the menu.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby">
              MDN aria-labelledby documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby">
              WAI-ARIA aria-labelledby documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
      <CodeSection title="aria-haspopup" linkTarget="#menu-haspopup">
        <p>
          The attribute <InlineCode>aria-haspopup</InlineCode> indicates the
          menu button triggers an interactive popup element.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup">
              MDN aria-haspopup documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup">
              WAI-ARIA aria-haspopup documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
      <CodeSection title="aria-expanded" linkTarget="#menu-expanded">
        <p>
          Setting the attribute, <InlineCode>aria-expanded</InlineCode>, to{' '}
          <InlineCode>&quot;true&quot;</InlineCode> informs assistive technology
          that the element the menu button controls is visible.
        </p>
        <p>
          Note: <InlineCode>aria-controls</InlineCode> is required to inform
          assistive technology which element or elements are visible.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded">
              MDN aria-expanded documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#aria-expanded">
              WAI-ARIA aria-expanded documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
      <CodeSection title="aria-controls" linkTarget="#menu-controls">
        <p>
          The attribute <InlineCode>aria-controls</InlineCode> identifies the
          element that is controlled or made visible by the menu button, through
          a reference to the element&apos;s <InlineCode>id</InlineCode>.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls">
              MDN aria-controls documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#aria-controls">
              WAI-ARIA aria-controls documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
      <CodeSection title="tabindex" linkTarget="#menu-tabindex">
        <p>
          <InlineCode>tabindex</InlineCode> informs browsers on how to handle
          keyboard focus. The <InlineCode>menuitems</InlineCode> in the menu
          should be keyboard navigable with arrow keys, but not{' '}
          <InlineCode>tab</InlineCode>.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">
              MDN tabindex documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
    </CodeContainer>
  );
};
