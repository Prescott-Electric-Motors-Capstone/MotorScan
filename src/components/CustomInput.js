import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// placeholder is hint Text
const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
	return (
		<View style={styles.container}>
			<TextInput
				value={value}
				onChangeText={setValue}
				placeholder={placeholder}
				style={styles.input}
				secureTextEntry={secureTextEntry}
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
