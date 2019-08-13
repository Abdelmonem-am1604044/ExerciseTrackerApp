import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';
const SignupScreen = () => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillBlur={clearErrorMessage} />
			<AuthForm
				buttonTitle="Sign Up"
				header="Sign Up for Tracker App"
				errorMessage={state.errorMessage}
				onSubmit={signup}
			/>
			<NavLink routeName="Signin" text="Already Have An Account? Sign In Instead" />
		</View>
	);
};

SignupScreen.navigationOptions = {
	header: null
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 200
	}
});

export default SignupScreen;
