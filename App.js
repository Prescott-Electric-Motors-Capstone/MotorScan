import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import Navigation from "./src/navigation";
import { Amplify, Auth } from "aws-amplify";
import config from "./src/aws-exports";

Amplify.configure(config);

const App = () => {
	return (
		<SafeAreaView style={styles.root}>
			<Navigation />
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
