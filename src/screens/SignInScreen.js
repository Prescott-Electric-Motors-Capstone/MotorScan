import React, { useState } from "react";
import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	View,
	useWindowDimensions,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";

const SignInScreen = () => {
	const { height } = useWindowDimensions();
	const nav = useNavigation();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	console.log(errors);

	const onSignInPressed = (data) => {
		console.log(data);
		nav.navigate("Home");
	};

	const onForgotPasswordPressed = () => {
		nav.navigate("ForgotPassword");
	};

	const onSignUpPressed = () => {
		nav.navigate("SignUp");
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Sign In</Text>

				<CustomInput
					name="email"
					placeholder="Email"
					control={control}
					rules={{ required: "Email is required" }}
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
					}}
				/>

				<CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
				<CustomButton
					text="Forgot password?"
					onPress={onForgotPasswordPressed}
					type="TERTIARY"
				/>

				<SocialSignInButtons />

				<CustomButton
					text="Don't have an account? Create an account"
					onPress={onSignUpPressed}
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
	logo: {
		width: "70%",
		maxWidth: 300,
		maxHeight: 150,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#051c60",
		margin: 10,
	},
});

export default SignInScreen;
