import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import { ItemInfo, ItemFooter } from '../components';

const ItemDetail = ({ route, navigation }) => {
	const { itemInfo } = route.params;

	return (
		<View style={styles.itemDetailWrapper}>
			<ItemInfo itemInfo={itemInfo} />
			<ItemFooter navigation={navigation} />
		</View>
	);
};

export default ItemDetail;

const styles = StyleSheet.create({
	itemDetailWrapper: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
});
