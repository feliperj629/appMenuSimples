import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>
              <h1>A importância de estudar React Native</h1>

              <Image source={require('../assets/logo_estacio.png')} style={styles.image} />

              <p style={styles.text}>
                Estudar <b>React Native</b> é essencial para quem deseja atuar no desenvolvimento mobile moderno, pois a tecnologia permite criar aplicativos nativos para Android e iOS utilizando apenas JavaScript e React. Isso significa que, com um único código-base, é possível atingir duas das maiores plataformas do mercado, reduzindo tempo e esforço de desenvolvimento. Essa característica de multiplataforma faz do React Native uma escolha muito atrativa tanto para iniciantes quanto para desenvolvedores experientes.
              </p>

              <p style={styles.text}>
                Além da praticidade, o React Native oferece <b>alto desempenho</b>, já que seus componentes se comunicam diretamente com APIs nativas dos dispositivos. Isso garante que os aplicativos tenham fluidez e uma experiência de usuário semelhante à dos apps desenvolvidos de forma totalmente nativa. Dessa forma, o conhecimento em React Native não apenas abre portas para projetos mais eficientes, mas também garante que o desenvolvedor consiga entregar produtos competitivos e de qualidade.
              </p>

              <p style={styles.text}>
                Outro ponto importante é a <a>ampla comunidade</a> que existe em torno do React Native. Por ser mantido pelo Facebook (atual Meta) e usado por empresas como Instagram, Uber e Walmart, a tecnologia recebe constantes atualizações e conta com uma base sólida de bibliotecas, ferramentas e tutoriais. Isso torna o aprendizado mais acessível e possibilita encontrar soluções para problemas comuns de maneira rápida, o que é um grande diferencial no dia a dia profissional.
              </p>

              <p style={styles.text_destaque}>
                Por fim, estudar React Native amplia as oportunidades de carreira e empreendedorismo. Profissionais que dominam essa tecnologia são valorizados, já que empresas buscam soluções ágeis e econômicas para desenvolver aplicativos. Além disso, o conhecimento adquirido pode ser aplicado em projetos pessoais ou startups, permitindo transformar ideias em produtos digitais com maior rapidez. Em um mercado cada vez mais orientado à mobilidade, investir no aprendizado de React Native é um passo estratégico para o futuro.
              </p>
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
  container: { flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    padding: 20,},
  title: { fontSize: 24, marginBottom: 20, alignItems: "center" },
  scrollView: { flex: 1 },
  text: { fontSize: 16, marginBottom: 20 },
  image: { width: 100, height: 100 },
  text_destaque: { fontSize: 16, marginBottom: 20, color: 'red' }
});
