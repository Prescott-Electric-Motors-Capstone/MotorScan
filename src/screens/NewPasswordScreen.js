import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const NewPasswordScreen = () => {
	const [code, setCode] = useState("");
	const [newPassword, setNewPassword] = useState("");

	const onSubmitPressed = () => {
		console.warn("Submit");
	};

	const onSignInPressed = () => {
		console.warn("Sign In");
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Reset Your Password</Text>

				<CustomInput placeholder="Code" value={code} setValue={setCode} />
				<CustomInput
					placeholder="Enter your new password"
					value={newPassword}
					setValue={setNewPassword}
				/>

				<CustomButton text="Submit" onPress={onSubmitPressed} />

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

export default NewPasswordScreen;
