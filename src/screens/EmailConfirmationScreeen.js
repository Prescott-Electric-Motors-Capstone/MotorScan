import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const EmailConfirmationScreen = () => {
	const [code, setCode] = useState("");

	const onConfirmPressed = () => {
		console.warn("Confirm");
	};

	const onResendPressed = () => {
		console.warn("Resend code");
	};

	const onSignInPressed = () => {
		console.warn("Sign In");
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Confirm Your Email</Text>

				<CustomInput placeholder="Code" value={code} setValue={setCode} />

				<CustomButton text="Confirm" onPress={onConfirmPressed} />
				<CustomButton
					text="Resend code"
					onPress={onResendPressed}
					type="SECONDARY"
				/>
				<CustomButton
					text="Back to sign in"
					onPress={onSignInPressed}
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
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#051c60",
		margin: 10,
	},
});

export default EmailConfirmationScreen;
