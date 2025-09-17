import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Button
        title="Ir para Sobre"
        onPress={() => navigation.navigate('About')}
      />
      <br />
      <Button
        title="Ir para Resultado"
        onPress={() => navigation.navigate('Result')}
      />
      <br />
        <Button
        title="Ir para Formulário"
        onPress={() => navigation.navigate('Form')}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});
