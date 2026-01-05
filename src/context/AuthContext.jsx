import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Axios instance with base URL
    const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
        withCredentials: true, // Important for cookies
    });

    // Attach token to requests
    api.interceptors.request.use((config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    // Check if user is logged in (refresh token check)
    useEffect(() => {
        const checkUser = async () => {
            try {
                // Try to get new access token using refresh token cookie
                const { data } = await api.post("/auth/refresh");
                localStorage.setItem("accessToken", data.accessToken);

                // If successful, get user info
                const userRes = await api.get("/auth/me");
                setUser(userRes.data);
            } catch (error) {
                console.log("Not logged in");
                localStorage.removeItem("accessToken");
            } finally {
                setLoading(false);
            }
        };
        checkUser();
    }, []);

    const login = async (email, password) => {
        const { data } = await api.post("/auth/login", { email, password });
        localStorage.setItem("accessToken", data.accessToken);
        setUser({
            _id: data._id,
            name: data.name,
            email: data.email,
        });
        return data;
    };

    const register = async (name, email, password) => {
        const { data } = await api.post("/auth/register", { name, email, password });
        localStorage.setItem("accessToken", data.accessToken);
        setUser({
            _id: data._id,
            name: data.name,
            email: data.email,
        });
        return data;
    };

    const logout = async () => {
        try {
            await api.post("/auth/logout");
            localStorage.removeItem("accessToken");
            setUser(null);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
