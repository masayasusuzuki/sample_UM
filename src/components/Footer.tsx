import Link from "next/link";
import Image from "next/image";

const footerNav = {
  services: [
    { label: "AI動画制作", href: "/service/ai-video" },
    { label: "Web制作（HP・LP制作）", href: "/service/web" },
    { label: "Web広告運用", href: "/service/ads" },
    { label: "中国KOL PR", href: "/service/china-kol" },
  ],
  company: [
    { label: "会社情報", href: "/#company" },
    { label: "採用情報", href: "/#recruit" },
    { label: "働くメンバー", href: "/recruit" },
  ],
  content: [
    { label: "実績", href: "/#works" },
    { label: "ブログ", href: "/blog" },
  ],
  others: [
    { label: "お問い合わせ", href: "/contact" },
    { label: "資料ダウンロード", href: "/downloads" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo & Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="UNCOVER Marketing"
                width={200}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              企業の内部課題、顧客の本音、ブランドの未発掘な価値を「UNCOVER」し、
              本質に基づくマーケティング戦略へと変換します。
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Service */}
              <div>
                <h3 className="font-semibold mb-4">Service</h3>
                <ul className="space-y-3">
                  {footerNav.services.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerNav.company.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold mb-4">Content</h3>
                <ul className="space-y-3">
                  {footerNav.content.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Others */}
              <div>
                <h3 className="font-semibold mb-4">Others</h3>
                <ul className="space-y-3">
                  {footerNav.others.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} UNCOVER Marketing Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
