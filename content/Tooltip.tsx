import { FC } from 'react';

import { CodeContainer } from '~components/CodeContainer';
import { CodeSection } from '~components/CodeSection';
import { InlineCode } from '~components/InlineCode';
import { InlineLink } from '~components/InlineLink';

const tooltip = `
<a [#tooltip-describedby]aria-describedby="tooltip"[]>
  Link
</a>
<span
  [#tooltip-role]role="tooltip"[]
  [#tooltip-describedby]id="tooltip"[]
  [#tooltip-hidden]aria-hidden="true"[]
>
  Tooltip Content
</span>
`;

export const Tooltip: FC = () => {
  return (
    <CodeContainer code={tooltip} title="Tooltip" id="tooltip">
      <p>
        A tooltip is a small overlay element that provides auxiliary content for
        a another focusable or interactive element, such as a field, link or
        button. Tooltips are triggerd by both focus and hover events.
      </p>
      <CodeSection title="role" linkTarget="#tooltip-role">
        <p>
          The attribute <InlineCode>role=&quot;tooltip&quot;</InlineCode> tells
          assistive technology that this element is a switch.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role">
              MDN tooltip role documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#tooltip">
              WAI-ARIA tooltip role documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
      <CodeSection title="aria-describedby" linkTarget="#tooltip-describedby">
        <p>
          The attribute <InlineCode>aria-describedby</InlineCode> on the
          triggering element ties the element to the tooltip.
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
      <CodeSection title="aria-hidden" linkTarget="#tooltip-hidden">
        <p>
          To prevent interaction with tooltip content when it is closed, either
          use <InlineCode>aria-hidden</InlineCode> set to{' '}
          <InlineCode>&quot;true&quot;</InlineCode>, or do not render the
          tooltip.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden">
              MDN aria-hidden documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#aria-hidden">
              WAI-ARIA aria-hidden documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
    </CodeContainer>
  );
};
