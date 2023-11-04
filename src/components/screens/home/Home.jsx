import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth.js';
import Layout from '../../layout/Layout';
import Button from '../../ui/button/Button';
import Counter from '../../ui/counter/Counter.jsx';
import styles from './Home.module.scss';

function Home() {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  return (
    <Layout bgImage="/images/home-bg.jpg">
      <Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
        {isAuth ? 'New' : 'Sign in'}
      </Button>
      <h1 className={styles.heading}>KEEP STRAIGHT!</h1>
      <Counter />
    </Layout>
  );
}

export default Home;
