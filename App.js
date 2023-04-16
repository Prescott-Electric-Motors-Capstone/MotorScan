import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";

import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const App = () => {
	return (
		<SafeAreaView style={styles.root}>
			{/* <SignInScreen /> */}
			<SignUpScreen />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "#F9FBFC",
	},
});

export default App;
