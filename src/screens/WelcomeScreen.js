import React, { useState } from "react";
import { Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/images/pem-logo.png";
import CustomButton from "../components/CustomButton";

const WelcomeScreen = () => {
	const { height } = useWindowDimensions();
	const nav = useNavigation();

	const onSignInPressed = () => {
		nav.navigate("SignIn");
	};
	const onSignUpPressed = () => {
		nav.navigate("SignUp");
	};

	return (
		<View style={styles.root}>
			<Image source={Logo} style={[styles.logo, { height: height * 0.9 }]} resizeMode="contain" />

			<View style={styles.buttonContainer}>
				<CustomButton text="Sign In" onPress={onSignInPressed} />
				<CustomButton text="Sign In" onPress={onSignUpPressed} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		alignItems: "center",
		padding: 20,
	},
	logo: {
		width: "80%",
		maxWidth: 360,
		maxHeight: 200,
	},
	buttonContainer: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		paddingHorizontal: 20,
		marginBottom: 20,
	},
});

export default WelcomeScreen;
