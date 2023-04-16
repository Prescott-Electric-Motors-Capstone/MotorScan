import React, { useState } from "react";
import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/images/pem-logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";

const SignInScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { height } = useWindowDimensions();
	const nav = useNavigation();

	const onSignInPressed = () => {
		nav.navigate("Home");
	};

	const onForgotPasswordPressed = () => {
		nav.navigate("ForgotPassword");
	};

	const onSignUpPressed = () => {
		nav.navigate("SignUp");
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

				<CustomInput placeholder="Email" value={email} setValue={setEmail} />
				<CustomInput
					placeholder="Password"
					value={password}
					setValue={setPassword}
					secureTextEntry
				/>

				<CustomButton text="Sign In" onPress={onSignInPressed} />
				<CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

				<SocialSignInButtons />

				<CustomButton
					text="Don't have an account? Create an account"
					onPress={onSignUpPressed}
					type="TERTIARY"
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	root: {
		alignItems: "center",
		padding: 20,
	},
	logo: {
		width: "70%",
		maxWidth: 300,
		maxHeight: 150,
	},
});

export default SignInScreen;
