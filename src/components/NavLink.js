import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, routeName, text }) => {
	return (
		<TouchableOpacity onPress={() => navigation.navigate(routeName)}>
			<Text style={styles.link}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	link: {
		color: 'blue'
	}
});

export default withNavigation(NavLink);
