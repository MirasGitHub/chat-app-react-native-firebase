import {
	Image,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import backImage from "../assets/backImage.png";
import { useState } from "react";

const Login = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onHandleLogin = () => {
		if (email !== "" && password !== "") {
			signInWithEmailAndPassword(auth, email, password)
				.then(() => console.log("Login successful"))
				.catch((e) => console.log("Login failed ", e));
		}
	};

	return (
		<View style={styles.container}>
			<Image source={backImage} style={styles.backImage} />
			<View style={styles.whiteSheet} />
			<View style={styles.form}>
				<Text style={styles.title}>Log In</Text>
				<TextInput
					style={styles.input}
					placeholder="Enter Email"
					autoCapitalize="none"
					keyboardType="email-address"
					textContentType="emailAddress"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>

				<TextInput
					style={styles.input}
					placeholder="Enter password"
					autoCapitalize="none"
					autoCorrect={false}
					secureTextEntry
					textContentType="password"
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>

				<Pressable style={styles.button} onPress={onHandleLogin}>
					<Text style={styles.buttonText}>Log in</Text>
				</Pressable>
				<View
					style={{
						marginTop: 20,
						flexDirection: "row",
						alignItems: "center",
						alignSelf: "center",
					}}
				>
					<Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
						Don't have an account?{" "}
					</Text>
					<Pressable onPress={() => navigation.navigate("Signup")}>
						<Text style={{ color: "#f57c00", fontWeight: "600", fontSize: 14 }}>
							{" "}
							Sign Up
						</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 36,
		fontWeight: "bold",
		color: "orange",
		alignSelf: "center",
		paddingBottom: 24,
	},
	input: {
		backgroundColor: "#F6F7FB",
		height: 58,
		marginBottom: 20,
		fontSize: 16,
		borderRadius: 10,
		padding: 12,
	},
	backImage: {
		width: "100%",
		height: 340,
		position: "absolute",
		top: 0,
		resizeMode: "cover",
	},
	whiteSheet: {
		width: "100%",
		height: "75%",
		position: "absolute",
		bottom: 0,
		backgroundColor: "#fff",
		borderTopLeftRadius: 60,
	},
	form: {
		flex: 1,
		justifyContent: "center",
		marginHorizontal: 30,
	},
	button: {
		backgroundColor: "#f57c00",
		height: 58,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 40,
	},
	buttonText: {
		fontWeight: "bold",
		color: "#fff",
		fontSize: 18,
	},
});
