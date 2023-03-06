import React from 'react';
import classes from './layout.module.scss';

type LayoutProps = {
  children: React.ReactNode
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={classes.wrapper}>
    <div className={classes.result}>Win Lose</div>

    {' '}
    {children}
  </div>
);

export default Layout;
