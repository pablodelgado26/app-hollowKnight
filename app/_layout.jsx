import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ 
            headerShown: true,
            headerStyle: {
                backgroundColor: '#000',
            }, 
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name="index" options={{ title: 'Home'}}/>
            <Stack.Screen name="about" options={{ title: 'Sobre'}}/>
        </Stack>
    )
    }