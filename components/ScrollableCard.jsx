import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	Platform,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS } from '../constants';

const ScrollableCard = ({ navigation, productList }) => {
	const renderCard = ({ item }) => {
		return (
			<TouchableOpacity
				style={styles.cardWrapper}
				onPress={() => navigation.navigate('ItemDetail', { itemInfo: item })}
			>
				<View style={styles.itemImageWrapper}>
					<Image
						source={item.image}
						resizeMode='cover'
						style={styles.itemImage}
					/>
					<View style={styles.itemSummary}>
						<Text style={styles.itemText}>Furniture</Text>
						<Text style={styles.itemName}>{item.productName}</Text>
					</View>
				</View>

				<View style={styles.priceWrapper}>
					<Text style={styles.price}>${item.price.toFixed(2)}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.listWrapper}>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={productList}
				renderItem={renderCard}
				keyExtractor={(item) => item.productId}
			/>
		</View>
	);
};

export default ScrollableCard;

const styles = StyleSheet.create({
	listWrapper: {
		marginTop: SIZES.padding,
	},
	cardWrapper: {
		marginLeft: SIZES.padding,
	},
	itemImageWrapper: {
		width: SIZES.width / 2,
	},
	itemImage: {
		width: '100%',
		height: '100%',
		borderRadius: SIZES.radius,
	},
	itemSummary: {
		position: 'absolute',
		top: 15,
		left: '10%',
		right: '10%',
	},
	itemText: {
		color: COLORS.lightGray2,
		...FONTS.h3,
	},
	itemName: {
		marginTop: SIZES.base,
		color: COLORS.white,
		...FONTS.h2,
	},
	priceWrapper: {
		position: 'absolute',
		bottom: 40,
		left: 30,
		borderRadius: 15,
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: COLORS.transparentLightGray,
	},
	price: {
		...FONTS.h2,
	},
});
