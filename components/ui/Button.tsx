import Link from 'next/link';
import * as React from 'react';

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  isSubmit?: boolean;
  additionalStyles?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  isSubmit,
  additionalStyles,
}) => {
  const ButtonStyles =
    'cursor-pointer rounded-md bg-orange-400 px-4 py-2 text-white transition-colors hover:bg-orange-500';

  if (href) {
    return (
      <Link href={href} className={`${ButtonStyles} ${additionalStyles}`}>
        {children}
      </Link>
    );
  }
  if (isSubmit) {
    return (
      <button type="submit" className={`${ButtonStyles} ${additionalStyles}`}>
        {children}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${ButtonStyles} ${additionalStyles}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  href: undefined,
  onClick: undefined,
  isSubmit: false,
  additionalStyles: undefined,
};

export default Button;
