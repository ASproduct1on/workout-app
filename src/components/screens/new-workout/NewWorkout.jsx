import Loader from '../../ui/Loader';
import Alert from '../../ui/alert/Alert';
import Button from '../../ui/button/Button';
import Field from '../../ui/field/Field';

import Layout from '../../layout/Layout';

import { Link } from 'react-router-dom';
import SelectExercise from './SelectExercise.jsx';
import { useNewWorkout } from './useNewWorkout.js';

const NewWorkout = () => {
  const {
    control,
    error,
    errors,
    handleSubmit,
    isLoading,
    isSuccess,
    onSubmit,
    register,
  } = useNewWorkout();

  return (
    <>
      <Layout
        bgImage="/images/new-workout-bg.jpg"
        heading="Create new workout"
      />
      <div className="wrapper-inner-page">
        {error && <Alert type="error" text={error} />}
        {isSuccess && <Alert text="Workout created successfully" />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.name?.message}
            name="name"
            register={register}
            options={{
              required: 'Name is required',
            }}
            type="text"
            placeholder="Enter name"
          />

          <Link to="/new-exercise" className="dark-link">
            Add new exercise
          </Link>

          <SelectExercise control={control} />

          {errors?.iconPath && (
            <div className="error">{errors?.iconPath?.message}</div>
          )}

          <Button>Create</Button>
        </form>
      </div>
    </>
  );
};

export default NewWorkout;
