import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COLORS } from '../constants';
import {
	Header,
	Title,
	ScrollableTab,
	ScrollableCard,
	PromotionCard,
} from '../components';
import { tab, list } from '../assets/data';

const Home = ({ navigation }) => {
	const [selectedTab, setSelectedTab] = useState(tab);
	const [tabList] = useState(list);

	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<Title title={selectedTab.title} />
			<ScrollableTab
				tabList={tabList}
				selectedTab={selectedTab}
				onPress={(item) => setSelectedTab(item)}
			/>
			<View style={styles.scrollable}>
				<ScrollableCard
					navigation={navigation}
					productList={selectedTab.productList}
				/>
			</View>
			<View style={styles.promotionCardWrapper}>
				<PromotionCard />
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	scrollable: {
		flex: 1,
	},
	promotionCardWrapper: {
		height: '19%',
		justifyContent: 'flex-end',
	},
});
