import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";

import Navigation from "./src/navigation/Navigation";

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
