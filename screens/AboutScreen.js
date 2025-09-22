import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.subtitle}>Navegação em aplicativos React Native com Expo</Text>

        <Image source={require('../assets/logo_estacio.png')} style={styles.image} />

        <Text style={styles.text}>
          Quando criamos aplicativos móveis, é comum termos várias telas que precisam se conectar entre si. Para isso, o <Text style={styles.bold}>React Navigation</Text> é uma das bibliotecas mais utilizadas no ecossistema React Native. Ele oferece diferentes formas de organizar a navegação, dependendo da experiência de usuário que desejamos construir.
        </Text>

        <Text style={styles.text}>
          Os três tipos mais comuns são: <Text style={styles.bold}>Stack Navigation</Text>, <Text style={styles.bold}>Drawer Navigation</Text> e <Text style={styles.bold}>Bottom Tab Navigation</Text>.
        </Text>

        <Text style={styles.sectionTitle}>
          <Text style={styles.bold}>1. Stack Navigation (Navegação em Pilha)</Text>
        </Text>

        <Text style={styles.text}>
          Funciona como uma pilha de páginas (similar ao histórico de um navegador). Cada nova tela "empilha" sobre a anterior, e o usuário pode voltar para a tela anterior. É muito usado em fluxos lineares, como login → cadastro → página inicial → detalhes de um item. O cabeçalho superior geralmente já vem configurado com botão de "voltar".
        </Text>

        <Text style={styles.example}>
          📌 <Text style={styles.bold}>Exemplo de uso:</Text> aplicativos que têm telas sequenciais, como um fluxo de compra em e-commerce.
        </Text>

        <Text style={styles.sectionTitle}>
          <Text style={styles.bold}>2. Drawer Navigation (Navegação com Menu Lateral)</Text>
        </Text>

        <Text style={styles.text}>
          Exibe um menu lateral (drawer) que pode ser aberto deslizando o dedo da esquerda para a direita ou tocando em um ícone de menu. É indicado quando existem muitas seções ou categorias que o usuário pode acessar a qualquer momento. Permite incluir ícones, textos e até cabeçalhos personalizados dentro do menu.
        </Text>

        <Text style={styles.example}>
          📌 <Text style={styles.bold}>Exemplo de uso:</Text> aplicativos de notícias, redes sociais ou sistemas com muitas páginas diferentes (ex: Gmail).
        </Text>

        <Text style={styles.sectionTitle}>
          <Text style={styles.bold}>3. Bottom Tab Navigation (Navegação com Abas Inferiores)</Text>
        </Text>

        <Text style={styles.text}>
          Adiciona um menu inferior fixo com abas (ícones e/ou textos). Facilita o acesso rápido às principais áreas do app, como "Início", "Pesquisar", "Perfil". Pode ser combinado com Stack ou Drawer para fluxos mais complexos. É uma navegação muito popular porque segue o padrão de design dos principais aplicativos móveis.
        </Text>

        <Text style={styles.example}>
          📌 <Text style={styles.bold}>Exemplo de uso:</Text> apps como Instagram, Twitter ou aplicativos de banco, onde as funções principais ficam no menu inferior.
        </Text>

        <Text style={styles.subtitle}>Conclusão</Text>

        <View style={styles.conclusionList}>
          <Text style={styles.listItem}>• <Text style={styles.bold}>Stack</Text> é ideal para navegação sequencial.</Text>
          <Text style={styles.listItem}>• <Text style={styles.bold}>Drawer</Text> é útil quando existem muitas opções e categorias.</Text>
          <Text style={styles.listItem}>• <Text style={styles.bold}>Bottom Tab</Text> é ótimo para destacar as principais funcionalidades do aplicativo.</Text>
        </View>

        <Text style={styles.text_destaque}>
          Na prática, esses tipos de navegação podem ser combinados. Por exemplo, um app pode ter abas inferiores (Bottom Tabs), onde cada aba abre novas telas em pilha (Stack), e ainda contar com um menu lateral (Drawer) para acessar configurações ou páginas extras.
        </Text>

        <Button
          title="Voltar para Home"
          onPress={() => navigation.goBack()}
          style={styles.button}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  subtitle: {
    fontSize: 22,
    marginBottom: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#34495e',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    color: '#2c3e50',
    textAlign: 'justify'
  },
  bold: {
    fontWeight: 'bold',
    color: '#2980b9'
  },
  example: {
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 10,
    padding: 12,
    backgroundColor: '#e8f4fd',
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#3498db',
    color: '#2c3e50',
    lineHeight: 22
  },
  conclusionList: {
    marginBottom: 20,
    paddingLeft: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 8,
    color: '#2c3e50',
    lineHeight: 22
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text_destaque: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
    color: '#e74c3c',
    fontWeight: 'bold',
    backgroundColor: '#fdf2f2',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#e74c3c',
    textAlign: 'justify',
    lineHeight: 24
  },
  button: {
    marginTop: 20,
  }
});
