import { forwardRef, ComponentProps, useState } from 'react';
import copy from 'copy-to-clipboard';
import { styled } from '~stitches';
import { CopyIcon, CheckIcon } from '~components/icons';
import { SROnly } from '~components/SROnly';

const StyledButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  border: 'none',
  borderRadius: '$sm',
  padding: '$2',
  background: 'transparent',
  color: 'white',
  cursor: 'pointer',
  transition: '0.15s',
  '&:hover': {
    background: '$gray800',
    color: 'gray100'
  },
  '&:focus-visible': {
    outline: 'none',
    boxShadow: '$focusDark'
  },
  variants: {
    state: {
      copied: {
        background: '$purple500',
        color: 'white',
        '&:hover': {
          background: '$purple500',
          color: 'white'
        }
      }
    }
  }
});

export const CopyButton = forwardRef<
  HTMLButtonElement,
  ComponentProps<'button'> & { toCopy: string }
>(function Button(props, ref) {
  const { toCopy, ...rest } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(toCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <StyledButton
      type="button"
      {...rest}
      ref={ref}
      onClick={handleCopy}
      state={copied ? 'copied' : undefined}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      <SROnly>{copied ? `Copied` : `Copy`}</SROnly>
    </StyledButton>
  );
});
