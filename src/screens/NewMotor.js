import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const NewMotor = () => {
	const { control, handleSubmit } = useForm();

	const nav = useNavigation();

	return (
		<ScrollView contentContainerStyle={styles.root} showsVerticalScrollIndicator={false}>
			<View style={styles.header}>
				<Text style={styles.title}>Add New Motor</Text>
			</View>

			<CustomInput
				name="motorName"
				placeholder="Motor Name"
				control={control}
				rules={{ required: "Motor Name is required" }}
			/>

			<CustomInput name="motorSerial" placeholder="Motor Serial Number" control={control} />

			<CustomInput name="location" placeholder="Location" control={control} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	root: {
		paddingVertical: 24,
		paddingHorizontal: 24,
	},
	header: {
		marginBottom: 12,
	},
	title: {
		fontSize: 32,
		fontWeight: "700",
		color: "#1D1D1D",
		marginBottom: 6,
	},
});

export default NewMotor;
