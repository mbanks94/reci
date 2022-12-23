export interface User {
    firstName: string;
    lastName: string;
    email: string;
}

export const getUserFullname = (user?: User) => user ? `${user.firstName} ${user.lastName}` : "";