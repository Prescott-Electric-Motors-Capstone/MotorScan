import { Alert, Image, StyleSheet, ScrollView, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { Auth } from "aws-amplify";

import Logo from "../../../assets/images/pem-logo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const SignInScreen = () => {
	const { height } = useWindowDimensions();
	const nav = useNavigation();
	const [loading, setLoading] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSignInPressed = async (data) => {
		if (loading) {
			return;
		}

		setLoading(true);

		try {
			const response = await Auth.signIn(data.username, data.password);
			console.log(response);
		} catch (e) {
			Alert.alert("Oops", e.message);
		}

		setLoading(false);
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
				<Image source={Logo} style={[styles.logo, { height: height * 0.8 }]} resizeMode="contain" />

				<CustomInput
					name="username"
					placeholder="Username"
					control={control}
					rules={{ required: "Username is required" }}
				/>

				<CustomInput
					name="password"
					placeholder="Password"
					secureTextEntry={true}
					control={control}
					rules={{
						required: "Password is required",
						minLength: {
							value: 6,
							message: "Password should be minimum 6 characters long",
						},
					}}
				/>

				<CustomButton
					text={loading ? "Loading..." : "Sign In"}
					onPress={handleSubmit(onSignInPressed)}
				/>

				<CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

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
		width: "80%",
		maxWidth: 342,
		maxHeight: 190,
	},
});

export default SignInScreen;
