import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, icons, SIZES } from '../constants';

const ItemHeader = () => {
	return (
		<View style={styles.itemHeaderWrapper}>
			<View style={styles.itemTouch}>
				<TouchableOpacity
          style={[styles.itemImageWrapper, { alignItems: 'flex-start' }]}
				>
					<Image source={icons.menu} resizeMode='contain' style={styles.icon} />
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.itemImageWrapper, { alignItems: 'flex-end' }]}
				>
					<Image
						source={icons.search}
						resizeMode='contain'
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ItemHeader;

const styles = StyleSheet.create({
	itemHeaderWrapper: {
		marginTop: SIZES.padding * 2,
		marginHorizontal: SIZES.padding,
	},
	itemTouch: {
		flexDirection: 'row',
	},
	itemImageWrapper: {
		flex: 1,

		justifyContent: 'center',
	},
	icon: {
		tintColor: COLORS.white,
		width: 25,
		height: 25,
	},
});
