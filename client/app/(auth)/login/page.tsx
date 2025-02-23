"use client";

import { useRouter } from "next/navigation";
import LoginForm from "@/app/components/auth/LoginForm";

const LoginPage = () => {
    const router = useRouter();

    const handleLogin = async (email: string, password: string) => {
        try {
            const res = await fetch("http://localhost:8000/api/token/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: email, password }),
            });

            if (res.ok) {
                const data = await res.json();
                localStorage.setItem("accessToken", data.access);
                localStorage.setItem("refreshToken", data.refresh);
                router.push("/dashboard");
            } else {
                const errorData = await res.json();
                throw new Error(errorData.detail || "Erreur lors de l'authentification");
            }
        } catch (error) {
            console.error("Erreur réseau ou serveur", error);
        }
    };

    return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;
