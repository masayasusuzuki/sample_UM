import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

const servicesData: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    features: { title: string; description: string }[];
    flow: string[];
  }
> = {
  "ai-video": {
    title: "AI動画制作",
    subtitle: "AI Video Production",
    description:
      "最新のAI技術を活用し、高品質な動画コンテンツを効率的に制作します。従来の動画制作に比べ、短期間・低コストでプロフェッショナルな動画を実現。商品紹介、企業PR、SNS向けショート動画など、様々なニーズに対応します。",
    features: [
      {
        title: "AI活用による効率化",
        description:
          "最新のAI技術を活用し、編集・ナレーション・字幕生成などを自動化。制作期間の短縮とコスト削減を実現します。",
      },
      {
        title: "プロモーション動画",
        description:
          "商品やサービスの魅力を最大限に伝えるプロモーション動画を制作。ターゲットに響くクリエイティブをご提案します。",
      },
      {
        title: "SNS向けショート動画",
        description:
          "TikTok、Instagram Reels、YouTube Shortsなど、各プラットフォームに最適化されたショート動画を制作します。",
      },
      {
        title: "多言語対応",
        description:
          "AI翻訳・音声合成を活用し、多言語版の動画を効率的に制作。グローバル展開をサポートします。",
      },
    ],
    flow: ["ヒアリング", "企画・構成", "制作", "AIによる編集", "納品"],
  },
  web: {
    title: "Web制作（HP・LP制作）",
    subtitle: "Web Production",
    description:
      "コーポレートサイト、サービスサイト、ランディングページなど、目的に応じた最適なWebサイトを制作します。デザインからコーディング、運用まで一貫してサポート。成果の出るWebサイトを実現します。",
    features: [
      {
        title: "コーポレートサイト制作",
        description:
          "企業の顔となるコーポレートサイトを制作。ブランドイメージを的確に伝えるデザインと使いやすさを両立します。",
      },
      {
        title: "ランディングページ制作",
        description:
          "広告やキャンペーン用のランディングページを制作。コンバージョン率の向上を目指した設計を行います。",
      },
      {
        title: "レスポンシブデザイン",
        description:
          "PC、タブレット、スマートフォンなど、あらゆるデバイスで最適に表示されるレスポンシブデザインを実装します。",
      },
      {
        title: "CMS構築",
        description:
          "WordPressなどのCMSを活用し、お客様自身で更新可能なサイトを構築。運用のしやすさを重視します。",
      },
    ],
    flow: ["ヒアリング", "企画・設計", "デザイン", "コーディング", "テスト・公開"],
  },
  ads: {
    title: "Web広告運用",
    subtitle: "Digital Advertising",
    description:
      "Google広告、SNS広告など、各種デジタル広告の戦略立案から運用まで一貫してサポートします。データに基づいた改善を繰り返し、費用対効果の高い広告運用を実現します。",
    features: [
      {
        title: "Google広告運用",
        description:
          "検索広告、ディスプレイ広告、YouTube広告など、Google広告を活用した効果的なプロモーションを行います。",
      },
      {
        title: "SNS広告運用",
        description:
          "Meta（Facebook/Instagram）、X（Twitter）、TikTokなど、各SNSプラットフォームでの広告運用をサポートします。",
      },
      {
        title: "データ分析・改善",
        description:
          "広告効果を継続的に分析し、PDCAサイクルを回すことで、費用対効果の最大化を目指します。",
      },
      {
        title: "クリエイティブ制作",
        description:
          "広告用のバナー、動画などのクリエイティブ制作もワンストップで対応します。",
      },
    ],
    flow: ["ヒアリング", "戦略立案", "アカウント設計", "広告運用", "レポート・改善"],
  },
  "china-kol": {
    title: "中国KOL PR",
    subtitle: "China KOL Marketing",
    description:
      "中国市場向けのインフルエンサーマーケティングをサポートします。現地の人気KOL（Key Opinion Leader）を活用し、Weibo、WeChat、RED（小紅書）など中国主要プラットフォームでの効果的なプロモーションを実現します。",
    features: [
      {
        title: "KOL選定・キャスティング",
        description:
          "商品やサービスに最適なKOLを選定。フォロワー数だけでなく、エンゲージメント率や親和性を重視したキャスティングを行います。",
      },
      {
        title: "各種プラットフォーム対応",
        description:
          "Weibo、WeChat、RED（小紅書）、Douyin（TikTok中国版）など、主要プラットフォームでのプロモーションに対応します。",
      },
      {
        title: "越境EC支援",
        description:
          "天猫国際、京東国際などの越境ECモールへの出店・運用をサポート。中国市場での販売を支援します。",
      },
      {
        title: "中国市場リサーチ",
        description:
          "中国市場のトレンドや競合調査を行い、効果的なマーケティング戦略を立案します。",
      },
    ],
    flow: ["ヒアリング", "市場調査", "KOL選定", "コンテンツ企画", "プロモーション実施", "効果測定"],
  },
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <div className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-2">{service.subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {service.title}
          </h1>
          <p className="text-gray-600 max-w-2xl">{service.description}</p>
        </div>
      </div>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">サービス内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <span className="text-sm text-gray-500 mb-2 block">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            制作の流れ
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {service.flow.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-[#1a1a2e] text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <span className="ml-3 font-medium">{step}</span>
                {index < service.flow.length - 1 && (
                  <span className="ml-4 text-gray-300 text-2xl hidden md:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {service.title}についてのお問い合わせ
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            サービスの詳細やお見積りなど、お気軽にご相談ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#1a1a2e] px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              お問い合わせ
            </Link>
            <Link
              href="/service"
              className="border border-white/30 text-white px-8 py-3 rounded hover:bg-white/10 transition-colors"
            >
              サービス一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
