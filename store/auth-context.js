import { createContext, useState } from "react";

export const AuthenticatedContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const value = {
		user,
		setUser,
	};

	return (
		<AuthenticatedContext.Provider value={value}>
			{children}
		</AuthenticatedContext.Provider>
	);
};

export default AuthenticatedUserProvider;
