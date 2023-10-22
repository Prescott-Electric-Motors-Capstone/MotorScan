import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserAuthentication from "../auth/UserAuthentication";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	const { user } = UserAuthentication();

	return user ? <UserStack /> : <AuthStack />;
};

export default Navigation;
