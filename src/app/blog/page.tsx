import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function BlogPage() {
  const categories = ["すべて", "マーケティング", "デザイン", "テクノロジー", "お知らせ"];

  return (
    <>
      <PageHeader
        title="Blog"
        subTitle="ブログ"
        description="マーケティングやWeb制作に関する情報を発信しています。"
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

          {/* Blog List */}
          <div className="space-y-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Link
                href={`/blog/${i}`}
                key={i}
                className="flex flex-col md:flex-row gap-6 py-6 border-b border-gray-100 group"
              >
                <div className="w-full md:w-48 h-32 bg-gray-100 rounded-lg shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-gray-500">2024.01.{10 + i}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      マーケティング
                    </span>
                  </div>
                  <h3 className="font-medium text-lg group-hover:text-gray-600 transition-colors mb-2">
                    ブログ記事タイトル {i} - Webマーケティングに関する解説記事
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    記事の概要テキストがここに入ります。記事の内容を簡潔にまとめた文章で、読者の興味を引きます。
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-16">
            {[1, 2, 3, 4, 5].map((page) => (
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
