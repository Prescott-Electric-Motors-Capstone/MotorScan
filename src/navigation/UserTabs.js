import React, { useEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Dashboard from "../screens/Dashboard";
import NewMotor from "../screens/NewMotor";
import SettingStack from "./SettingStack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const UserStack = () => {
	const screenOptions = {
		tabBarShowLabel: false,
		headerShown: false,
		keyboardHidesTabBar: true,
		// tabBarStyle: {
		// 	position: "absolute",
		// 	bottom: 0,
		// 	left: 0,
		// 	right: 0,
		// 	height: 60,
		// 	elevation: 0,
		// 	backgroundColor: "#fff",
		// },
	};

	const dashboardStyle = {
		tabBarIcon: ({ focused }) => {
			return (
				<View style={{ alignItems: "center" }}>
					<MaterialIcon name="dashboard" size={24} color={focused ? "#16247d" : "#111"} />
					<Text style={{ fontSize: 12, color: "#16247d" }}>Dashboard</Text>
				</View>
			);
		},
	};

	const newMotorStyle = {
		tabBarIcon: ({ focused }) => {
			return (
				<View
					style={{
						// top: Platform.OS === "ios" ? -10 : -20,
						// width: Platform.OS === "ios" ? 50 : 60,
						// height: Platform.OS === "ios" ? 50 : 60,
						// borderRadius: Platform.OS === "ios" ? 25 : 30,
						top: -20,
						width: 60,
						height: 60,
						borderRadius: 25,

						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#007aff",
					}}
				>
					<FontAwesome name="plus" size={24} color="#fff" />
				</View>
			);
		},
	};

	const settingStyle = {
		tabBarIcon: ({ focused }) => {
			return (
				<View style={{ alignItems: "center" }}>
					<FontAwesome name="cog" size={24} color={focused ? "#16247d" : "#111"} />
					<Text style={{ fontSize: 12, color: "#16247d" }}>Settings</Text>
				</View>
			);
		},
	};

	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={screenOptions}>
				<Tab.Screen name="Dashboard" component={Dashboard} options={dashboardStyle} />
				<Tab.Screen name="NewMotor" component={NewMotor} options={newMotorStyle} />
				<Tab.Screen name="SettingStack" component={SettingStack} options={settingStyle} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default UserStack;

const styles = StyleSheet.create({
	tabs: {
		position: "absolute",
		bottom: 25,
		left: 20,
		right: 20,
		elevation: 0,
		backgroundColor: "#fff",
		borderRadius: 15,
		height: 90,
	},
});
