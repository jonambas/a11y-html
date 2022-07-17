import { FC } from 'react';

import { CodeContainer } from '~components/CodeContainer';
import { CodeSection } from '~components/CodeSection';
import { InlineCode } from '~components/InlineCode';
import { InlineLink } from '~components/InlineLink';

const toggleButton = `
<button
  type="button"
  [#togglebutton-pressed]aria-pressed="true"[]
>
  Toggle
</button>
`;

export const ToggleButton: FC = () => {
  return (
    <CodeContainer code={toggleButton} title="Toggle Button">
      <p>
        A toggle button that represents on or off values. Functionally similar
        to <InlineCode>switch</InlineCode>, but supports mixed values and should
        be used when the element visually looks like a button.
      </p>
      <CodeSection title="aria-pressed" linkTarget="#togglebutton-pressed">
        <p>
          Indicates the current &quot;pressed&quot; state of a button. Can be
          either <InlineCode>&quot;true&quot;</InlineCode>,{' '}
          <InlineCode>&quot;false&quot;</InlineCode>,{' '}
          <InlineCode>&quot;mixed&quot;</InlineCode> or{' '}
          <InlineCode>undefined</InlineCode>.
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
  );
};
