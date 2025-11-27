import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function WorkDetailPage({ params }: Props) {
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
            <Link href="/works" className="hover:text-gray-700">
              Works
            </Link>
            <span>/</span>
            <span className="text-gray-900">プロジェクト {id}</span>
          </nav>
        </div>
      </div>

      <article className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-2">Webサイト制作</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              プロジェクトタイトル {id}
            </h1>
            <p className="text-gray-600">
              株式会社サンプル様のコーポレートサイトリニューアルプロジェクト
            </p>
          </div>

          {/* Main Image */}
          <div className="bg-gray-100 rounded-lg aspect-video mb-12" />

          {/* Project Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-4">プロジェクト概要</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                クライアント様のビジネス課題を解決するため、マーケティング視点でのサイト設計から、
                ユーザー体験を重視したUI/UXデザイン、最新技術を活用した開発まで一貫して担当しました。
              </p>
              <p className="text-gray-600 leading-relaxed">
                プロジェクトの詳細な説明テキストがここに入ります。
                制作の背景や課題、ソリューション、成果などを記載します。
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-4">プロジェクト情報</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-500">クライアント</dt>
                  <dd>株式会社サンプル</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">カテゴリ</dt>
                  <dd>Webサイト制作</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">担当範囲</dt>
                  <dd>戦略設計 / デザイン / 開発</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">公開日</dt>
                  <dd>2024年1月</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-16">
            <h2 className="text-xl font-bold mb-6">ギャラリー</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 rounded-lg aspect-video" />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center border-t pt-8">
            <Link
              href={`/works/${Number(id) - 1}`}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← 前のプロジェクト
            </Link>
            <Link href="/works" className="btn-outline">
              一覧に戻る
            </Link>
            <Link
              href={`/works/${Number(id) + 1}`}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              次のプロジェクト →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
