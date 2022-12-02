import {
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React from 'react';
import { SIZES, COLORS, images, FONTS, icons } from '../constants';

const PromotionCard = () => {
	return (
		<View style={[styles.cardWrapper, styles.shadow]}>
			<View style={styles.cardImageWrapper}>
				<Image
					source={images.sofa}
					resizeMode='contain'
					style={styles.cardImage}
				/>
			</View>
			<View style={styles.cardInfoWrapper}>
				<Text style={{ ...FONTS.h2 }}>Special Offer</Text>
				<Text style={{ ...FONTS.body3 }}>Adding to your card</Text>
			</View>
			<View style={styles.buttonWrapper}>
				<TouchableOpacity style={styles.button}>
					<Image
						source={icons.chevron}
						resizeMode='contain'
						style={{ height: '50%', width: '50%' }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PromotionCard;

const styles = StyleSheet.create({
	cardWrapper: {
		flexDirection: 'row',
		marginHorizontal: SIZES.padding,
		padding: SIZES.radius,
		...Platform.select({
			android: {
				marginBottom: 20,
			},
		}),
		height: 110,
		borderRadius: 20,
		backgroundColor: COLORS.white,
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		elevation: 9,
	},
	cardImageWrapper: {
		width: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLORS.lightGray2,
		borderRadius: 20,
	},
	cardImage: {
		width: '60%',
		height: '60%',
	},
	cardInfoWrapper: {
		marginLeft: SIZES.radius,
		flex: 1,
		justifyContent: 'center',
	},
	buttonWrapper: {
		marginRight: SIZES.radius,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: COLORS.primary,
		justifyContent: 'center',
		alignItems: 'center',
		height: '70%',
		width: 40,
		borderRadius: 10,
	},
});
