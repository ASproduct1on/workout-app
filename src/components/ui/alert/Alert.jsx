import cn from 'clsx';
import React from 'react';

import styles from './Alert.module.scss';

const Alert = ({ type = 'success', text }) => {
  return <div className={cn(styles.alert, styles[type])}>{text}</div>;
};

export default Alert;
