import { useFormContext } from 'react-hook-form';
import InputHeading from './InputHeading';

type InputTextboxesProps = {
  label: string;
  name: string;
  type: string;
  defaultValue?: string;
};

type InputTextProps = {
  title: string;
  subtitle?: string;
  textboxes: InputTextboxesProps[];
};

const InputText = ({ title, subtitle, textboxes }: InputTextProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <InputHeading title={title} subtitle={subtitle} />
      <div className="grid grid-cols-2 gap-4">
        {textboxes.map(textbox => (
          <label
            htmlFor={textbox.name}
            key={textbox.name}
            className="flex flex-col gap-1 text-gray-700">
            {textbox.label}
            <input
              type={textbox.type}
              {...register(textbox.name)}
              defaultValue={textbox.defaultValue}
            />
            {!!errors.label && <p>{!!errors.label.message}</p>}
          </label>
        ))}
      </div>
    </>
  );
};

InputText.defaultProps = {
  subtitle: undefined,
};

export default InputText;
