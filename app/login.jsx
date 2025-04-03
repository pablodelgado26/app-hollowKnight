import { View, Text, Pressable, TextInput, StyleSheet, ImageBackground } from "react-native";
import { Link, Stack } from 'expo-router';

export default function Login() {
    const handleLogin = () => {
        alert('Login feito com sucesso!');
    };

    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/736x/1e/a2/9c/1ea29c007e6fadc6b801403596961f58.jpg' }}
            style={styles.background}
            resizeMode="cover">
            <Stack.Screen options={{
                title: 'Login',
                headerStyle: { backgroundColor: '#000' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold', fontSize: 30 }
            }} />
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.email} placeholder="Email" />
                <TextInput style={styles.password} placeholder="Senha" secureTextEntry={true} />

                <Link href="/" style={styles.buttonContainer} asChild>
                    <Pressable style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </Pressable>
                </Link>
            </View>
            <Link href="/termos" style={styles.terms}>Leia os Termos</Link>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
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
    terms: {
        marginTop: 20,
        color: '#ffffff',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 20,
    },
    email: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    password: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
});
