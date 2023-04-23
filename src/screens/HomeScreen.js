import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const nav = useNavigation();

	const onSettingsPressed = () => {
		nav.navigate("Settings");
	};

	const onNewDevicePressed = () => {
		nav.navigate("NewDevice");
	};

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity onPress={onSettingsPressed} style={styles.settingsButton}>
				<Icon name="cog" size={24} color="#051c60" />
			</TouchableOpacity>

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

			<View style={styles.newDeviceContainer}>
				<Pressable onPress={onNewDevicePressed} style={styles.newDeviceButton}>
					<Text style={styles.newDeviceText}>New Device</Text>
				</Pressable>
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
		textAlign: "left",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#051c60",
		margin: 10,
	},
	settingsButton: {
		position: "absolute",
		top: 10,
		right: 10,
	},
	newDeviceContainer: {
		position: "absolute",
		bottom: 20,
		alignSelf: "center",
	},
	newDeviceButton: {
		backgroundColor: "#1EBBD7",
		borderRadius: 8,
		height: 50,
		width: 200,
		alignItems: "center",
		justifyContent: "center",
	},
	newDeviceText: {
		fontWeight: "bold",
		color: "#FFFFFF",
		fontSize: 16,
	},
});

export default HomeScreen;
