import { useAuth } from "../../contexts/auth";
import { getUserFullname } from "../../models";

export const Home = () => {
    const { authState: { user } } = useAuth();
    return (
        <>
            <h1>Home</h1>
            <h5>Welcome, {getUserFullname(user)}</h5>
        </>
    );
};