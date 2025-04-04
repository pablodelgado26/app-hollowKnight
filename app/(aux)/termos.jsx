import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function TermosDeUso() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{
        title: 'Termos',
      }} />
      <Text style={styles.title}>Termos de Uso</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Introdução</Text>
        <Text style={styles.sectionText}>
          Bem-vindo ao nosso aplicativo. Ao utilizar nossos serviços, você concorda com estes termos de uso.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Uso do Aplicativo</Text>
        <Text style={styles.sectionText}>
          Você se compromete a usar o aplicativo de forma ética, legal e de acordo com todas as leis e regulamentos aplicáveis.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Privacidade</Text>
        <Text style={styles.sectionText}>
          Respeitamos sua privacidade. Os dados pessoais são tratados de acordo com nossa Política de Privacidade.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Limitação de Responsabilidade</Text>
        <Text style={styles.sectionText}>
          Nosso aplicativo é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Modificações</Text>
        <Text style={styles.sectionText}>
          Reservamos o direito de modificar estes termos a qualquer momento. As alterações serão comunicadas aos usuários.
        </Text>
      </View>

      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Voltar para Home</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 8,
    shadowColor: '#ffffff',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  sectionText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});