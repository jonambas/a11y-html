import type { FC } from 'react';

import { CodeContainer } from '~components/CodeContainer';
import { CodeSection } from '~components/CodeSection';
import { InlineCode } from '~components/InlineCode';
import { InlineLink } from '~components/InlineLink';

const code = `
<div>
  <div [#tabs-role-tablist]role="tablist"[]>
    <button
      type="button"
      role="tab"
      aria-selected="true"
      aria-controls="tabpanel-1"
      id="tab-1"
    >
      Tab 1
    </button>

    <button
      type="button"
      [#tabs-role-tab]role="tab"[]
      [#tabs-selected]aria-selected="false"[]
      aria-controls="tabpanel-2"
      id="tab-2"
      tabindex="-1"
    >
      Tab 2
    </button>

    <button
      type="button"
      role="tab"
      aria-selected="false"
      [#tabs-controls]aria-controls="tabpanel-3"[]
      id="tab-3"
      [#tabs-tabindex]tabindex="-1"[]
    >
      Tab 3
    </button>
  </div>

  <div>
    <div
      role="tabpanel"
      aria-labelledby="tab-1"
      id="tabpanel-1"
    >
      Tab panel 1
    </div>

    <div
      [#tabs-role-tabpanel]role="tabpanel"[]
      aria-labelledby="tab-2"
      id="tabpanel-2"
    >
      Tab panel 2
    </div>

    <div
      role="tabpanel"
      [#tabs-labelledby]aria-labelledby="tab-3"[]
      id="tabpanel-3"
    >
      Tab panel 3
    </div>
  </div>
</div>
`;

export const displayName = 'Tabs';

export const Tabs: FC = () => {
  return (
    <CodeContainer code={code} title={displayName} id="tabs">
      <p>
        Tabs are used to show and hide content within a page, organized by
        clickable elements describing each section. Once focused, the user can
        change between the tabs using the left and right arrow keys.
      </p>
      <CodeSection title="role='tablist'" linkTarget="#tabs-role-tablist">
        <p>
          <InlineCode>role=&quot;tablist&quot;</InlineCode> describes a list of
          elements with
          <InlineCode>role&quot;tab&quot;</InlineCode>. These tab elements must
          be immediate children.
        </p>
      </CodeSection>
      <CodeSection title="role='tab'" linkTarget="#tabs-role-tab">
        <p>
          <InlineCode>role=&quot;tab&quot;</InlineCode> describes a clickable
          element as a tab, indicating it controls the visibility of an
          associated element with{' '}
          <InlineCode>role&quot;tabpanel&quot;</InlineCode>.
        </p>
      </CodeSection>
      <CodeSection title="aria-selected" linkTarget="#tabs-selected">
        <p>
          Used to indicate which tab is currently active, and as a result, which
          associated <InlineCode>role&quot;tabpanel&quot;</InlineCode> is
          visible.
        </p>
        <ul>
          <li>
            See:{' '}
            <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected">
              MDN aria-selected documentation
            </InlineLink>
          </li>
          <li>
            See:{' '}
            <InlineLink href="https://www.w3.org/TR/wai-aria-1.1/#aria-selected">
              WAI-ARIA aria-selected documentation
            </InlineLink>
          </li>
        </ul>
      </CodeSection>
      <CodeSection title="aria-controls" linkTarget="#tabs-controls">
        <p>
          Used to explicitly describe the relationship between an element with{' '}
          <InlineCode>role=&quot;tab&quot;</InlineCode> and{' '}
          <InlineCode>role&quot;tabpanel&quot;</InlineCode> via a unique{' '}
          <InlineCode>id</InlineCode>.
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
      <CodeSection title="tabindex" linkTarget="#tabs-tabindex">
        <p>
          The <InlineCode>tabindex</InlineCode> must be set to{' '}
          <InlineCode>0</InlineCode> for the currently selected tab, and set to{' '}
          <InlineCode>-1</InlineCode> otherwise. This allows focus to be
          controlled programmatically when the user uses the left and right
          arrow key rather than via the regular tab order of the document.
        </p>
      </CodeSection>
      <CodeSection title="role='tabpanel'" linkTarget="#tabs-role-tabpanel">
        <p>
          <InlineCode>role=&quot;tabpanel&quot;</InlineCode> is used to describe
          regions of content that show and hide according to the selected tab.
          The <InlineCode>aria-controls</InlineCode> attribute of the
          corresponding tab must have the same value as the unique
          <InlineCode>id</InlineCode> of this element.
        </p>
      </CodeSection>
      <CodeSection title="aria-labelledby" linkTarget="#tabs-labelledby">
        <p>
          Each element with <InlineCode>role=&quot;tabpanel&quot;</InlineCode>{' '}
          is labelled by the content of the corresponding element with{' '}
          <InlineCode>role=&quot;tab&quot;</InlineCode> via its unique{' '}
          <InlineCode>id</InlineCode>.
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
    </CodeContainer>
  );
};
