import cn from 'clsx';
import stylesLayout from '../../layout/Layout.module.scss';
import Header from '../../layout/header/Header';
import Loader from '../../ui/Loader';
import Counter from '../../ui/counter/Counter';
import styles from './Profile.module.scss';
import { useProfile } from './useProfile';

const Profile = () => {
  const { data, isLoading } = useProfile();
  return (
    <>
      <div
        className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
        style={{
          backgroundImage: `url('/images/profile-bg.jpg')`,
          height: 365,
        }}
      >
        <Header />
        <div className={styles.center}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <img
                src={'/images/header/user.svg'}
                alt="Profile"
                height="56"
                draggable={false}
              />
              <h1 className={stylesLayout.heading}>{data?.email}</h1>
            </>
          )}
        </div>
        <Counter />
      </div>
      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div className={styles.before_after}>
          {data?.images?.map((image, index) => (
            <div key={index}>
              <div className={styles.heading}>
                {index === 1 ? 'After' : 'Before'}
              </div>
              <img src={image} alt="" draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
