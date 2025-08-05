
'use client';

import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold font-['Pacifico'] text-blue-600 cursor-pointer">
                logo
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                ホーム
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                会社概要
              </Link>
              <Link href="/services" className="text-blue-600 font-medium cursor-pointer">
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
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">サービス一覧</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              お客様のビジネス成長をサポートする包括的なデジタルソリューションをご提供いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-computer-line text-2xl text-blue-600"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Webサイト制作</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                レスポンシブデザインと最新の技術を活用した高品質なWebサイトを制作いたします。ユーザビリティとSEOを重視した設計で、お客様のビジネス目標達成をサポートします。
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">レスポンシブデザイン対応</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">SEO最適化</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">CMS導入・運用サポート</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">アクセス解析・改善提案</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%20with%20multiple%20monitors%20displaying%20beautiful%20responsive%20website%20designs%2C%20clean%20coding%20environment%20with%20contemporary%20office%20setup%2C%20web%20developer%20working%20on%20professional%20websites%20with%20modern%20frameworks&width=600&height=500&seq=web-dev-workspace-001&orientation=landscape"
                alt="Webサイト制作"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="lg:order-2">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-2xl text-green-600"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">モバイルアプリ開発</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                iOS・Android両対応のネイティブアプリから、React NativeやFlutterを活用したクロスプラットフォーム開発まで、幅広いニーズにお応えします。
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">iOS・Android対応</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">ネイティブ・クロスプラットフォーム</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">UI/UX設計</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">ストア申請・運用サポート</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <img 
                src="https://readdy.ai/api/search-image?query=Mobile%20app%20development%20studio%20with%20smartphones%20and%20tablets%20displaying%20beautiful%20modern%20app%20interfaces%2C%20iOS%20and%20Android%20development%20environment%2C%20clean%20workspace%20with%20app%20design%20mockups%20and%20prototypes%20on%20multiple%20devices&width=600&height=500&seq=mobile-dev-studio-001&orientation=landscape"
                alt="モバイルアプリ開発"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-2xl text-purple-600"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ITコンサルティング</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                デジタル変革から業務効率化まで、お客様のビジネス課題に最適なソリューションをご提案します。戦略策定から実装・運用まで一貫してサポートいたします。
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">デジタル変革戦略</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">システム導入支援</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">業務プロセス改善</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">技術選定・アーキテクチャ設計</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20consulting%20meeting%20in%20modern%20conference%20room%20with%20consultants%20presenting%20digital%20transformation%20strategy%2C%20charts%20and%20data%20visualization%20on%20screens%2C%20collaborative%20workspace%20with%20glass%20walls%20and%20natural%20lighting&width=600&height=500&seq=consulting-meeting-001&orientation=landscape"
                alt="ITコンサルティング"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">その他のサービス</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              多様なニーズにお応えする専門的なサービスをご提供しています
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-database-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">システム開発</h3>
              <p className="text-gray-600 leading-relaxed">
                業務効率化を実現するカスタムシステムの設計・開発を行います。既存システムとの連携も含めた包括的なソリューション。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-megaphone-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">デジタルマーケティング</h3>
              <p className="text-gray-600 leading-relaxed">
                SEO対策、SNS運用、Web広告運用など、デジタルチャネルを活用したマーケティング戦略をトータルサポート。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">セキュリティ対策</h3>
              <p className="text-gray-600 leading-relaxed">
                セキュリティ診断から対策実装まで、お客様の大切なデータとシステムを包括的に保護するサービス。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-cloud-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">クラウド移行</h3>
              <p className="text-gray-600 leading-relaxed">
                AWS、Azure、GCPなど主要クラウドプラットフォームへの移行支援と最適化により、コスト削減と効率化を実現。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-palette-line text-2xl text-pink-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">UI/UXデザイン</h3>
              <p className="text-gray-600 leading-relaxed">
                ユーザー中心設計に基づいた直感的で美しいインターフェース設計。ユーザビリティテストも含めた総合的なデザイン。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-tools-line text-2xl text-cyan-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">保守・運用</h3>
              <p className="text-gray-600 leading-relaxed">
                24時間365日の監視体制でシステムの安定稼働をサポート。定期メンテナンスから緊急対応まで包括的に対応。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">プロジェクトの流れ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              お客様のご要望を丁寧にヒアリングし、最適なソリューションをご提供いたします
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ヒアリング</h3>
              <p className="text-gray-600 leading-relaxed">
                お客様のご要望、課題、目標を詳しくお聞かせください。現状分析も含めて最適な提案をいたします。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">企画・提案</h3>
              <p className="text-gray-600 leading-relaxed">
                ヒアリング内容を基に、最適なソリューションを企画し、詳細な提案書をご提示いたします。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">設計・開発</h3>
              <p className="text-gray-600 leading-relaxed">
                承認いただいた企画を基に、詳細設計から開発まで、品質管理を徹底して進めてまいります。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">納品・サポート</h3>
              <p className="text-gray-600 leading-relaxed">
                テスト完了後に納品し、継続的な保守・運用サポートでお客様のビジネスを支援いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            プロジェクトのご相談はお気軽に
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            お客様のご要望に最適なソリューションをご提案いたします。
            まずは無料相談で、お気軽にお聞かせください。
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
