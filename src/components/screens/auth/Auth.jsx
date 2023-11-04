import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../../layout/Layout';
import Loader from '../../ui/Loader';
import Button from '../../ui/button/Button';
import Field from '../../ui/field/Field';
import styles from './Auth.module.scss';

const isLoading = false;
const isLoadingAuth = false;

const Auth = () => {
  const [type, setType] = useState('auth');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Layout heading="Log in" bgImage="/images/auth-bg.png" />
      <div className="wrapper-inner-page">
        {(isLoading || isLoadingAuth) && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.email?.message}
            name="email"
            register={register}
            options={{ required: 'Email is required!' }}
            type="text"
            placeholder="Enter your Email"
          />
          <Field
            error={errors?.passwords?.message}
            name="password"
            register={register}
            options={{ required: 'Password is required!' }}
            type="text"
            placeholder="Enter your Password"
          />
          <div className={styles.wrapperButtons}>
            <Button clickHandler={() => setType('auth')}>Sign in!</Button>
            <Button clickHandler={() => setType('reg')}>Log in!</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
