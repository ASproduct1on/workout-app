import Layout from '../../layout/Layout';
import Loader from '../../ui/Loader';
import Alert from '../../ui/alert/Alert';
import styles from '../workout/Workout.module.scss';
import WorkoutItem from './WorkoutItem';
import { useListWorkouts } from './useListWorkouts';

const ListWorkouts = () => {
  const { data, isSuccess, mutate, isLoading, isSuccessMutate, error } =
    useListWorkouts();

  return (
    <div>
      <Layout heading="Workout List" bgImage="/images/workout-bg.jpg" />

      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {error && <Alert type="error" text={error} />}
        {isSuccessMutate && <Alert text="Workout log created" />}
        {isLoading && <Loader />}
        {isSuccess && (
          <div className={styles.wrapper}>
            {data?.map((workout, index) => (
              <WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
            ))}
          </div>
        )}
      </div>
      {isSuccess && data?.length === 0 && (
        <Alert type="warning" text="Workouts not found" />
      )}
    </div>
  );
};

export default ListWorkouts;
