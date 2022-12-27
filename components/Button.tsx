import Link from 'next/link';
import * as React from 'react';

type ButtonProps = {
  href?: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ href, onClick, children }) => {
  if (href) {
    return (
      <Link href={href} className="button">
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className="button">
      {children}
    </button>
  );
};

Button.defaultProps = {
  href: undefined,
  onClick: undefined,
};

export default Button;
