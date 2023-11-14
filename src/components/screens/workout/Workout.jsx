import { useQuery } from '@tanstack/react-query';
import cn from 'clsx';
import { useParams } from 'react-router-dom';

import WorkoutLogService from '../../../services/workout/workout-log.service.js';
import stylesLayout from '../../layout/Layout.module.scss';
import Header from '../../layout/header/Header';

import { Fragment } from 'react';
import Loader from '../../ui/Loader.jsx';
import ExerciseItem from './ExerciseItem.jsx';
import styles from './Workout.module.scss';

const Workout = () => {
  const { id } = useParams();

  const {
    data: workoutLog,
    isSuccess,
    isLoading,
  } = useQuery(['get workout log', id], () => WorkoutLogService.getById(id), {
    select: ({ data }) => data,
  });
  console.log(workoutLog);
  return (
    <>
      <div
        className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
        style={{
          backgroundImage: `url('/images/workout-bg.jpg')`,
          height: 356,
        }}
      >
        <Header backLink="/workouts" />

        {isSuccess && (
          <div>
            <time className={styles.time}>{workoutLog.minute + ' min.'}</time>
            <h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
          </div>
        )}
      </div>
      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div style={{ width: '90%', margin: '0 auto' }}>
          {/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.wrapper}>
            {workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
              <Fragment key={exerciseLog.id}>
                <ExerciseItem exerciseLog={exerciseLog} />
                {index % 2 !== 0 &&
                  index !== workoutLog.exerciseLogs.length - 1 && (
                    <div className={styles.line} />
                  )}
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Workout;
