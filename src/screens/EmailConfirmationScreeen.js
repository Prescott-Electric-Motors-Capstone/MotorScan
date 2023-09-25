import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const EmailConfirmationScreen = () => {
	const { control, handleSubmit } = useForm();

	const nav = useNavigation();

	const onConfirmPressed = (data) => {
		console.warn(data);
		nav.navigate("Home");
	};

	const onResendPressed = () => {
		console.warn("Resend code");
	};

	const onSignInPressed = () => {
		nav.navigate("SignIn");
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Confirm Your Email</Text>

				<CustomInput
					name="code"
					control={control}
					placeholder="Code"
					rules={{
						required: "Confirmation code is required",
					}}
				/>

				<CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
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
