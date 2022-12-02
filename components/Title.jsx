import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';

const Title = ({ title }) => {
	return (
		<View style={styles.titleWrapper}>
			<Text style={styles.title}>Collection of</Text>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default Title;

const styles = StyleSheet.create({
	titleWrapper: {
		marginTop: SIZES.padding,
		marginHorizontal: SIZES.padding,
	},
	title: {
		color: COLORS.black,
		...FONTS.largeTitle,
	},
});
