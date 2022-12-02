import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS } from '../constants';

const ItemTag = ({ itemInfo }) => {
	return (
		<>
			<View style={styles.tagWrapper}>
				<View style={styles.tagPoint} />
			</View>

			<View style={styles.itemDetailWrapper}>
				<View style={styles.itemNameWrapper}>
					<Text style={styles.itemName}>{itemInfo.productName}</Text>
				</View>
				<View style={styles.priceWrapper}>
					<Text style={styles.itemPrice}>${itemInfo.price.toFixed(2)}</Text>
				</View>
			</View>

			<View style={styles.summaryWrapper}>
				<Text style={{ color: COLORS.lightGray2, ...FONTS.body2 }}>
					Furniture
				</Text>
				<Text
					style={{ color: COLORS.white, ...FONTS.h1, marginTop: SIZES.radius }}
				>
					{itemInfo.productName}
				</Text>
			</View>
		</>
	);
};

export default ItemTag;

const styles = StyleSheet.create({
	tagWrapper: {
		position: 'absolute',
		top: '45%',
		left: '15%',
		borderRadius: 80,
		backgroundColor: COLORS.transparentLightGray1,
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	tagPoint: {
		borderRadius: 20,
		backgroundColor: COLORS.blue,
		height: 10,
		width: 10,
	},
	itemDetailWrapper: {
		position: 'absolute',
		top: '43%',
		left: '30%',
		flexDirection: 'row',
		padding: SIZES.radius * 1.5,
		backgroundColor: COLORS.transparentLightGray1,
		width: '50%',
		borderRadius: 10,
	},
	itemNameWrapper: {
		flex: 2,
	},
	itemName: {
		color: COLORS.darkGray,
		...FONTS.h3,
	},
	priceWrapper: {
		flex: 1.5,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	itemPrice: {
		color: COLORS.darkGreen,
		...FONTS.h3,
	},
	summaryWrapper: {
		position: 'absolute',
		bottom: '20%',
		left: SIZES.padding,
		right: SIZES.padding,
	},
});
