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

      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quia veritatis sequi magni corporis sunt eos saepe impedit aliquam reprehenderit facere at odio cumque placeat voluptatibus, ab molestiae asperiores exercitationem?
      </Text>
    </View>
  );
}

export default TeacherItem;