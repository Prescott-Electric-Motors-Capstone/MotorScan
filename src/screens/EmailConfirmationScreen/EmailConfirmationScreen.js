import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const EmailConfirmationScreen = () => {
	const { control, handleSubmit } = useForm();

	const nav = useNavigation();

	const onConfirmPressed = (data) => {
		console.warn(data);
		nav.navigate("Home");
	};

	const onResendPressed = () => {
		console.warn("onResendPressed");
	};

	const onSignInPressed = () => {
		nav.navigate("SignIn");
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Create Account</Text>

				<CustomInput
					name="code"
					control={control}
					placeholder="Enter you confirmation code"
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
		color: "#051C60",
		margin: 10,
	},
});

export default EmailConfirmationScreen;
