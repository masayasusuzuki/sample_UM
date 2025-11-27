import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-700">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900">記事 {id}</span>
          </nav>
        </div>
      </div>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-gray-500">2024.01.{10 + Number(id)}</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                マーケティング
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              ブログ記事タイトル {id} - Webマーケティングに関する解説記事
            </h1>
          </div>

          {/* Main Image */}
          <div className="bg-gray-100 rounded-lg aspect-video mb-12" />

          {/* Article Content */}
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-8">
              この記事では、Webマーケティングの基本的な考え方と、
              実践的な施策について解説します。デジタルマーケティングの
              世界は日々進化していますが、基本となる考え方を押さえておくことで、
              効果的な施策を立案できるようになります。
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4">
              1. Webマーケティングとは
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Webマーケティングとは、インターネットを活用して行う
              マーケティング活動の総称です。SEO、Web広告、SNSマーケティング、
              コンテンツマーケティングなど、さまざまな手法が含まれます。
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4">
              2. 効果的な施策の立て方
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              効果的なWebマーケティング施策を立てるためには、
              まず自社の課題と目標を明確にすることが重要です。
              その上で、ターゲットユーザーの行動を分析し、
              最適なチャネルと施策を選択していきます。
            </p>

            <div className="bg-gray-100 rounded-lg aspect-video my-8" />

            <h2 className="text-xl font-bold mt-12 mb-4">
              3. 成果を出すためのポイント
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Webマーケティングで成果を出すためには、継続的な改善が欠かせません。
              データを分析し、仮説を立て、施策を実行し、効果を検証する。
              このサイクルを回し続けることで、着実に成果を積み上げていくことができます。
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4">まとめ</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Webマーケティングは、正しい知識と継続的な実践によって
              成果を出すことができます。この記事で紹介した考え方を参考に、
              ぜひ自社のマーケティング活動に活かしてみてください。
            </p>
          </div>

          {/* Share */}
          <div className="border-t border-b py-6 my-12">
            <p className="text-sm text-gray-500 mb-3">この記事をシェア</p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-gray-100 rounded-full" />
              <button className="w-10 h-10 bg-gray-100 rounded-full" />
              <button className="w-10 h-10 bg-gray-100 rounded-full" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <Link href="/blog" className="btn-outline">
              一覧に戻る
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
