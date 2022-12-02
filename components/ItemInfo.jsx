import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import ItemHeader from './ItemHeader';
import ItemTag from './ItemTag';

const ItemInfo = ({ itemInfo, navigation }) => {
	return (
		<ImageBackground
			source={itemInfo.image}
			resizeMode='cover'
			style={styles.itemImage}
		>
			<ItemHeader />
			<ItemTag itemInfo={itemInfo} />
		</ImageBackground>
	);
};

export default ItemInfo;

const styles = StyleSheet.create({
	itemImage: {
		width: '100%',
		height: '100%',
	},
});
