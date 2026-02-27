export const handleError = (error: unknown) => {
    if (error instanceof Error) {
        return { errorMessage: error.message };
    } else if (typeof error === "string") {
        return { errorMessage: error };
    } else if (typeof error === "object" && error !== null && "error" in error) {
        return { errorMessage: (error as { error: string }).error };
    } else {
        return { errorMessage: "An error occurred" };
    }
};

export const handleSignupFormError = (email: string, password: string, confirmPassword: string) => {
    let error = {
        email: "",
        password: "",
        confirmPassword: ""
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordStrenthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

    const isEmailValid = emailRegex.test(email);  
    const isPasswordValid = passwordStrenthRegex.test(password); 

    if(!isEmailValid) {
        error.email = "Invalid email address";
    }
    if(!isPasswordValid) {
        error.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }
    if(password !== confirmPassword) {
        error.confirmPassword = "Passwords do not match";
    }
    
    return error;
};