import { View, Text } from "react-native";
import React from "react";

import CustomButton from "./CustomButton";

const SocialSignInButtons = () => {
	const onSignInGoogle = () => {
		console.warn("Google Sign In");
	};

	const onSignInApple = () => {
		console.warn("Apple Sign In");
	};

	return (
		<>
			<CustomButton
				text="Sign In with Google"
				onPress={onSignInGoogle}
				bgColor="#FAE9EA"
				fgColor="#DD4D44"
			/>
			<CustomButton
				text="Sign In with Apple"
				onPress={onSignInApple}
				bgColor="#E3E3E3"
				fgColor="#363636"
			/>
		</>
	);
};

export default SocialSignInButtons;
