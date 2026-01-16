"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CoursesSection from "@/components/CoursesOffered/CourseSection";
import { useAuth } from "@/context/AuthContext";

const Courses = () => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simple check to ensure auth state is loaded (if async in future)
        // For now, straight check
        if (!isAuthenticated) {
            const redirectUrl = encodeURIComponent('/courses');
            router.push(`/login?redirect=${redirectUrl}`);
        } else {
            setIsLoading(false);
        }
    }, [isAuthenticated, router]);

    if (isLoading && !isAuthenticated) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!isAuthenticated) {
        return null; // Don't render content while redirecting
    }

    return (
        <div className="pt-24">
            {/* Added padding top because typically navbar is fixed */}
            <CoursesSection />
        </div>
    );
};

export default Courses;