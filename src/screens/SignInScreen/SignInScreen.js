import {
	Image,
	StyleSheet,
	ScrollView,
	useWindowDimensions,
	View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import Logo from "../../../assets/images/pem-logo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";

const SignInScreen = () => {
	const nav = useNavigation();
	const { height } = useWindowDimensions();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

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
				<Image
					source={Logo}
					style={[styles.logo, { height: height * 0.8 }]}
					resizeMode="contain"
				/>

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

				<CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

				<CustomButton
					text="Forgot Password?"
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
		width: "80%",
		maxWidth: 342,
		maxHeight: 190,
	},
});

export default SignInScreen;
