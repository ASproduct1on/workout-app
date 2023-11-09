import { useProfile } from '../../screens/profile/useProfile';
import styles from './Counter.module.scss';
const Counter = () => {
  const { data } = useProfile();

  return (
    <div className={styles.wrapper}>
      {data?.statistics?.map((statistic) => (
        <div className={styles.count} key={statistic.label}>
          <div className={styles.heading}>{statistic.label}</div>
          <div className={styles.number}>{statistic.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
