import {
  View,
  Text,
  ImageBackground,
  Pressable,
  StyleSheet,
} from "react-native";
import { Link, Stack } from "expo-router";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Sobre",
        }}
      />
      <ImageBackground
        source={{
          uri: "https://i.redd.it/mq05l4h0ylia1.jpg",
        }}
        style={styles.background}
      >
        <Text style={styles.title}>Sobre o App</Text>
        <View style={styles.textContainer}>
          <Text style={styles.aboutText}>
            O aplicativo foi feito com o objetivo de agradar os fâs do jogo
            Hollow Knight, um dos melhores jogos indies da história.
          </Text>
          <Text style={styles.aboutText}>
            O jogo é um metroidvania, onde você controla um pequeno cavaleiro em
            um mundo subterrâneo chamado Hallownest.
          </Text>
        </View>
        <Pressable style={styles.linkPressable}>
          <Link href="/" style={styles.link}>
            <Text style={styles.linkText}>Ir para Home</Text>
          </Link>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 22,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textDecorationLine: "underline",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    gap: 15,
  },
  aboutText: {
    fontSize: 15,
    width: 290,
    textAlign: "justify",
    color: "white",
    textIndent: 10,
  },
  link: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 470,
  },
  linkText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
});
