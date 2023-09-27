import React from "react";
import { Alert, StyleSheet, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const ForgotPasswordScreen = () => {
	const { control, handleSubmit } = useForm();

	const nav = useNavigation();

	const onSendPressed = async (data) => {
		try {
			await Auth.forgotPassword(data.username);
			nav.navigate("NewPassword");
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

				<CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />
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

export default ForgotPasswordScreen;
