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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="パスワードを入力"
              className={`w-full bg-white/10 border ${
                error ? "border-red-500" : "border-white/20"
              } rounded-lg px-4 py-4 text-white text-center tracking-widest placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors`}
              autoFocus
            />
            {error && (
              <p className="text-red-400 text-sm text-center mt-3">
                パスワードが正しくありません
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-lg bg-white text-[#1a1a2e] font-medium hover:bg-gray-100 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
