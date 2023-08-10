'use client'

import React, { createContext, useContext, useEffect, useState } from "react";
import { ContextProps } from "./types";
import { getItem, setItem } from "@/lib/utils";

const GlobalContext = createContext<ContextProps>({
    username: "",
    isLogin: false,
    setIsLogin: () => false,
    setUsername: () => "",
})

export const GlobalContextProvider = ({
    children,
}:
    {
        children: React.ReactNode
    }) => {
        const initIsLogin = getItem<boolean>('isLogin') || false
        const initIsUsername = getItem<string>('username') || ''
        const [isLogin, setIsLogin] = useState(initIsLogin)
        const [username, setUsername] = useState(initIsUsername)

        useEffect(() => {
            setItem('isLogin', isLogin)
            setItem('username', username)
        }, [isLogin, username])

    return <GlobalContext.Provider value={{
        username,
        isLogin,
        setIsLogin,
        setUsername,
    }}>
        {children}
    </GlobalContext.Provider>
}

export const useGlobalContext = () => useContext(GlobalContext)