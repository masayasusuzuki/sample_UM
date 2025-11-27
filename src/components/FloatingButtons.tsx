"use client";

import Link from "next/link";
import { useState } from "react";

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`bg-[#1a1a2e] rounded-3xl shadow-lg overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "w-72" : "w-auto"
        }`}
      >
        {/* Expanded menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 pb-2 space-y-2">
            <Link
              href="/downloads"
              className="flex items-center gap-3 text-white/80 hover:text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="font-medium">資料ダウンロード</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 text-white/80 hover:text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">お問い合わせ</span>
            </Link>
          </div>
          <div className="border-t border-white/10 mx-4" />
        </div>

        {/* Main toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-white px-6 py-5 flex items-center gap-3 text-base font-medium transition-colors"
        >
          <div
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          <span>{isOpen ? "閉じる" : "ご質問はこちら"}</span>
        </button>
      </div>
    </div>
  );
}
