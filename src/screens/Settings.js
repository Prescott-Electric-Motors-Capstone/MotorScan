import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Settings = () => {
	const onContactPressed = () => {
		Linking.openURL("https://prescottelectricmotors.ca/en/contact");
	};

	return (
		<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
			<View style={styles.header}>
				<Text style={styles.title}>Settings</Text>
				<Text style={styles.subtitle}>Update your preferences here</Text>
			</View>

			{/* <View style={styles.section}>
				<Text style={styles.sectionHeader}>Preferences</Text>

				<TouchableOpacity>
					<View style={styles.row}>
						<View style={styles.rowIcon}>
							<FeatherIcon name="moon" color="#000" size={18} />
						</View>
						<View style={styles.separator} />
						<Text style={styles.rowLabel}>Dark mode</Text>
					</View>
				</TouchableOpacity>
			</View> */}

			<View style={styles.section}>
				<Text style={styles.sectionHeader}>Account</Text>

				<TouchableOpacity>
					<View style={styles.row}>
						<View style={styles.rowIcon}>
							<MaterialCommunityIcon name="account" color="#000" size={18} />
						</View>
						<View style={styles.separator} />
						<Text style={styles.rowLabel}>Manage Account</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.row}>
						<View style={styles.rowIcon}>
							<MaterialCommunityIcon name="account" color="#000" size={18} />
						</View>
						<View style={styles.separator} />
						<Text style={styles.rowLabel}>Sign Out</Text>
					</View>
				</TouchableOpacity>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionHeader}>Support</Text>
				<TouchableOpacity onPress={onContactPressed}>
					<View style={styles.row}>
						<View style={styles.rowIcon}>
							<MaterialCommunityIcon name="account" color="#000" size={18} />
						</View>
						<View style={styles.separator} />
						<Text style={styles.rowLabel}>Contact Us</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.row}>
						<View style={styles.rowIcon}>
							<AntDesign name="filetext1" color="#000" size={18} />
						</View>
						<View style={styles.separator} />
						<Text style={styles.rowLabel}>Terms of Use</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity>
					<View style={styles.row}>
						<View style={styles.rowIcon}>
							<MaterialIcon name="privacy-tip" color="#000" size={18} />
						</View>
						<View style={styles.separator} />
						<Text style={styles.rowLabel}>Privacy Policy</Text>
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 24,
	},
	header: {
		paddingHorizontal: 24,
		marginBottom: 12,
	},
	title: {
		fontSize: 32,
		fontWeight: "700",
		color: "#1D1D1D",
		marginBottom: 6,
	},
	subtitle: {
		fontSize: 15,
		fontWeight: "500",
		color: "#929292",
	},
	section: {
		paddingHorizontal: 24,
	},
	sectionHeader: {
		paddingVertical: 12,
		fontSize: 12,
		fontWeight: "600",
		color: "#9E9E9E",
		textTransform: "uppercase",
		letterSpacing: 1.1,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		height: 50,
		backgroundColor: "#E0DEDE",
		borderRadius: 8,
		marginBottom: 12,
		paddingHorizontal: 12,
	},
	rowLabel: {
		fontSize: 17,
		color: "#0C0C0C",
	},
	rowIcon: {
		width: 32,
		height: 32,
		borderRadius: 999,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 5,
	},
	separator: {
		width: 1,
		height: 25,
		backgroundColor: "#BAB8B8",
		marginRight: 12,
	},
});

export default Settings;
