import React from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import userAuthLogic from "../auth";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TermsOfUseScreen from "../screens/Terms-Privacy/TermsOfUseScreen";
import PrivacyPolicyScreen from "../screens/Terms-Privacy/PrivacyPolicyScreen";
import EmailConfirmationScreen from "../screens/EmailConfirmationScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	const user = userAuthLogic();

	if (user === undefined) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator />
			</View>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{user ? (
					<Stack.Screen name="Home" component={HomeScreen} />
				) : (
					<>
						<Stack.Screen name="SignIn" component={SignInScreen} />
						<Stack.Screen name="SignUp" component={SignUpScreen} />
						<Stack.Screen name="TermsOfUse" component={TermsOfUseScreen} />
						<Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
						<Stack.Screen name="EmailConfirmation" component={EmailConfirmationScreen} />
						<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
						<Stack.Screen name="NewPassword" component={NewPasswordScreen} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
