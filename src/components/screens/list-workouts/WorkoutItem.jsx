import styles from '../workout/Workout.module.scss';

const WorkoutItem = ({ workout, mutate }) => {
  return (
    <div className={styles.item}>
      <button
        aria-label="Create new workout"
        onClick={() => mutate(workout.id)}
      >
        <span>{workout.name}</span>
      </button>
    </div>
  );
};

export default WorkoutItem;
