import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/Dashboard";
import NewDevice from "../screens/NewDevice";
import Settings from "../screens/Settings";

const Stack = createNativeStackNavigator();

const UserStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Dashboard" component={Dashboard} />
				<Stack.Screen name="NewDevice" component={NewDevice} />
				<Stack.Screen name="Settings" component={Settings} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default UserStack;
