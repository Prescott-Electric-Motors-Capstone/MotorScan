import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";

const EMAIL_REGEX =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
	const { control, handleSubmit, watch } = useForm();
	const pwd = watch("password");

	const nav = useNavigation();

	const onRegisterPressed = () => {
		nav.navigate("EmailConfirmation");
	};

	const onTermsPressed = () => {
		console.warn("Terms of Use");
	};

	const onPrivacyPressed = () => {
		console.warn("Privacy Policy");
	};

	const onSignInPressed = () => {
		nav.navigate("SignIn");
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Create Account</Text>

				<CustomInput
					name="name"
					control={control}
					placeholder="Name"
					rules={{
						required: "Name is required",
					}}
				/>

				<CustomInput
					name="email"
					control={control}
					placeholder="Email"
					rules={{
						pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
					}}
				/>

				<CustomInput
					name="password"
					placeholder="Password"
					secureTextEntry
					control={control}
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

				<CustomInput
					name="password-repeat"
					placeholder="Repeat Password"
					secureTextEntry
					control={control}
					rules={{
						validate: (value) => value === pwd || "Password do not match",
					}}
				/>

				<CustomButton
					text="Register"
					onPress={handleSubmit(onRegisterPressed)}
				/>

				<Text style={styles.text}>
					By registering, you confirm that you accept our{" "}
					<Text style={styles.link} onPress={onTermsPressed}>
						Terms of Use
					</Text>{" "}
					and{" "}
					<Text style={styles.link} onPress={onPrivacyPressed}>
						Privacy Policy
					</Text>
				</Text>

				<SocialSignInButtons />

				<CustomButton
					text="Have an account? Sign in"
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
	text: {
		color: "gray",
		marginVertical: 10,
	},
	link: {
		color: "#FDB075",
	},
});

export default SignUpScreen;
