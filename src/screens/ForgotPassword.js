import React, { useState } from "react";
import { Alert, StyleSheet, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
	const { control, handleSubmit } = useForm();
	const nav = useNavigation();

	const onSendPressed = (data) => {
		console.log(data);
	};

	const onSignInPressed = () => {
		nav.navigate("SignIn");
	};

	return (
		<View style={styles.root}>
			<Text style={styles.title}>Reset Password</Text>

			<CustomInput
				name="email"
				placeholder="Email"
				control={control}
				rules={{ required: "Email is required" }}
			/>

			<View style={{ marginBottom: 5 }}>
				<Text></Text>
			</View>

			<CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />
			<CustomButton text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY" />
		</View>
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
		color: "#051C60",
		margin: 15,
	},
	text: {
		color: "gray",
		marginVertical: 20,
	},
	link: {
		color: "#FDB075",
	},
});

export default ForgotPassword;
