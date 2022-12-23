import { useCallback, useId, useState } from "react";
import { AuthActionType, useAuth } from "../../contexts/auth";

export const Login = () => {
    const { authDispatch } = useAuth();
    const accessToken = useId();
    const [form, setForm] = useState({ username: "", password: "" });

    const onSubmit = useCallback(
        () => authDispatch({
            type: AuthActionType.SUCCESSFUL_LOGIN,
            payload: {
                accessToken,
                user: {
                    firstName: "Michael",
                    lastName: "Banks",
                    email: "michael@test.com",
                },
            },
        }),
        [accessToken, authDispatch, form],
    );

    return (
        <>
            <div className="login-form">
                <h1>Login</h1>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={form.username} onChange={(e) => setForm(prev => ({ ...prev, username: e.target.value }))} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={form.password} onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))} />
                </div>
                <input type="button" value="Submit" onClick={onSubmit} />
            </div>
        </>
    );
};
