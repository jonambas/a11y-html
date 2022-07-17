import { FC } from 'react';

import { CodeContainer } from '~components/CodeContainer';
import { CodeSection } from '~components/CodeSection';
import { InlineCode } from '~components/InlineCode';
import { InlineLink } from '~components/InlineLink';

const toggle = `
<button type="button">Open dialog</button>
<div
  [#dialog-role]role="dialog"[]
  [#dialog-modal]aria-modal="true"[]
  [#dialog-labelledby]aria-labelledby="dialog-label"[]
  [#dialog-describedby]aria-describedby="dialog-desc"[]
>
  <h3 [#dialog-labelledby]id="dialog-label"[]>Dialog Title</h3>
  <p [#dialog-describedby]id="dialog-desc"[]>Dialog Description</p>
</div>
`;

export const Dialog: FC = () => {
  return (
    <CodeContainer code={toggle} title="Dialog" id="dialog">
      <p>
        A dialog is an interactive overlay component, such as a dismissible
        alert or confirmation window, that separates content from the rest of
        the page.
      </p>
      <CodeSection title="role" linkTarget="#dialog-role">
        <p>
          This attribute <InlineCode>role=&quot;dialog&quot;</InlineCode> tells
          the browser and assistive technology that this element is a dialog,
          and its content should be separated from the page's content.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role">
              MDN dialog role documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#dialog">
              WAI-ARIA dialog role documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
      <CodeSection title="aria-modal" linkTarget="#dialog-modal">
        <p>Indicates whether this dialog is modal or not.</p>
        <p>
          Setting <InlineCode>aria-modal=&quot;true&quot;</InlineCode> tells
          assistive technology that nagivation is limited to the dialog, and
          everything else is hidden.
        </p>
        <p>
          Note: This attribute does not provide the required focus and keyboard
          behavior to the dialog.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal">
              MDN aria-modal documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#aria-modal">
              WAI-ARIA aria-modal documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
      <CodeSection title="aria-labelledby" linkTarget="#dialog-labelledby">
        <p>
          The attribute <InlineCode>aria-labelledby</InlineCode> provides
          contextual information for the controls inside the dialog.
        </p>
        <p>All dialogs must be properly labelled.</p>
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
      <CodeSection title="aria-describedby" linkTarget="#dialog-describedby">
        <p>
          The attribute <InlineCode>aria-describedby</InlineCode> provides
          additional context if available.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby">
              MDN aria-describedby documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#aria-describedby">
              WAI-ARIA aria-describedby documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
    </CodeContainer>
  );
};
