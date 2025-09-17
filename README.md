# App Menu Simples - React Native

## 📱 Sobre o Projeto

Este é um projeto de aplicativo mobile desenvolvido em **React Native** durante uma aula prática. O aplicativo demonstra conceitos fundamentais de navegação entre telas, formulários e passagem de dados entre componentes.

### 🎯 Objetivos do Projeto
- Aprender navegação entre telas usando React Navigation
- Implementar formulários com captura de dados
- Praticar passagem de parâmetros entre telas
- Desenvolver interface básica com React Native

## 🚀 Funcionalidades

O aplicativo possui 4 telas principais:

1. **Tela Inicial (HomeScreen)** - Menu principal com botões de navegação
2. **Tela Sobre (AboutScreen)** - Informações sobre React Native com conteúdo educativo
3. **Tela Formulário (FormScreen)** - Formulário para captura de dados (nome e email)
4. **Tela Resultado (ResultScreen)** - Exibe os dados capturados no formulário

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento e deploy
- **React Navigation** - Biblioteca para navegação entre telas
- **JavaScript/React** - Linguagem e biblioteca base

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) (app para testar no celular)

## 🏗️ Como Criar o Projeto Manualmente

### Passo 1: Criar o Projeto Expo

```bash
# Criar novo projeto Expo
npx create-expo-app MeuApp --template blank

# Navegar para o diretório
cd AppMenuSimples
```

### Passo 2: Instalar Dependências de Navegação

```bash
# Instalar React Navigation
npm install @react-navigation/native @react-navigation/native-stack

# Instalar dependências necessárias
npm install react-native-safe-area-context react-native-screens
```

### Passo 3: Estrutura de Arquivos

Crie a seguinte estrutura de pastas:

```
AppMenuSimples/
├── App.js
├── index.js
├── package.json
├── app.json
└── screens/
    ├── HomeScreen.js
    ├── AboutScreen.js
    ├── FormScreen.js
    └── ResultScreen.js
```

### Passo 4: Configurar o App.js

```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import FormScreen from './screens/FormScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Passo 5: Criar HomeScreen.js

```javascript
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
      <Button
        title="Ir para Formulário"
        onPress={() => navigation.navigate('Form')}
      />
      <Button
        title="Ir para Resultado"
        onPress={() => navigation.navigate('Result')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20 
  }
});
```

### Passo 6: Criar AboutScreen.js

```javascript
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Sobre o App</Text>
        <Text style={styles.text}>
          Este é um aplicativo desenvolvido em React Native para demonstrar 
          conceitos de navegação entre telas e formulários.
        </Text>
        <Text style={styles.text}>
          React Native permite criar aplicativos nativos para Android e iOS 
          usando apenas JavaScript e React.
        </Text>
        <Button
          title="Voltar para Home"
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    padding: 20
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20, 
    alignItems: "center" 
  },
  scrollView: { 
    flex: 1 
  },
  text: { 
    fontSize: 16, 
    marginBottom: 20 
  }
});
```

### Passo 7: Criar FormScreen.js

```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FormScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Navega para a tela de resultado passando os valores
    navigation.navigate('Result', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário</Text>

      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome"
      />

      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 15, 
    borderRadius: 5 
  }
});
```

### Passo 8: Criar ResultScreen.js

```javascript
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { name, email } = route.params; // Recebe os valores do formulário

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      <Text>Nome: {name}</Text>
      <Text>Email: {email}</Text>
      <Button 
        title="Voltar para Formulário" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20, 
    textAlign: 'center' 
  }
});
```

## 🚀 Como Executar o Projeto

### Instalação das Dependências

```bash
npm install
```

### Executar o Projeto

```bash
# Iniciar o servidor de desenvolvimento
npm start

# Ou usar os comandos específicos do Expo
npm run android  # Para Android
npm run ios      # Para iOS
npm run web      # Para Web
```

### Testando no Dispositivo

1. Instale o app **Expo Go** no seu celular
2. Escaneie o QR code que aparece no terminal
3. O app será carregado no seu dispositivo

## 📚 Conceitos Aprendidos

- **Navegação**: Uso do React Navigation para navegar entre telas
- **Stack Navigator**: Configuração de navegação em pilha
- **Passagem de Parâmetros**: Como enviar dados entre telas
- **Formulários**: Captura de dados com TextInput
- **Estado**: Uso do useState para gerenciar dados do formulário
- **Estilização**: Aplicação de estilos com StyleSheet
- **ScrollView**: Para conteúdo que excede a tela

## 🎓 Contexto Educacional

Este projeto foi desenvolvido como parte de uma aula prática de React Native, focando nos conceitos fundamentais de desenvolvimento mobile. O objetivo é proporcionar uma base sólida para futuros projetos mais complexos.

## 📝 Licença

Este projeto é destinado exclusivamente para fins educacionais.

---

**Desenvolvido em sala de aula** 📚  
*Projeto prático de React Native*
