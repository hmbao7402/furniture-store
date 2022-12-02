import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons } from '../constants';

const ItemFooter = ({ navigation }) => {
	return (
		<View style={styles.itemFooterWrapper}>
			<View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image
						source={icons.dashboard}
						style={{
							tintColor: COLORS.gray,
							width: 25,
							height: 25,
						}}
					/>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<TouchableOpacity
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						height: 50,
						width: 50,
						borderRadius: 10,
						backgroundColor: COLORS.primary,
					}}
				>
					<Image
						source={icons.plus}
						style={{
							tintColor: COLORS.white,
							height: 20,
							width: 20,
						}}
					/>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
				<TouchableOpacity>
					<Image
						source={icons.user}
						style={{
							tintColor: COLORS.gray,
							width: 25,
							height: 25,
						}}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ItemFooter;

const styles = StyleSheet.create({
	itemFooterWrapper: {
		position: 'absolute',
		bottom: '5%',
		left: SIZES.padding,
		right: SIZES.padding,
		flexDirection: 'row',
		height: 70,
		backgroundColor: COLORS.white,
		borderRadius: 35,
	},
});
