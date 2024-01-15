import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
	apiKey: Constants.expoConfig.extra.apiKey,
	authDomain: Constants.expoConfig.extra.authDomain,
	projectId: Constants.expoConfig.extra.projectId,
	storageBucket: Constants.expoConfig.extra.storageBucket,
	messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
	appId: Constants.expoConfig.extra.appId,
	databaseURL: Constants.expoConfig.extra.databaseURL,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// export const auth = initializeAuth(app, {
// 	persistence: getReactNativePersistence(AsyncStorage),
// });

// Initialize Firebase
// initializeApp(firebaseConfig);/
export const auth = getAuth();
export const database = getFirestore();
