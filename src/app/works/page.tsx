import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function WorksPage() {
  const categories = ["すべて", "Webサイト制作", "アプリ開発", "ブランディング"];

  return (
    <>
      <PageHeader
        title="Works"
        subTitle="実績紹介"
        description="これまでに手がけたプロジェクトをご紹介します。"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  i === 0
                    ? "bg-[#1a1a2e] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Link href={`/works/${i}`} key={i} className="group">
                <div className="bg-gray-100 rounded-lg aspect-[3/2]" />
                <div className="mt-4">
                  <p className="text-xs text-gray-500 mb-1">Webサイト制作</p>
                  <h3 className="font-medium group-hover:text-gray-600 transition-colors">
                    プロジェクトタイトル {i}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-16">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-full text-sm ${
                  page === 1
                    ? "bg-[#1a1a2e] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
