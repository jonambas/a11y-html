import { FC } from 'react';

import { CodeContainer } from '~components/CodeContainer';
import { CodeSection } from '~components/CodeSection';
import { InlineCode } from '~components/InlineCode';
import { InlineLink } from '~components/InlineLink';

export const code = `
<button
  type="button"
  [#toggle-role]role="switch"[]
  [#toggle-checked]aria-checked="true"[]
>
  Toggle
</button>
`;

export const displayName = 'Switch';

export const Switch: FC = () => {
  return (
    <CodeContainer code={code} title={displayName + ' (Toggle)'} id="switch">
      <p>
        A type of checkbox that represents on and off values, as opposed to
        checked and unchecked values. Functionally similar to a{' '}
        <InlineCode>checkbox</InlineCode>, but only supports an on and off
        state.
      </p>
      <CodeSection title="role" linkTarget="#toggle-role">
        <p>
          The attribute <InlineCode>role=&quot;switch&quot;</InlineCode> tells
          assistive technology that this element is a switch.
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
          The aria attribute <InlineCode>aria-checked</InlineCode> is required
          for any elements with a switch role. Values must be either{' '}
          <InlineCode>&quot;true&quot;</InlineCode> or{' '}
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
  );
};
