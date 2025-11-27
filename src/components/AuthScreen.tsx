"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AuthScreen({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = sessionStorage.getItem("authenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "0000") {
      sessionStorage.setItem("authenticated", "true");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  const handleKeyClick = (num: string) => {
    if (password.length < 4) {
      setPassword((prev) => prev + num);
      setError(false);
    }
  };

  const handleDelete = () => {
    setPassword((prev) => prev.slice(0, -1));
    setError(false);
  };

  const handleClear = () => {
    setPassword("");
    setError(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#1a1a2e] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 bg-[#1a1a2e] flex items-center justify-center z-[100]">
      <div className="w-full max-w-sm px-8">
        {/* Logo */}
        <div className="text-center mb-12">
          <Image
            src="/logo.png"
            alt="UNCOVER Marketing"
            width={200}
            height={50}
            className="h-10 w-auto mx-auto brightness-0 invert"
          />
        </div>

        {/* Password dots */}
        <div className="flex justify-center gap-4 mb-8">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                password.length > i
                  ? "bg-white border-white"
                  : "border-white/30"
              } ${error ? "border-red-500 bg-red-500/50" : ""}`}
            />
          ))}
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-400 text-sm text-center mb-6">
            パスワードが正しくありません
          </p>
        )}

        {/* Keypad */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handleKeyClick(String(num))}
                className="w-full aspect-square rounded-full bg-white/10 text-white text-2xl font-light hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                {num}
              </button>
            ))}
            <button
              type="button"
              onClick={handleClear}
              className="w-full aspect-square rounded-full bg-white/5 text-white/60 text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => handleKeyClick("0")}
              className="w-full aspect-square rounded-full bg-white/10 text-white text-2xl font-light hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              0
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="w-full aspect-square rounded-full bg-white/5 text-white/60 text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414-6.414a2 2 0 011.414-.586H19a2 2 0 012 2v10a2 2 0 01-2 2h-8.172a2 2 0 01-1.414-.586L3 12z"
                />
              </svg>
            </button>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={password.length !== 4}
            className={`w-full py-4 rounded-full font-medium transition-all ${
              password.length === 4
                ? "bg-white text-[#1a1a2e] hover:bg-gray-100"
                : "bg-white/10 text-white/30 cursor-not-allowed"
            }`}
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
