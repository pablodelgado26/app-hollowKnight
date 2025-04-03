import {
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/736x/75/f7/a0/75f7a0a5ecb8c88b37df663332eadceb.jpg",
        }}
        style={styles.background}
      >
        <Text style={styles.welcomeText}>Bem-vindo ao App!</Text>
        <Text style={styles.descriptionText}>
          Explore o universo fascinante de Hollow Knight com o nosso site!
        </Text>

        <View style={styles.buttonContainer}>
          <Link href="/sobre" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Ir para Sobre</Text>
            </Pressable>
          </Link>

          <Link href="/login" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Ir para Login</Text>
            </Pressable>
          </Link>
        </View>

        <View href="/termos" style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Leia os Termos</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  welcomeText: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginTop: 50,
    fontWeight: "bold",
    fontFamily: "Arial",
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  descriptionText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
    marginRight: "15%",
    marginLeft: "15%",
    fontFamily: "Arial",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    gap: 30,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "30%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
  },
});
