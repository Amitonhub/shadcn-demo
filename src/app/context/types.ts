import { Dispatch, SetStateAction } from "react";

export interface ContextProps {
    username: string,
    setUsername: Dispatch<SetStateAction<string>>,
    isLogin: boolean,
    setIsLogin: Dispatch<SetStateAction<boolean>>,
}