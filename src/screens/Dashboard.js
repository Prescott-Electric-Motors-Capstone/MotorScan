import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Pressable,
	Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import { FIREBASE_AUTH, FIREBASE_DB } from "../../config/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const Dashboard = () => {
	const [name, setName] = useState("");

	const [searchQuery, setSearchQuery] = useState("");
	const nav = useNavigation();

	const onSettingsPressed = () => {
		nav.navigate("Settings");
	};

	const onNewDevicePressed = () => {
		nav.navigate("NewDevice");
	};

	useEffect(() => {
		const fetchUserName = async () => {
			const docRef = doc(FIREBASE_DB, "users", FIREBASE_AUTH.currentUser.uid);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setName(docSnap.data().firstName);
			} else {
				console.log("No such document!");
			}
		};

		fetchUserName();
	}, []);

	return (
		<View style={styles.container}>
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
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingHorizontal: 20,
	},
	signOutButton: {
		width: "100%",
		textAlign: "center",
		color: "red",
		marginTop: 20,
		fontSize: 20,
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
});

export default Dashboard;
