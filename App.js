import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import { useContext, useEffect, useState } from "react";
import AuthenticatedUserProvider, {
	AuthenticatedContext,
} from "./store/auth-context";

const Stack = createNativeStackNavigator();

const ChatStack = () => {
	return (
		<Stack.Navigator defaultScreenOptions={Home}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Chat" component={Chat} />
		</Stack.Navigator>
	);
};

const AuthStack = () => {
	return (
		<Stack.Navigator
			defaultScreenOptions={Login}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Signup" component={Signup} />
		</Stack.Navigator>
	);
};

const RootNavigator = () => {
	const { user, setUser } = useContext(AuthenticatedContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
			authenticatedUser ? setUser(authenticatedUser) : setUser(null);
			setLoading(false);
		});

		return () => unsubscribe();
	}, [user]);

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<NavigationContainer>
			{user ? <ChatStack /> : <AuthStack />}
		</NavigationContainer>
	);
};

export default function App() {
	return (
		<AuthenticatedUserProvider>
			<RootNavigator />
		</AuthenticatedUserProvider>
	);
}

const styles = StyleSheet.create({});
