import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function ServicePage() {
  const services = [
    {
      slug: "ai-video",
      title: "AI動画制作",
      description:
        "最新のAI技術を活用した動画コンテンツを制作。効率的かつ高品質な動画でビジネスの魅力を伝えます。",
      features: [
        "AI活用による効率的な動画制作",
        "プロモーション動画制作",
        "商品紹介動画",
        "SNS向けショート動画",
      ],
    },
    {
      slug: "web",
      title: "Web制作（HP・LP制作）",
      description:
        "コーポレートサイト、サービスサイト、ランディングページなど、目的に応じた最適なWebサイトを制作します。",
      features: [
        "コーポレートサイト制作",
        "サービスサイト制作",
        "ランディングページ制作",
        "ECサイト構築",
      ],
    },
    {
      slug: "ads",
      title: "Web広告運用",
      description:
        "Google広告、SNS広告など、各種デジタル広告の戦略立案から運用まで一貫してサポートします。",
      features: [
        "Google広告運用",
        "SNS広告運用（Meta、X、TikTok等）",
        "リスティング広告",
        "ディスプレイ広告",
      ],
    },
    {
      slug: "china-kol",
      title: "中国KOL PR",
      description:
        "中国市場向けのインフルエンサーマーケティング。現地KOLを活用した効果的なプロモーションを実現します。",
      features: [
        "中国KOL選定・キャスティング",
        "Weibo・WeChat・RED等のプロモーション",
        "越境EC支援",
        "中国市場リサーチ",
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="Service"
        subTitle="サービス"
        description="マーケティングからクリエイティブ制作まで、お客様のビジネス成長をワンストップでサポートします。"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="text-sm text-gray-500 mb-2 block">
                    0{index + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-[#1a1a2e] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/service/${service.slug}`}
                    className="btn-outline"
                  >
                    詳しく見る
                  </Link>
                </div>
                <div
                  className={`bg-gray-100 rounded-lg aspect-[4/3] ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            サービスについてのお問い合わせ
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            サービスの詳細やお見積りなど、お気軽にご相談ください。
          </p>
          <Link href="/contact" className="btn-primary">
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </>
  );
}
