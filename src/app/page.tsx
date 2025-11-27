import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

// Section Title Component
function SectionTitle({
  title,
  subTitle,
  className = "",
}: {
  title: string;
  subTitle: string;
  className?: string;
}) {
  return (
    <div className={`flex items-baseline gap-4 mb-12 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      <span className="text-sm text-gray-500">{subTitle}</span>
    </div>
  );
}

// View More Link
function ViewMoreLink({ href }: { href: string }) {
  return (
    <Link href={href} className="view-more-link group">
      View More
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}

export default function Home() {
  const services = [
    {
      slug: "ai-video",
      title: "AI動画制作",
      description: "AIを活用した高品質な動画コンテンツの制作",
    },
    {
      slug: "web",
      title: "Web制作",
      description: "HP・LP制作によるオンラインプレゼンスの強化",
    },
    {
      slug: "ads",
      title: "Web広告運用",
      description: "効果的なデジタル広告戦略の立案・運用",
    },
    {
      slug: "china-kol",
      title: "中国KOL PR",
      description: "中国市場向けインフルエンサーマーケティング",
    },
  ];

  const members = [
    { name: "山田 太郎", role: "代表取締役" },
    { name: "佐藤 花子", role: "クリエイティブディレクター" },
    { name: "鈴木 一郎", role: "テクニカルリード" },
    { name: "田中 美咲", role: "マーケティングマネージャー" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with fade */}
        <div
          className="absolute inset-0 animate-fade-in"
          style={{
            backgroundImage: 'url(/hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <span className="inline-block text-xs tracking-[0.3em] text-[#1a1a2e]/60 uppercase mb-8">
                Marketing Agency
              </span>
            </div>

            <h1 className="text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-none tracking-[-0.04em] text-[#1a1a2e] mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Crush it.
            </h1>

            <div className="flex items-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="w-20 h-px bg-[#1a1a2e]/30" />
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#1a1a2e]/80 font-light tracking-wide">
                圧倒的な成果でお応えする。
              </p>
            </div>

            <p className="text-base text-[#1a1a2e]/60 leading-relaxed max-w-lg mb-12 font-light animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              企業の内部課題、顧客の本音、ブランドの未発掘な価値を
              <span className="text-[#1a1a2e] font-medium">「UNCOVER」</span>し、
              本質に基づくマーケティング戦略へと変換します。
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
              <Link
                href="/service"
                className="group inline-flex items-center gap-3 bg-[#1a1a2e] text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#1a1a2e]/90 transition-colors"
              >
                サービスを見る
                <span className="text-lg">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-[#1a1a2e]/30 text-[#1a1a2e] px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#1a1a2e]/5 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* Bottom scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <span className="text-[10px] tracking-[0.2em] text-[#1a1a2e]/40 uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#1a1a2e]/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Philosophy Section - 理念 */}
      <section className="py-24 bg-section-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="Philosophy"
              subTitle="理念"
              className="justify-center text-center"
            />
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-center mb-16">
              UNCOVER Marketingでは、クライアント様へ高い価値提供ができる組織であり続けるため、行動指針を定めました。
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "常に期待値を超える",
                description: "私たちは常に相手の想像を上回る価値提供を目指し、満足ではなく感動を生み出します。",
              },
              {
                title: "結果に執着する",
                description: "プロセスを大切にしながらも、最終的な成果に強くこだわり、目標達成に全力を尽くします。",
              },
              {
                title: "失敗を恐れないチャレンジ精神",
                description: "変化を恐れず挑戦を続けることで、未知の可能性を切り拓き、成長の機会へと変えていきます。",
              },
              {
                title: "利他的である",
                description: "チームや社会の成功を第一に考え、他者への貢献を通じて共に成長していきます。",
              },
              {
                title: "高い成長意欲と行動力",
                description: "現状に満足せず、自ら学び、考え、即行動することで個と組織の進化を加速させます。",
              },
              {
                title: "約束を守る",
                description: "小さな信頼の積み重ねこそが大きな成果を生むと信じ、誠実に約束を果たします。",
              },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <div className="group border-l-2 border-[#1a1a2e]/10 pl-6 py-2 hover:border-[#1a1a2e] transition-colors">
                  <h3 className="font-medium text-[#1a1a2e] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section - 実績 */}
      <section id="works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <SectionTitle title="Works" subTitle="実績" className="mb-0" />
              <ViewMoreLink href="/works" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ScrollReveal key={i}>
                <Link href={`/works/${i}`} className="group block">
                  <div className="bg-gray-100 rounded-lg aspect-[3/2]" />
                  <div className="mt-4">
                    <p className="text-xs text-gray-500 mb-1">Web制作</p>
                    <h3 className="font-medium group-hover:text-gray-600 transition-colors">
                      プロジェクトタイトル {i}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section - ブログ */}
      <section className="py-24 bg-section-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <SectionTitle title="Blog" subTitle="ブログ" className="mb-0" />
              <ViewMoreLink href="/blog" />
            </div>
          </ScrollReveal>
          <div className="space-y-8">
            {[
              { category: "マーケティング", date: "2025-01-15", title: "SNSマーケティングの最新トレンドと効果的な活用法", tag: "SNS運用" },
              { category: "Web制作ノウハウ", date: "2025-01-10", title: "コーポレートサイトリニューアルで押さえるべきポイント", tag: "Web制作" },
              { category: "広告運用", date: "2025-01-05", title: "リスティング広告の費用対効果を最大化する運用術", tag: "Web広告" },
            ].map((post, i) => (
              <ScrollReveal key={i}>
                <Link
                  href={`/blog/${i + 1}`}
                  className="group flex gap-8 items-start"
                >
                  <div className="w-[400px] flex-shrink-0 bg-gray-200 aspect-[16/10] rounded-lg" />
                  <div className="flex-1 py-2">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">{post.category}</span>
                      <span className="text-sm text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-medium text-[#1a1a2e] group-hover:text-gray-600 transition-colors mb-4 leading-relaxed">
                      {post.title}
                    </h3>
                    <span className="inline-block text-sm text-gray-500 border border-gray-300 rounded-full px-4 py-1">
                      {post.tag}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-block border border-gray-300 text-[#1a1a2e] px-8 py-3 rounded hover:bg-[#1a1a2e] hover:text-white hover:border-[#1a1a2e] transition-colors"
              >
                一覧を見る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Section - サービス */}
      <section className="py-24 bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="Service"
              subTitle="サービス"
              className="text-white [&>span]:text-gray-400"
            />
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-gray-400 mb-12 max-w-2xl">
              マーケティングからクリエイティブ制作まで、
              お客様のビジネス成長をワンストップでサポートします。
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug}>
                <Link
                  href={`/service/${service.slug}`}
                  className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-colors block"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link
                href="/service"
                className="inline-block border border-white/30 text-white px-8 py-3 rounded hover:bg-white hover:text-[#1a1a2e] transition-colors"
              >
                サービス一覧を見る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recruit Section - 採用情報 */}
      <section id="recruit" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <SectionTitle title="Recruit" subTitle="採用情報" />
                <p className="text-3xl md:text-4xl font-bold leading-relaxed mb-6">
                  一緒に未来を
                  <br />
                  つくりませんか。
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  私たちは、常に新しいチャレンジを恐れず、
                  クライアントと共に成長できる仲間を探しています。
                  あなたの力を貸してください。
                </p>
                <Link href="/recruit" className="btn-primary">
                  採用情報を見る
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-lg aspect-square" />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Message Section - 代表メッセージ */}
      <section className="py-24 bg-section-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="Message"
              subTitle="代表メッセージ"
              className="text-center justify-center"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="bg-gray-200 aspect-[4/5] rounded-lg max-w-md mx-auto lg:mx-0" />
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8 leading-relaxed">
                  圧倒的な成果でお応えする。
                </p>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    はじめまして。UNCOVER Marketing株式会社 代表取締役の肥田です。
                  </p>
                  <p>
                    今や、SNSやインターネットは、企業活動における"空気"のような存在。
                    あって当たり前、でも使いこなせるかどうかで、ビジネスの成否は大きく変わります。
                  </p>
                  <p>
                    事実、SNSを味方につけている企業は、売上・採用・ブランディングにおいて明らかな成果を手にしています。一方で、そうでない企業との差は広がる一方です。
                  </p>
                  <p>
                    UNCOVER Marketingは、SNSマーケティングのプロフェッショナル集団としてクライアント様の本質的な課題を見極め、
                    可能性を最大限に引き出すことをお約束をいたします。
                  </p>
                </div>
                <p className="mt-8 text-right text-[#1a1a2e] font-medium">
                  UNCOVER Marketing株式会社<br />
                  代表取締役　肥田
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Member Section - 働くメンバー */}
      <section className="py-24 bg-section-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="Member"
              subTitle="働くメンバー"
              className="text-center justify-center"
            />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {members.map((member, i) => (
              <ScrollReveal key={i}>
                <div className="text-center">
                  <div className="bg-gray-200 rounded-full aspect-square mb-4 mx-auto max-w-[200px]" />
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section - 会社情報 */}
      <section id="company" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="Company" subTitle="会社情報" />
          </ScrollReveal>
          <dl className="space-y-0">
            {[
              { label: "会社名", value: "UNCOVER Marketing株式会社" },
              { label: "住所", value: "〒531-0074\n大阪府大阪市北区本庄東1丁目18-14 ASSIST-90 902" },
              { label: "アクセス", value: "Osaka Metro堺筋線・谷町線 / 天神橋筋六丁目駅 徒歩5分\nJR大阪環状線 / 天満駅 徒歩13分" },
              { label: "代表取締役", value: "肥田 侑弥" },
              { label: "資本金", value: "10,000,000円" },
              { label: "E-mail", value: "info@uncover-m.co.jp" },
              { label: "電話番号", value: "06-7221-3629" },
              { label: "事業内容", value: "SNSマーケティング事業 / SNS運用代行 / SNSコンサルティング\nその他、SNSを活用したマーケティング全般 / AI動画制作 / オフライン施策 / WEB CM制作" },
              { label: "取引先企業", value: "株式会社JR西日本コミュニケーションズ / 株式会社ジェイアール西日本デイリーサービスネット / 株式会社ジェイアール西日本フードサービスネット / 株式会社東急エージェンシー / 株式会社セレッソ大阪 / イカリソース株式会社 / グンゼ株式会社 / アイメディア株式会社 / 株式会社パーソンズドリーム / 株式会社新大阪ステーションストア" },
              { label: "主要取引先銀行", value: "三井住友銀行 GMOあおぞらネット銀行" },
              { label: "税務顧問", value: "税理士法人Five Starパートナーズ" },
              { label: "顧問弁護士", value: "堂島総合法律事務所 三木章広" },
              { label: "顧問社労士", value: "社会保険労務士法人 Five Starパートナーズ" },
            ].map((item, i) => (
              <ScrollReveal key={item.label}>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-gray-200 py-5">
                  <dt className="text-sm text-gray-500 mb-2 md:mb-0">{item.label}</dt>
                  <dd className="text-[#1a1a2e] whitespace-pre-line">{item.value}</dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Contact Form Section - お問い合わせフォーム */}
      <section className="py-24 bg-[#1a1a2e] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="Contact"
              subTitle="お問い合わせ"
              className="text-center justify-center [&>span]:text-gray-400"
            />
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-gray-400 mb-12 text-center">
              お仕事のご依頼やご相談など、お気軽にお問い合わせください。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">
                    会社名 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/50"
                    placeholder="株式会社○○"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">
                    お名前 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/50"
                    placeholder="山田 太郎"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/50"
                  placeholder="example@company.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">
                  お問い合わせ内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-white text-[#1a1a2e] px-12 py-4 rounded font-medium hover:bg-gray-100 transition-colors"
                >
                  送信する
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
