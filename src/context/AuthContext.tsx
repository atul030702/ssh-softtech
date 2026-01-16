"use client";

import { useState, createContext, useContext, useEffect } from "react";
import { logOutAction } from "@/actions/users";
import { createClient } from "@/auth/client";
import { User } from "@supabase/supabase-js";
import { AuthContextType } from "@/types/company";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const supabase = createClient();

    useEffect(() => {
        const getUser = async () => {
            setLoading(true);
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        };

        getUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setLoading(true);
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const logOut = async () => {
        setLoading(true);
        const result = await logOutAction();
        if (!result.errorMessage) {
            setUser(null);
        }
        setLoading(false);
        return result;
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated: !!user,
            user,
            logOut,
            loading
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
