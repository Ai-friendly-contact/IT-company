
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold font-['Pacifico'] text-blue-600">logo</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                ホーム
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                会社概要
              </Link>
              <Link href="/services" className="text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                サービス
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20business%20office%20environment%20with%20clean%20professional%20workspace%2C%20natural%20lighting%20from%20large%20windows%2C%20minimalist%20interior%20design%20with%20glass%20walls%20and%20contemporary%20furniture%2C%20corporate%20atmosphere%20with%20subtle%20blue%20accents%2C%20professional%20team%20collaboration%20space&width=1400&height=800&seq=hero-bg-001&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              未来を創る
              <br />
              <span className="text-blue-400">イノベーション</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              私たちは最新のテクノロジーと創造性を融合させ、お客様のビジネスを次のレベルへと導きます。持続可能な成長と革新的なソリューションを提供いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium cursor-pointer whitespace-nowrap">
                お問い合わせ
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-center font-medium cursor-pointer whitespace-nowrap">
                サービス詳細
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              私たちの強み
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              長年の経験と革新的なアプローチで、お客様のビジネス課題を解決いたします
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">革新的なソリューション</h3>
              <p className="text-gray-600 leading-relaxed">
                最新技術を活用した独自のソリューションで、従来の課題を根本から解決します。AI・クラウド・データ分析を駆使した次世代のサービスを提供いたします。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-team-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">専門チーム</h3>
              <p className="text-gray-600 leading-relaxed">
                各分野のエキスパートが集結したプロフェッショナルチームです。豊富な経験と専門知識を活かし、お客様のニーズに最適なソリューションを提案いたします。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-customer-service-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">充実したサポート</h3>
              <p className="text-gray-600 leading-relaxed">
                導入から運用まで、一貫したサポート体制でお客様をバックアップします。24時間365日の監視体制で、安心してサービスをご利用いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">プロジェクト実績</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">専門スタッフ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15年</div>
              <div className="text-blue-100">業界経験</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">99%</div>
              <div className="text-blue-100">顧客満足度</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              主要サービス
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              幅広い分野でお客様のビジネス成長をサポートいたします
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20web%20development%20workspace%20with%20multiple%20monitors%20showing%20modern%20website%20designs%2C%20clean%20coding%20environment%20with%20contemporary%20office%20setup%2C%20developer%20working%20on%20responsive%20web%20applications%2C%20modern%20tech%20company%20atmosphere&width=400&height=300&seq=service-web-001&orientation=landscape"
                  alt="Webサイト制作"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Webサイト制作</h3>
              <p className="text-gray-600 leading-relaxed">
                レスポンシブデザインと最新技術を活用した高品質なWebサイトを制作いたします。
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20mobile%20app%20development%20studio%20with%20smartphones%20and%20tablets%20displaying%20beautiful%20app%20interfaces%2C%20iOS%20and%20Android%20development%20environment%2C%20clean%20workspace%20with%20app%20design%20mockups%20and%20prototypes&width=400&height=300&seq=service-app-001&orientation=landscape"
                  alt="アプリ開発"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">アプリ開発</h3>
              <p className="text-gray-600 leading-relaxed">
                iOS・Android対応のネイティブアプリから、クロスプラットフォーム対応まで。
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Business%20consulting%20meeting%20in%20modern%20conference%20room%20with%20professionals%20discussing%20strategy%2C%20charts%20and%20data%20visualization%20on%20screens%2C%20collaborative%20workspace%20with%20glass%20walls%20and%20natural%20lighting&width=400&height=300&seq=service-consulting-001&orientation=landscape"
                  alt="コンサルティング"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">コンサルティング</h3>
              <p className="text-gray-600 leading-relaxed">
                デジタル変革から業務効率化まで、戦略的なコンサルティングサービス。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            プロジェクトを始めませんか？
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            お客様のビジョンを現実に変える、最初の一歩を踏み出しましょう。
            無料相談から始めて、最適なソリューションをご提案いたします。
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer whitespace-nowrap inline-block">
            無料相談を申し込む
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold font-['Pacifico'] text-xl text-blue-600 mb-4">logo</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                革新的なソリューションで、お客様のビジネスの未来を創造します。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/services" className="hover:text-blue-600 transition-colors cursor-pointer">Webサイト制作</Link></li>
                <li><Link href="/services" className="hover:text-blue-600 transition-colors cursor-pointer">アプリ開発</Link></li>
                <li><Link href="/services" className="hover:text-blue-600 transition-colors cursor-pointer">コンサルティング</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">会社情報</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-blue-600 transition-colors cursor-pointer">会社概要</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600 transition-colors cursor-pointer">お問い合わせ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">お問い合わせ</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>📧 info@company.co.jp</div>
                <div>📞 03-1234-5678</div>
                <div>📍 東京都渋谷区恵比寿1-1-1</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
