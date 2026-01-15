"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Temporary login logic (replace with API later)
        if (email === "admin@spicevilla.com" && password === "admin123") {
            navigate("/login/home");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-2">
                    Spice Villa Login
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    Admin & Staff Access
                </p>
                <div class="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-orange-200">



                    <p class="text-center text-gray-600 mb-6">
                        Use the following credentials to access the dashboard panel
                    </p>

                    <div class="bg-orange-50 border border-orange-300 rounded-xl p-4 space-y-3">
                        <div class="flex justify-between">
                            <span class="font-semibold text-gray-700">Email:</span>
                            <span class="text-gray-900">admin@spicevilla.com</span>
                        </div>

                        <div class="flex justify-between">
                            <span class="font-semibold text-gray-700">Password:</span>
                            <span class="text-gray-900">admin123</span>
                        </div>
                    </div>



                </div>


                {error && (
                    <p className="text-red-500 text-sm text-center mb-4">
                        {error}
                    </p>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring"
                            placeholder="admin@spicevilla.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-xs text-center text-gray-400 mt-4">
                    © 2026 Spice Villa Restaurant
                </p>
            </div>
        </div>
    );
};

export default Login;
