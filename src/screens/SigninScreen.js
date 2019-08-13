import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
	const { state, signin, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillBlur={clearErrorMessage} />
			<AuthForm
				buttonTitle="Sign In"
				header="Sign In To Your Account"
				errorMessage={state.errorMessage}
				onSubmit={signin}
			/>
			<NavLink routeName="Signup" text="Don't Have An Account ? Sign Up" />
		</View>
	);
};

SigninScreen.navigationOptions = {
	header: null
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 200
	}
});

export default SigninScreen;
