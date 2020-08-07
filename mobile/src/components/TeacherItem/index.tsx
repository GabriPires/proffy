import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/GabriPires.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Gabriel Pires</Text>
          <Text style={styles.subject}>Artes</Text>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;