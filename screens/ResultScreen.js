import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { name, email } = route.params; // Recebe os valores do formulário

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      <Text>Nome: {name}</Text>
      <Text>Email: {email}</Text>
      <Button title="Voltar para Formulário" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' }
});