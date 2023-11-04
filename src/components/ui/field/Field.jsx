import styles from './Field.module.scss';

const Field = ({ register, name, options, error, ...rest }) => {
  return (
    <>
      <input {...register(name, options)} {...rest} className={styles.input} />
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};

export default Field;
