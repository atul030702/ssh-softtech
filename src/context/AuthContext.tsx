"use client";

import { useState, createContext, useContext } from "react";
import { AuthContextType, User } from "@/types/company";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    const logOut = async () => {
        setLoading(true);
        // Currently API does not support logout, so we just clear client state
        setUser(null);
        setLoading(false);
        return { errorMessage: null };
    };

    const setUserData = (data: User | null) => {
        setUser(data);
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated: !!user,
            user,
            logOut,
            loading,
            setUserData
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
