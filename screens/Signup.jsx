import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import backImage from "../assets/backImage.png";
import { useState } from "react";

const Signup = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onHandleSignup = () => {
		if (email !== "" && password !== "") {
			createUserWithEmailAndPassword(auth, email, password)
				.then(() => console.log("Signup successful"))
				.catch((e) => console.log("Signup failed ", e));
		}
	};

	return (
		<View style={styles.container}>
			<Image source={backImage} style={styles.backImage} />
			<View style={styles.whiteSheet} />
			<View style={styles.form}>
				<Text style={styles.title}>Sign up</Text>
				<TextInput
					style={styles.input}
					placeholder="Enter Email"
					autoCapitalize="none"
					keyboardType="email-address"
					textContentType="emailAddress"
					// autoFocus
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

				<Pressable style={styles.button} onPress={onHandleSignup}>
					<Text style={styles.buttonText}>Sign up</Text>
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
						Already have an account?{" "}
					</Text>
					<Pressable onPress={() => navigation.navigate("Login")}>
						<Text style={{ color: "#f57c00", fontWeight: "600", fontSize: 14 }}>
							{" "}
							Log In
						</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default Signup;

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
