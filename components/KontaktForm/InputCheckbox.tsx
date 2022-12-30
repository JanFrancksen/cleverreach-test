import { useFormContext } from 'react-hook-form';
import InputHeading from './InputHeading';

type InputCheckboxesProps = {
  name: string;
  label: string;
};

type InputCheckboxProps = {
  title: string;
  checkboxes: InputCheckboxesProps[];
};

const InputCheckbox = ({ title, checkboxes }: InputCheckboxProps) => {
  const { register } = useFormContext();

  return (
    <>
      <InputHeading title={title} />
      <div className="flex flex-col gap-2">
        {checkboxes.map(checkbox => (
          <label
            htmlFor={checkbox.label}
            key={checkbox.label}
            className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register(checkbox.label)}
              className="mr-2 h-6 w-6 border-gray-400 outline-none"
            />
            {checkbox.name}
          </label>
        ))}
      </div>
    </>
  );
};

export default InputCheckbox;
