import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subTitle="お問い合わせ"
        description="お仕事のご依頼やご相談など、お気軽にお問い合わせください。"
      />

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="space-y-8">
            {/* お問い合わせ種別 */}
            <div>
              <label className="block text-sm font-medium mb-3">
                お問い合わせ種別 <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {["サービスについて", "採用について", "その他"].map((type) => (
                  <label key={type} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="type"
                      value={type}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 会社名 */}
            <div>
              <label className="block text-sm font-medium mb-2">
                会社名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] focus:border-transparent"
                placeholder="株式会社○○"
              />
            </div>

            {/* お名前 */}
            <div>
              <label className="block text-sm font-medium mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] focus:border-transparent"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label className="block text-sm font-medium mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] focus:border-transparent"
                placeholder="example@company.com"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label className="block text-sm font-medium mb-2">電話番号</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] focus:border-transparent"
                placeholder="03-1234-5678"
              />
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label className="block text-sm font-medium mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] focus:border-transparent resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            {/* プライバシーポリシー */}
            <div>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="w-4 h-4 mt-1" />
                <span className="text-sm text-gray-600">
                  <a href="/privacy" className="underline">
                    プライバシーポリシー
                  </a>
                  に同意します
                </span>
              </label>
            </div>

            {/* 送信ボタン */}
            <div className="text-center">
              <button type="submit" className="btn-primary px-16">
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
