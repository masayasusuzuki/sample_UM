import PageHeader from "@/components/PageHeader";

export default function DownloadsPage() {
  const downloads = [
    {
      title: "会社案内資料",
      description: "GP ONLINEの会社概要、サービス内容、実績などをまとめた資料です。",
      fileSize: "2.5MB",
    },
    {
      title: "サービス資料",
      description: "各サービスの詳細、料金プラン、導入フローをまとめた資料です。",
      fileSize: "3.2MB",
    },
    {
      title: "実績集",
      description: "これまでの制作実績をまとめたポートフォリオ資料です。",
      fileSize: "5.8MB",
    },
  ];

  return (
    <>
      <PageHeader
        title="Downloads"
        subTitle="資料ダウンロード"
        description="サービス資料や会社案内など、各種資料をダウンロードいただけます。"
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {downloads.map((item) => (
              <div
                key={item.title}
                className="border border-gray-200 rounded-lg p-8"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 h-32 bg-gray-100 rounded-lg shrink-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">PDF</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {item.fileSize}
                      </span>
                      <button className="btn-outline text-sm">
                        ダウンロード
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-xl font-bold mb-6">
              資料ダウンロードフォーム
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              以下のフォームにご入力いただくと、ダウンロードURLをメールでお送りします。
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn-primary">
                  資料をダウンロード
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
