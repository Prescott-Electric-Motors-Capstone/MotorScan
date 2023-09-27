<<<<<<<< Updated upstream:src/screens/SignInScreen/SignInScreen.js
import { Alert, Image, StyleSheet, ScrollView, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
========
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
>>>>>>>> Stashed changes:src/screens/SignInScreen.js
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
<<<<<<<< Updated upstream:src/screens/SignInScreen/SignInScreen.js
	const [loading, setLoading] = useState(false);
========
>>>>>>>> Stashed changes:src/screens/SignInScreen.js

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

<<<<<<<< Updated upstream:src/screens/SignInScreen/SignInScreen.js
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
========
	console.log(errors);

	const onSignInPressed = (data) => {
		console.log(data);
		nav.navigate("Home");
>>>>>>>> Stashed changes:src/screens/SignInScreen.js
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
<<<<<<<< Updated upstream:src/screens/SignInScreen/SignInScreen.js
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
========
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
>>>>>>>> Stashed changes:src/screens/SignInScreen.js
					control={control}
					rules={{
						required: "Password is required",
						minLength: {
							value: 6,
							message: "Password should be minimum 6 characters long",
						},
					}}
				/>

<<<<<<<< Updated upstream:src/screens/SignInScreen/SignInScreen.js
				<CustomButton
					text={loading ? "Loading..." : "Sign In"}
					onPress={handleSubmit(onSignInPressed)}
				/>

				<CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
========
				<CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
				<CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
>>>>>>>> Stashed changes:src/screens/SignInScreen.js

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
<<<<<<<< Updated upstream:src/screens/SignInScreen/SignInScreen.js
		width: "80%",
		maxWidth: 342,
		maxHeight: 190,
========
		width: "70%",
		maxWidth: 300,
		maxHeight: 150,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#051c60",
		margin: 10,
>>>>>>>> Stashed changes:src/screens/SignInScreen.js
	},
});

export default SignInScreen;
