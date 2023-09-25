import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const NewPasswordScreen = () => {
	const { control, handleSubmit } = useForm();
	const nav = useNavigation();

	const onSubmitPressed = (data) => {
		console.warn(data);
		nav.navigate("Home");
	};

	const onSignInPressed = () => {
		nav.navigate("SignIn");
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Reset Your Password</Text>

				<CustomInput
					name="code"
					placeholder="Code"
					control={control}
					rules={{ required: "Code is required" }}
				/>
				<CustomInput
					name="password"
					placeholder="Enter your new password"
					control={control}
					secureTextEntry
					rules={{
						required: "Password is required",
						minLength: {
							value: 6,
							message: "Password should be minimum 6 characters long",
						},
						maxLength: {
							value: 20,
							message: "Password should be maximum 20 characters long",
						},
					}}
				/>

				<CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

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
