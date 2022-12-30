import Link from 'next/link';

type IconType = {
  icon: JSX.Element;
  primary?: boolean;
  href: string;
};

const SbIcon = ({ icon, primary, href }: IconType) => (
  <Link
    href={href}
    className={`${
      primary ? 'bg-orange-500 ' : 'text-slate-400'
    } + flex aspect-square items-center justify-center text-lg transition-colors hover:bg-orange-500 hover:text-white print:hidden`}>
    {icon}
  </Link>
);

SbIcon.defaultProps = {
  primary: false,
};

export default SbIcon;
