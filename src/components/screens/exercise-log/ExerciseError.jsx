import Alert from '../../ui/alert/Alert';

const ExerciseError = ({ errors }) => {
  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      {errors.map((error, index) =>
        error ? <Alert key={error + index} type="error" text={error} /> : null,
      )}
    </div>
  );
};

export default ExerciseError;
