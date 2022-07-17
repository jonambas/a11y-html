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
<div [#popover-expanded]id="popover-container"[] [#popover-tabindex]tabindex="-1"[]>
  Popover Content
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
          The attribute <InlineCode>aria-expanded</InlineCode> ..
        </p>
      </CodeSection>
      <CodeSection title="aria-controls" linkTarget="#popover-controls">
        <p>
          The attribute <InlineCode>aria-controls</InlineCode> ..
        </p>
      </CodeSection>
      <CodeSection title="tabindex" linkTarget="#popover-tabindex">
        <p>This attribute</p>
      </CodeSection>
    </CodeContainer>
  );
};
