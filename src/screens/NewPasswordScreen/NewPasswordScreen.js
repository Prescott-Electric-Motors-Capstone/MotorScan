import React from "react";
import { Alert, StyleSheet, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const NewPasswordScreen = () => {
	const { control, handleSubmit } = useForm();

	const nav = useNavigation();

	const onSubmitPressed = async (data) => {
		try {
			await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
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
				<Text style={styles.title}>Reset Your Password</Text>

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
					placeholder="Code"
					rules={{
						required: "Code is required",
					}}
				/>

				<CustomInput
					name="password"
					control={control}
					placeholder="Enter your new password"
					secureTextEntry
					rules={{
						required: "Password is required",
						minLength: {
							value: 8,
							message: "Password should be minimum 8 characters long",
						},
					}}
				/>

				<CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
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

export default NewPasswordScreen;
