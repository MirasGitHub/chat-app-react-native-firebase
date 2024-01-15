import "dotenv/config";

export default {
	expo: {
		name: "chatApp_react_Native_firebase",
		slug: "chatApp_react_Native_firebase",
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/icon.png",
		userInterfaceStyle: "light",
		splash: {
			image: "./assets/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-icon.png",
				backgroundColor: "#ffffff",
			},
		},
		web: {
			favicon: "./assets/favicon.png",
		},
		extra: {
			apiKey: process.env.API_KEY,
			authDomain: process.env.AUTH_DOMAIN,
			projectId: process.env.PROJECT_ID,
			storageBucker: process.env.STORAGE_BUCKET,
			messagingSendingId: process.env.MESSAGING_SENDER_ID,
			appId: process.env.APP_ID,
		},
	},
};
