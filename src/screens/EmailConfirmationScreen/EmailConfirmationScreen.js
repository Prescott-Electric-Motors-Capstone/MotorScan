import React from "react";
import { Alert, StyleSheet, ScrollView, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const EmailConfirmationScreen = () => {
	const route = useRoute();
	const { control, handleSubmit, watch } = useForm({
		defaultValues: { username: route?.params?.username },
	});

	const user_name = watch("username");

	const nav = useNavigation();

	const onConfirmPressed = async (data) => {
		try {
			await Auth.confirmSignUp(data.username, data.code);
			nav.navigate("SignIn");
		} catch (e) {
			Alert.alert("Oops", e.message);
		}
	};

	const onResendPressed = async () => {
		try {
			await Auth.resendSignUp(user_name);
			Alert.alert("Success", "A new confirmation code has been sent to your email");
		} catch (e) {
			Alert.alert("Oops", e.message);
		}
	};

	const onSignInPressed = () => {
		nav.navigate("SignIn");
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Create Account</Text>

				<CustomInput
					name="username"
					control={control}
					placeholder="Username"
					rules={{
						required: "Username is required",
					}}
				/>

				<CustomInput
					name="code"
					control={control}
					placeholder="Enter you confirmation code"
					rules={{
						required: "Confirmation code is required",
					}}
				/>

				<CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
				<CustomButton text="Resend code" onPress={onResendPressed} type="SECONDARY" />
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
		color: "#051C60",
		margin: 10,
	},
});

export default EmailConfirmationScreen;
