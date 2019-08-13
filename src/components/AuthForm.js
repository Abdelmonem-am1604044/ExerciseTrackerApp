import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const AuthForm = ({ header, buttonTitle, onSubmit, errorMessage }) => {
	const [ password, setPassword ] = useState(''),
		[ email, setEmail ] = useState('');

	return (
		<View>
			<Text h3>{header}</Text>
			<Input label="Email" onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
			<Input
				label="Password"
				onChangeText={setPassword}
				autoCapitalize="none"
				autoCorrect={false}
				secureTextEntry
			/>
			{errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
			<Button style={styles.general} title={buttonTitle} onPress={() => onSubmit({ email, password })} />
		</View>
	);
};

const styles = StyleSheet.create({
	general: {
		marginTop: 200
	},
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginLeft: 15,
		marginTop: 15,
		marginBottom: 15
	}
});

export default AuthForm;
