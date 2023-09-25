import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

// placeholder is hint Text
const CustomInput = ({ control, name, placeholder, secureTextEntry }) => {
	return (
		<View style={styles.container}>
			<Controller
				control={control}
				name={name}
				render={({ field: { value, onChange, onBlur } }) => (
					<TextInput
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						placeholder={placeholder}
						style={styles.input}
						secureTextEntry={secureTextEntry}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		width: "100%",

		borderColor: "#E8E8E8",
		borderWidth: 1,
		borderRadius: 5,

		paddingVertical: 10,
		paddingHorizontal: 10,
		marginVertical: 5,
	},
	input: {},
});

export default CustomInput;
