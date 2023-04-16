import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";

const SignUpScreen = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordRepeat, setPasswordRepeat] = useState("");
	const nav = useNavigation();

	const onRegisterPressed = () => {
		nav.navigate("EmailConfirmation");
	};

	const onTermsPressed = () => {
		console.warn("Terms of Use");
	};

	const onPrivacyPressed = () => {
		console.warn("Privacy Policy");
	};

	const onSignInPressed = () => {
		nav.navigate("SignIn");
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Create Account</Text>

				<CustomInput placeholder="Name" value={name} setValue={setName} />
				<CustomInput placeholder="Email" value={email} setValue={setEmail} />
				<CustomInput
					placeholder="Password"
					value={password}
					setValue={setPassword}
					secureTextEntry
				/>
				<CustomInput
					placeholder="Repeat Password"
					value={passwordRepeat}
					setValue={setPasswordRepeat}
					secureTextEntry
				/>

				<CustomButton text="Register" onPress={onRegisterPressed} />

				<Text style={styles.text}>
					By registering, you confirm that you accept our{" "}
					<Text style={styles.link} onPress={onTermsPressed}>
						Terms of Use
					</Text>{" "}
					and{" "}
					<Text style={styles.link} onPress={onPrivacyPressed}>
						Privacy Policy
					</Text>
				</Text>

				<SocialSignInButtons />

				<CustomButton text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY" />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	root: {
		alignItems: "center",
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#051c60",
		margin: 10,
	},
	text: {
		color: "gray",
		marginVertical: 10,
	},
	link: {
		color: "#FDB075",
	},
});

export default SignUpScreen;
