import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Home, ItemDetail } from './screens/';
import { StoreContextProvider } from './context/storeContextProvider';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: 'transparent',
	},
};

const Stack = createStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
		'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
		'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<StoreContextProvider>
			<NavigationContainer theme={theme}>
				<Stack.Navigator
					screenOptions={{ headerShown: false }}
					initialRouteName={'Home'}
				>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='ItemDetail' component={ItemDetail} />
				</Stack.Navigator>
				<StatusBar />
			</NavigationContainer>
		</StoreContextProvider>
	);
}

