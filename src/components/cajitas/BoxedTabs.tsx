import React from 'react';
import Tabs from '@theme/Tabs';
import styles from './BoxedTabs.module.css';

interface BoxedTabsProps {
  children: React.ComponentProps<typeof Tabs>['children'];
  groupId?: string;
}

const BoxedTabs = ({ children, groupId }: BoxedTabsProps): JSX.Element => {
  return (
    <div className={styles.box}>
      <Tabs groupId={groupId}>{children}</Tabs>
    </div>
  );
};

export default BoxedTabs;
