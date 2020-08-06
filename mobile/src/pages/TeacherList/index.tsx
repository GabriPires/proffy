import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const TeacherList: React.FC = () => {
  return ( 
    <View style={styles.container}>
      <PageHeader />
    </View>
  );
}

export default TeacherList;