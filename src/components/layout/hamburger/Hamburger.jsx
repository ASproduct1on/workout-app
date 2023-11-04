import { FiAlignJustify, FiX } from 'react-icons/fi';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import styles from './Hamburger.module.scss';
import Menu from './Menu';

const Hamburger = () => {
    const { isShow, ref, setIsShow } = useOnClickOutside(false);

    return (
        <div className={styles.wrapper} ref={ref}>
            <button onClick={() => setIsShow(!isShow)}>
                {isShow ? (
                    <FiX color="white" />
                ) : (
                    <FiAlignJustify color="white" />
                )}
            </button>
            <Menu isShow={isShow} />
        </div>
    );
};

export default Hamburger;
