import React from 'react';
import {
	createAppContainer,
	createStackNavigator,
	createBottomTabNavigator,
	createSwitchNavigator
} from 'react-navigation';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import LoadingScreen from './src/screens/LoadingScreen';

const switchNavigator = createSwitchNavigator({
	Loading: LoadingScreen,
	loginFlow: createStackNavigator({
		Signup: SignupScreen,
		Signin: SigninScreen
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow: createStackNavigator({
			TrackList: TrackListScreen,
			TrackDetails: TrackDetailsScreen
		}),
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen
	})
});

const App = createAppContainer(switchNavigator);

export default () => {
	return (
		<AuthProvider>
			<App
				ref={(navigator) => {
					setNavigator(navigator);
				}}
			/>
		</AuthProvider>
	);
};
