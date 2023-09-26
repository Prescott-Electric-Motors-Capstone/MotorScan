import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import TermsOfUseScreen from "../screens/Terms-Privacy/TermsOfUseScreen";
import PrivacyPolicyScreen from "../screens/Terms-Privacy/PrivacyPolicyScreen";
import EmailConfirmationScreen from "../screens/EmailConfirmationScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen/NewPasswordScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="SignIn" component={SignInScreen} />
				<Stack.Screen name="SignUp" component={SignUpScreen} />

				<Stack.Screen name="TermsOfUse" component={TermsOfUseScreen} />
				<Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />

				<Stack.Screen
					name="EmailConfirmation"
					component={EmailConfirmationScreen}
				/>
				<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
				<Stack.Screen name="NewPassword" component={NewPasswordScreen} />

				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
