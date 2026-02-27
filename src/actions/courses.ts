export interface Course {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    level: string;
    price: number;
    duration: string;
    instructor: string;
    isPublished: boolean;
    createdAt: string;
    updatedAt: string;
}

export const getCourses = async (): Promise<Course[] | { errorMessage: string }> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/course`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return { errorMessage: "An error occurred" };
    }
};