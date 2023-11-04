import { FiArrowLeft, FiUser } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Hamburger from '../hamburger/Hamburger';
import styles from './Header.module.scss';

const Header = ({ backLink = '' }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  return (
    <header className={styles.header}>
      {pathname !== '/' ? (
        <button
          onClick={() => {
            navigate(backLink);
          }}
        >
          <FiArrowLeft />
        </button>
      ) : (
        <button
          onClick={() => {
            navigate('/profile');
          }}
        >
          <FiUser />
        </button>
      )}
      <Hamburger />
    </header>
  );
};

export default Header;
