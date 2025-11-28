"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

type Member = {
  name: string;
  nameEn: string;
  role: string;
  catchphrase?: string;
  bio?: string;
};

const members: Member[] = [
  {
    name: "肥田 侑弥",
    nameEn: "Yuya Hida",
    role: "代表取締役",
    catchphrase: "圧倒的な成果でお応えする。",
    bio: `2019年SNSマーケティング会社入社。1年で統括マネージャー就任。新規事業を3ヶ月で100社導入。2022年インフルエンサーマーケティング会社で営業トップクラスの成績。2023年2月UNCOVER Marketing創業。`,
  },
  {
    name: "打越 海翔",
    nameEn: "Kaito Uchikoshi",
    role: "専務取締役",
  },
  {
    name: "中田 涼也",
    nameEn: "Ryoya Nakata",
    role: "営業部",
  },
  {
    name: "山本 千華",
    nameEn: "Chika Yamamoto",
    role: "ディレクター",
  },
  {
    name: "岡部 純花",
    nameEn: "Sumika Okabe",
    role: "ディレクター",
  },
  {
    name: "木下 栄児",
    nameEn: "Eiji Kinoshita",
    role: "営業部",
  },
  {
    name: "坂井 良太",
    nameEn: "Ryota Sakai",
    role: "営業部",
  },
];

export default function MemberSection() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <>
      <section className="py-24 bg-section-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12 text-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Member</h2>
              <span className="text-sm text-gray-500">働くメンバー</span>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((member, i) => (
              <ScrollReveal key={i}>
                <button
                  onClick={() => setSelectedMember(member)}
                  className="text-center w-full group"
                >
                  <div className="bg-gray-200 rounded-full aspect-square mb-4 mx-auto max-w-[200px] group-hover:ring-4 group-hover:ring-[#1a1a2e]/20 transition-all" />
                  <p className="text-xs text-gray-500 mb-1">{member.role}</p>
                  <h3 className="font-semibold group-hover:text-[#1a1a2e]/70 transition-colors">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.nameEn}</p>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Business Card Style */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="flex flex-col gap-3 max-w-[480px] w-full animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="self-end w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Business Card */}
            <div
              className="bg-gradient-to-br from-white to-gray-50 w-full shadow-2xl overflow-hidden relative"
              style={{ aspectRatio: "1.65" }}
            >
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a2e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a1a2e] via-[#2d2d4a] to-[#1a1a2e]" />

              <div className="flex gap-6 h-full p-6 relative">
                {/* Left - Logo */}
                <div className="w-32 flex-shrink-0 flex flex-col items-center justify-center border-r border-gray-200/80 pr-6">
                  <img src="/logo.png" alt="UNCOVER Marketing" className="w-full drop-shadow-sm" />
                </div>

                {/* Right - Info */}
                <div className="flex-1 flex flex-col justify-center overflow-hidden">
                  {/* Company & Role */}
                  <p className="text-[10px] text-gray-400 tracking-[0.15em] uppercase leading-relaxed mb-1">
                    UNCOVER Marketing株式会社<br />
                    <span className="text-[#1a1a2e]/70">{selectedMember.role}</span>
                  </p>

                  {/* Name */}
                  <h3 className="text-3xl font-bold text-[#1a1a2e] tracking-wide">{selectedMember.name}</h3>
                  <p className="text-sm text-gray-400 tracking-[0.2em] font-light">{selectedMember.nameEn}</p>

                  {/* Catchphrase */}
                  {selectedMember.catchphrase && (
                    <p className="text-[13px] text-[#1a1a2e]/90 font-medium border-l-2 border-[#1a1a2e] pl-3 mt-3 italic">
                      {selectedMember.catchphrase}
                    </p>
                  )}

                  {/* Bio Section */}
                  <p className="text-[10px] text-gray-500 leading-relaxed mt-3">
                    {selectedMember.bio || "プロフィール準備中"}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-3 right-6 w-8 h-8 border-r-2 border-b-2 border-[#1a1a2e]/10" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
