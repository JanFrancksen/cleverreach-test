import { useFormContext } from 'react-hook-form';
import InputHeading from './InputHeading';

type InputTextareaProps = {
  label: string;
  title: string;
  subtitle?: string;
  defaultValue?: string;
};

const InputTextarea = ({
  label,
  title,
  subtitle,
  defaultValue,
}: InputTextareaProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor={label} className="flex flex-col text-gray-700">
      <InputHeading title={title} subtitle={subtitle} />
      <textarea {...register(label)} defaultValue={defaultValue} rows={4} />
      {!!errors.label && <p>{!!errors.label.message}</p>}
    </label>
  );
};

InputTextarea.defaultProps = {
  subtitle: '(bitte ergänzen, falls notwendig)',
  defaultValue: undefined,
};

export default InputTextarea;
