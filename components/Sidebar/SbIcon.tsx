type IconType = {
  // eslint-disable-next-line no-undef
  icon: JSX.Element;
  primary?: boolean;
};

const SbIcon = ({ icon, primary }: IconType) =>
  primary ? (
    <div className="flex aspect-square items-center justify-center bg-orange-500 text-lg">
      {icon}
    </div>
  ) : (
    <div className="flex aspect-square items-center justify-center text-lg text-slate-400 transition-colors hover:bg-orange-500 hover:text-white">
      {icon}
    </div>
  );

SbIcon.defaultProps = {
  primary: false,
};

export default SbIcon;
