import { FC } from 'react';

import { CodeContainer } from '~components/CodeContainer';
import { CodeSection } from '~components/CodeSection';
import { InlineCode } from '~components/InlineCode';
import { InlineLink } from '~components/InlineLink';

const popover = `
<button
  type="button"
  [#popover-expanded]aria-expanded="true"[]
  [#popover-controls]aria-controls="popover-container"[]
>
  Trigger
</button>
<div
  [#popover-controls]id="popover-container"[]
  [#popover-hidden]aria-hidden="false"[]
>
  <p>Popover content</p>
  [#popover-focusable]<button type="button">Close</button>[]
</div>

`;

export const Popover: FC = () => {
  return (
    <CodeContainer code={popover} title="Popover" id="popover">
      <p>
        A popover is an non-modal overlay element that displays additional
        content.
      </p>
      <CodeSection title="aria-expanded" linkTarget="#popover-expanded">
        <p>
          Setting the attribute, <InlineCode>aria-expanded</InlineCode>, to{' '}
          <InlineCode>&quot;true&quot;</InlineCode> informs assistive technology
          that the element the button controls is visible.
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
      <CodeSection title="aria-controls" linkTarget="#popover-controls">
        <p>
          The attribute <InlineCode>aria-controls</InlineCode> identifies the
          element that is controlled or made visible by the button, through a
          reference to the element&apos;s <InlineCode>id</InlineCode>.
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
      <CodeSection title="aria-hidden" linkTarget="#popover-hidden">
        <p>
          To prevent keyboard interaction with the popover when it is closed,
          either use <InlineCode>aria-hidden</InlineCode> set to{' '}
          <InlineCode>&quot;true&quot;</InlineCode>, or do not render the
          popover.
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
      <CodeSection title="Focusable" linkTarget="#popover-focusable">
        <p>
          The popover must have a focusable element, and focus should be moved
          to the either first focusable element within the popover or the
          container when it is opened.
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
