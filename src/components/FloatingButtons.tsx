"use client";

import Link from "next/link";
import { useState } from "react";

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Container */}
      <div className="relative">
        {/* Expanded Menu */}
        {isOpen && (
          <div className="absolute bottom-[72px] right-0 bg-white rounded-2xl shadow-2xl overflow-hidden min-w-[300px]">
            <Link
              href="/downloads"
              className="flex items-center gap-4 px-6 py-5 border-b border-gray-100 hover:bg-gray-50"
            >
              <div className="w-10 h-10 bg-[#1a1a2e] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#1a1a2e]">資料ダウンロード</p>
                <p className="text-xs text-gray-400 mt-0.5">サービス資料をご覧いただけます</p>
              </div>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-4 px-6 py-5 hover:bg-gray-50"
            >
              <div className="w-10 h-10 bg-[#1a1a2e] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#1a1a2e]">お問い合わせ</p>
                <p className="text-xs text-gray-400 mt-0.5">お気軽にご相談ください</p>
              </div>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-3 px-7 py-4 rounded-full shadow-2xl font-medium ${
            isOpen
              ? "bg-[#1a1a2e] text-white"
              : "bg-[#1a1a2e] text-white"
          }`}
        >
          {isOpen ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>閉じる</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>ご相談・お問い合わせ</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
