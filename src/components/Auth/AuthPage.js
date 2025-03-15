"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AuthPage = ({ type }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "signup" && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    localStorage.setItem("authData", JSON.stringify(formData));
    router.back();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--background)]">
      <div className="w-full max-w-md bg-[var(--secondary-background)] p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[var(--secondary-foreground)]">
          {type === "login" ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          {type === "signup" && (
            <div>
              <label className="block text-[var(--foreground)] mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded bg-[var(--gameCard-bg-color)] text-black focus:outline-none"
                required
              />
            </div>
          )}
          <div className="mt-4">
            <label className="block text-[var(--foreground)] mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[var(--gameCard-bg-color)] text-black focus:outline-none"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-[var(--foreground)] mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[var(--gameCard-bg-color)] text-black focus:outline-none"
              required
            />
          </div>
          {type === "signup" && (
            <div className="mt-4">
              <label className="block text-[var(--foreground)] mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 rounded bg-[var(--gameCard-bg-color)] text-black focus:outline-none"
                required
              />
            </div>
          )}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            type="submit"
            className="w-full mt-6 bg-[var(--primary-button-color)] text-white py-2 rounded hover:bg-orange-600 transition"
          >
            {type === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-[var(--foreground)] mt-4">
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span
            className="text-[var(--primary-button-color)] cursor-pointer"
            onClick={() => router.push(type === "login" ? "/signup" : "/login")}
          >
            {type === "login" ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
