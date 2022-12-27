import React from 'react';

type Size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

interface Props {
  tag: keyof JSX.IntrinsicElements;
  size: Size;
  title: React.ReactNode;
  bold?: boolean;
}

const Headline = ({ tag, size, title, bold }: Props) => {
  const sizes: Record<Size, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
  };

  const className = `mb-2 ${sizes[size] || ''} ${
    (bold && 'font-medium') || 'font-light '
  }`;

  return React.createElement(tag, { className }, title);
};

Headline.defaultProps = {
  bold: false,
};

export default Headline;
