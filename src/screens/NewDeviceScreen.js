import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const NewDeviceScreen = () => {
	const [motorName, setMotorName] = useState("");
	const nav = useNavigation();

	const onAddDevicePressed = () => {
		nav.navigate("Home");
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrapper}>
				<View style={styles.root}>
					<Text style={styles.title}>Add New Device</Text>

					<CustomInput placeholder="Motor Name" value={motorName} setValue={setMotorName} />
				</View>

				<View style={styles.bottomButton}>
					<CustomButton text="Add New Device" onPress={onAddDevicePressed} />
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	wrapper: {
		flex: 1,
		justifyContent: "space-between",
	},
	root: {
		padding: 20,
	},
	logo: {
		width: "70%",
		maxWidth: 300,
		maxHeight: 150,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#051c60",
		margin: 10,
	},
	bottomButton: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		padding: 20,
	},
});

export default NewDeviceScreen;
