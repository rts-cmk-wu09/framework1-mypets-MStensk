import { createContext } from "react";

const AuthContext = createContext({
token: undefined,
expire: undefined,
})

export default AuthContext;