import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const ForgotPasswordScreen = () => {
	const [email, setEmail] = useState("");
	const nav = useNavigation();

	const onSendPressed = () => {
		nav.navigate("NewPassword");
	};

	const onSignInPressed = () => {
		nav.navigate("SignIn");
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Reset Your Password</Text>

				<CustomInput placeholder="Code" value={email} setValue={setEmail} />

				<CustomButton text="Confirm" onPress={onSendPressed} />

				<CustomButton text="Back to sign in" onPress={onSignInPressed} type="TERTIARY" />
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
});

export default ForgotPasswordScreen;
