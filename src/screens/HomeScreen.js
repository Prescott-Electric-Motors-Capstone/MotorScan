import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Dashboard</Text>
			<View style={styles.searchBar}>
				<TextInput
					style={styles.searchInput}
					placeholder="Search"
					placeholderTextColor="#A9A9A9"
					value={searchQuery}
					onChangeText={setSearchQuery}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingHorizontal: 20,
	},
	searchBar: {
		backgroundColor: "#F5F5F5",
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		marginTop: 20,
		marginBottom: 10,
		width: "100%",
	},
	searchInput: {
		flex: 1,
		height: 40,
		marginLeft: 10,
		textAlign: "left", // Align text to left
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#051c60",
		margin: 10,
	},
});

export default HomeScreen;
