import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});
