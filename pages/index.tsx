import type { NextPage } from 'next';
import Head from 'next/head';

import { css } from '~stitches';
import { CodeContainer } from '~components/CodeContainer';
import { CodeSection } from '~components/CodeSection';
import { InlineCode } from '~components/InlineCode';
import { InlineLink } from '~components/InlineLink';

const toggle = `
<button
  type="button"
  [#toggle-role]role="switch"[]
  [#toggle-checked]aria-checked="true"[]
>
  Toggle
</button>
`;

const toggleButton = `
<button
  type="button"
  [#togglebutton-pressed]aria-pressed="true"[]
>
  Toggle
</button>
`;

const menu = `
<button 
  type="button"
  [#menu-idtrigger]id="menu-trigger"[]
  [#menu-haspopup]aria-haspopup="true"[]
  [#menu-expanded]aria-expanded="true"[]
  [#menu-controls]aria-controls="menu-container"[]
  >
  Options
</button>
<div
  [#menu-idtrigger]aria-labelledby="menu-trigger"[]
  [#menu-controls]id="menu-container"[]
  [#id]role="menu"[]
  [#id]tabindex="0"[]
  >
  <button [#id]role="menuitem"[] [#id]tabindex="-1"[]>
    Edit
  </button>
  <button role="menuitem" tabindex="-1" >
    Duplicate
  </button>
  <button role="menuitem" tabindex="-1" >
    Archive
  </button>
</div>
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>A11Y HTML</title>
      </Head>
      <div>
        <h1
          className={css({
            padding: '$12 0',
            margin: '$12 0',
            fontSize: '$900'
          })()}
        >
          A11y HTML
        </h1>
        <CodeContainer code={toggle} title="Toggle Button (On/Off)">
          <p>
            A type of checkbox that represents on and off values, as opposed to
            checked and unchecked values. Functionally the same as a{' '}
            <InlineCode>checkbox</InlineCode>, but should be used when the
            element visually looks like a button.
          </p>
          <CodeSection title="role" linkTarget="#toggle-role">
            <p>
              The attribute <InlineCode>role=&quot;switch&quot;</InlineCode>{' '}
              tells assistive technology that this element is a switch.
            </p>
            <ul>
              <li>
                See:{' '}
                <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role">
                  MDN switch role documentation
                </InlineLink>
              </li>
              <li>
                See:{' '}
                <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#switch">
                  WAI-ARIA switch role documentation
                </InlineLink>
              </li>
            </ul>
          </CodeSection>
          <CodeSection title="aria-checked" linkTarget="#toggle-checked">
            <p>
              The aria attribute <InlineCode>aria-checked</InlineCode> is
              required for any elements with a switch role. Values must be
              either <InlineCode>&quot;true&quot;</InlineCode> or{' '}
              <InlineCode>&quot;false&quot;</InlineCode>.
            </p>
            <ul>
              <li>
                See:{' '}
                <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked">
                  MDN aria-checked documentation
                </InlineLink>
              </li>
              <li>
                See:{' '}
                <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#aria-checked">
                  WAI-ARIA aria-checked documentation
                </InlineLink>
              </li>
            </ul>
          </CodeSection>
        </CodeContainer>
        <CodeContainer code={toggleButton} title="Toggle Button">
          <p>
            A toggle button that represents on or off values. Functionally
            similar to <InlineCode>switch</InlineCode>, but supports mixed
            values and should be used when the element visually looks like a
            button.
          </p>
          <CodeSection title="aria-pressed" linkTarget="#togglebutton-pressed">
            <p>
              Indicates the current &quot;pressed&quot; state of a button. Can
              be either <InlineCode>&quot;true&quot;</InlineCode>,{' '}
              <InlineCode>&quot;false&quot;</InlineCode>,{' '}
              <InlineCode>&quot;mixed&quot;</InlineCode> or{' '}
              <InlineCode>&quot;undefined&quot;</InlineCode>.
            </p>
            <ul>
              <li>
                See:{' '}
                <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed">
                  MDN aria-pressed documentation
                </InlineLink>
              </li>
              <li>
                See:{' '}
                <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#aria-pressed">
                  WAI-ARIA aria-pressed documentation
                </InlineLink>
              </li>
            </ul>
          </CodeSection>
        </CodeContainer>
        <CodeContainer code={menu} title="Dropdown Menu">
          <CodeSection
            title="Linking the trigger with the menu"
            linkTarget="#menu-idtrigger"
          >
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
          </CodeSection>
          <CodeSection title="aria-haspopup" linkTarget="#menu-haspopup">
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
          </CodeSection>
          <CodeSection title="aria-expanded" linkTarget="#menu-expanded">
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
          </CodeSection>
          <CodeSection title="aria-controls" linkTarget="#menu-controls">
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
          </CodeSection>
        </CodeContainer>
      </div>
    </>
  );
};

export default Home;
