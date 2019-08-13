import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../navigationRef';

const AuthReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signin':
			return { token: action.payload, errorMessage: '' };
		case 'clear_error_message':
			return { ...state, errorMessage: '' };
		case 'signout':
			return { token: null, errorMessage: '' };
		default:
			return state;
	}
};

const tryLocalSignIn = (dispatch) => async () => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: 'signin', payload: token });
		navigate('TrackList');
	} else {
		navigate('loginFlow');
	}
};

const clearErrorMessage = (dispatch) => () => {
	dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerAPI.post('/signup', {
			email,
			password
		});
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'signin', payload: response.data.token });
		navigate('TrackList');
	} catch (error) {
		dispatch({ type: 'add_error', payload: 'Something Went Wrong With The Sign Up' });
	}
};

const signin = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerAPI.post('/signin', {
			email,
			password
		});
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'signin', payload: response.data.token });
		navigate('TrackList');
	} catch (error) {
		dispatch({ type: 'add_error', payload: 'Something Went Wrong With The Sign In ' });
	}
};

const signout = (dispatch) => async ({}) => {
	await AsyncStorage.removeItem('token');
	dispatch({ type: 'signout' });
	navigate('loginFlow');
};

export const { Context, Provider } = createDataContext(
	AuthReducer,
	{ signin, signout, signup, clearErrorMessage, tryLocalSignIn, signout },
	{ errorMessage: '', token: null }
);
