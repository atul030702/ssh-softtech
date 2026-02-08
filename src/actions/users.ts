"use server";

import { handleError } from "@/utils/handleError";

export const loginAction = async (email: string, password: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if(data.error) throw data.error;
        
        return { user: data?.user, errorMessage: null };

    } catch (error) {
        return handleError(error);
    }
};


export const signUpAction = async (email: string, password: string, name: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, name }),
        });

        const data = await response.json();

        if(data.error) throw data.error;

        const userId = data.user?.id;
        if(!userId) throw new Error("Error signing up");

        return {
            message: `We have sent a verification link to ${data.user?.email}. Please check your inbox and click the link to verify your account.`,
            errorMessage: null
        };

    } catch (error) {
        return handleError(error);
    }
};

/*export const signInWithGoogle = async (): Promise<{errorMessage: string | null; redirectUrl: string | null} > => {
    const authCallbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`;

    try {
        const { auth } = await createClient();
        
        const { data, error} = await auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: authCallbackUrl,
            },
        });

        if(error) throw error;

        return { 
            errorMessage: null,
            redirectUrl: data?.url, 
        };

    } catch (error) {
        console.error(error);
        return { 
            errorMessage: error instanceof Error ? error.message: "An unknown error occurred",
            redirectUrl: null, 
        };
    }
};


export const logOutAction = async () => {
    try {
        const { auth } = await createClient();

        const {  error } = await auth.signOut();;
        if(error) throw error;

        return { errorMessage: null };
    } catch (error) {
        return handleError(error);
    }
};*/