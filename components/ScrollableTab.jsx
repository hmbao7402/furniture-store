import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				style={styles.itemWrapper}
				onPress={() => onPress(item)}
			>
				<Text style={styles.itemName}>{item.name}</Text>
				{selectedTab.id === item.id && (
					<View style={styles.tabWrapper}>
						<View style={styles.selectedTab}></View>
					</View>
				)}
			</TouchableOpacity>
		);
	};

	return (
		<View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={tabList}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
			/>
		</View>
	);
};

export default ScrollableTab;

const styles = StyleSheet.create({
	listWrapper: {
		marginTop: SIZES.padding,
	},
	itemWrapper: {
		marginHorizontal: SIZES.padding,
	},
	itemName: {
		color: COLORS.secondary,
		...FONTS.body2,
	},
	tabWrapper: {
		alignItems: 'center',
		marginTop: SIZES.base,
	},
	selectedTab: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: COLORS.blue,
	},
});
