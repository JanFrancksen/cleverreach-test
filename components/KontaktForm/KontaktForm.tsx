/* eslint-disable react/jsx-props-no-spreading */
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
  firstName: z.string(),
  lastName: z.string().min(1, { message: 'Required' }),
  age: z.number().min(10),
});

type FormValues = z.infer<typeof schema>;
const Kontaktform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    // submit the form data
    console.log('success', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">
        First name
        <input
          type="text"
          {...register('firstName')}
          id="firstName"
          name="firstName"
        />
      </label>
      {errors.firstName?.message && (
        <p>{errors.firstName?.message.toString()}</p>
      )}
      <label htmlFor="lastName">
        Last name
        <input
          type="text"
          {...register('lastName')}
          id="lastName"
          name="lastName"
        />
      </label>
      {errors.lastName?.message && <p>{errors.lastName?.message.toString()}</p>}
      <input type="number" {...register('age', { valueAsNumber: true })} />
      {errors.age?.message && <p>{errors.age?.message.toString()}</p>}
      <button type="submit">submit</button>
    </form>
  );
};

export default Kontaktform;
