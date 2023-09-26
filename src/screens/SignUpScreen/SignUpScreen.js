import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";

const EMAIL_REGEX =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
	const { control, handleSubmit, watch } = useForm();
	const pwd = watch("password");

	const nav = useNavigation();

	const onRegisterPressed = () => {
		nav.navigate("EmailConfirmation");
	};

	const onSignInPressed = () => {
		nav.navigate("SignIn");
	};

	const onTOUPressed = () => {
		nav.navigate("TermsOfUse");
	};

	const onPrivacyPressed = () => {
		nav.navigate("PrivacyPolicy");
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
						minLength: {
							value: 5,
							message: "Username should be minimum 5 characters long",
						},
						maxLength: {
							value: 24,
							message: "Username should be maximum 24 characters long",
						},
					}}
				/>

				<CustomInput
					name="email"
					control={control}
					placeholder="Email"
					rules={{
						required: "Email is required",
						pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
					}}
				/>

				<CustomInput
					name="password"
					control={control}
					placeholder="Password"
					secureTextEntry
					rules={{
						required: "Password is required",
						minLength: {
							value: 8,
							message: "Password should be minimum 8 characters long",
						},
					}}
				/>

				<CustomInput
					name="password-repeat"
					control={control}
					placeholder="Repeat Password"
					secureTextEntry
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
					<Text style={styles.link} onPress={onTOUPressed}>
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
		color: "#051C60",
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
