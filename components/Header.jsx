import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,Platform } from 'react-native';
import { SIZES, icons } from '../constants';

const Header = () => {
	return (
		<View style={[styles.headerContainer, styles.flexEndContainer]}>
			<View style={styles.iconsWrapper}>
				<TouchableOpacity>
					<Image
						source={icons.menu}
						resizeMode='contain'
						style={styles.headerIcon}
					/>
				</TouchableOpacity>

				<TouchableOpacity>
					<Image
						source={icons.cart}
						resizeMode='contain'
						style={styles.headerIcon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	headerContainer: {
		paddingHorizontal: SIZES.padding,
		flexDirection: 'row',
    ...Platform.select({
      android: {
        height: 75,
        alignItems: 'flex-end'
      }
    })
  },
	iconsWrapper: {
    flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	headerIcon: {
		width: 25,
		height: 25,
	},
});
