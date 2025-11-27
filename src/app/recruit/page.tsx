import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function RecruitPage() {
  const positions = [
    {
      title: "Webデザイナー",
      type: "正社員",
      description: "コーポレートサイトやサービスサイトのデザイン業務を担当していただきます。",
    },
    {
      title: "フロントエンドエンジニア",
      type: "正社員",
      description: "React/Next.jsを使用したWebアプリケーション開発を担当していただきます。",
    },
    {
      title: "Webディレクター",
      type: "正社員",
      description: "Web制作プロジェクトの進行管理・クライアント折衝を担当していただきます。",
    },
    {
      title: "マーケター",
      type: "正社員",
      description: "デジタルマーケティング戦略の立案・実行を担当していただきます。",
    },
  ];

  const benefits = [
    "フレックスタイム制",
    "リモートワーク可",
    "副業OK",
    "書籍購入補助",
    "資格取得支援",
    "セミナー参加支援",
  ];

  return (
    <>
      <PageHeader
        title="Recruit"
        subTitle="採用情報"
        description="私たちと一緒に、お客様のビジネス成長に貢献しませんか。"
      />

      {/* Message Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-relaxed mb-6">
                繁さでもなく感動でもなく
                <br />
                &ldquo;ありがとう&rdquo;を。
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                私たちは、お客様から「ありがとう」と言っていただける仕事を目指しています。
                派手な成果や一時的な感動ではなく、本質的な価値を提供し続けることで、
                お客様のビジネスに貢献したいと考えています。
              </p>
              <p className="text-gray-600 leading-relaxed">
                そんな想いに共感してくださる方、一緒に働きませんか。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 rounded-lg aspect-square" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            福利厚生・制度
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-white p-6 rounded-lg text-center"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-4" />
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">募集職種</h2>
          <div className="space-y-6">
            {positions.map((position) => (
              <div
                key={position.title}
                className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{position.title}</h3>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{position.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-outline text-sm whitespace-nowrap"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            エントリー・お問い合わせ
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            まずはカジュアル面談からでも大歓迎です。お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1a1a2e] px-12 py-4 rounded font-medium hover:bg-gray-100 transition-colors"
          >
            エントリーする
          </Link>
        </div>
      </section>
    </>
  );
}
