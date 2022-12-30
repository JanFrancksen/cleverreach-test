import Heading from '@ui/typography/Heading';

type InputLabelProps = {
  title: string;
  subtitle?: string;
};

const InputLabel = ({ title, subtitle }: InputLabelProps) => (
  <div className="mt-4 mb-4 md:mb-0 md:flex md:items-baseline md:gap-2">
    <Heading size="lg" tag="h3" title={title} bold />
    {subtitle && <span className="font-light text-gray-300">{subtitle}</span>}
  </div>
);

InputLabel.defaultProps = {
  subtitle: undefined,
};

export default InputLabel;
