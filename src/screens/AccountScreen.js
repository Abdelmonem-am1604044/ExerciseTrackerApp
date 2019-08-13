import React, { useContext } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Text } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text> Account Screen </Text>
			<Button title="Sign out" onPress={signout} />
		</SafeAreaView>
	);
};

export default AccountScreen;
