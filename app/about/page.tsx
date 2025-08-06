
'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold font-[\'Pacifico\'] text-blue-600 cursor-pointer">
                logo
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                ホーム
              </Link>
              <Link href="/about" className="text-blue-600 font-medium cursor-pointer">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">会社概要</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              私たちは革新的なテクノロジーソリューションを通じて、お客様のビジネスの成長と成功をサポートしています。
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">私たちについて</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6 leading-relaxed">
                  2009年の創業以来、私たちは常に最先端のテクノロジーとクリエイティブな発想を融合させ、お客様に価値ある体験を提供してきました。デジタル変革の波を先導し、企業の持続可能な成長をサポートすることが私たちの使命です。
                </p>
                <p className="mb-6 leading-relaxed">
                  多様な業界での豊富な経験と専門知識を活かし、Webサイト制作からモバイルアプリ開発、システム構築、デジタルマーケティングまで、包括的なソリューションを提供しています。
                </p>
                <p className="leading-relaxed">
                  お客様との長期的なパートナーシップを大切にし、共に成長し続けることで、より良い未来の創造に貢献いたします。
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20interior%20with%20professional%20team%20collaboration%2C%20glass%20conference%20rooms%20and%20contemporary%20workspace%20design%2C%20natural%20lighting%20and%20minimalist%20architecture%2C%20business%20professionals%20working%20together%20in%20innovative%20environment&width=600&height=500&seq=about-office-001&orientation=landscape"
                alt="オフィス環境"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Japanese%20business%20professionals%20in%20modern%20office%20environment%20discussing%20company%20mission%20and%20goals%2C%20diverse%20team%20collaboration%20in%20bright%20meeting%20room%20with%20natural%20lighting%2C%20corporate%20strategy%20session%20with%20charts%20and%20planning%20materials&width=400&height=300&seq=mission-image-001&orientation=landscape"
                  alt="ミッション"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ミッション</h3>
              <p className="text-gray-600 leading-relaxed">
                革新的なテクノロジーソリューションを通じて、お客様のビジネスの可能性を最大化し、持続可能な成長を実現する。デジタル変革の推進により、社会全体の発展に貢献します。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Futuristic%20technology%20workspace%20with%20innovative%20digital%20solutions%2C%20modern%20Japanese%20office%20with%20advanced%20tech%20equipment%20and%20creative%20design%20elements%2C%20vision%20of%20future%20business%20environment%20with%20clean%20architecture&width=400&height=300&seq=vision-image-001&orientation=landscape"
                  alt="ビジョン"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ビジョン</h3>
              <p className="text-gray-600 leading-relaxed">
                テクノロジーとクリエイティビティの融合により、未来のデジタル社会を創造するリーディングカンパニーとして、世界中の企業から信頼される存在になること。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">私たちの価値観</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              これらの価値観が、私たちの行動と決断の基盤となっています
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-rocket-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">革新性</h3>
              <p className="text-gray-600 leading-relaxed">
                常に最新の技術とトレンドを追求し、従来の枠にとらわれない革新的なソリューションを提供します。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">誠実性</h3>
              <p className="text-gray-600 leading-relaxed">
                お客様との信頼関係を最優先し、透明性と誠実さを持って長期的なパートナーシップを築きます。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-star-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">品質</h3>
              <p className="text-gray-600 leading-relaxed">
                妥協のない品質管理と継続的な改善により、常に最高水準のサービスを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">経営陣</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              豊富な経験と専門知識を持つリーダーたちが、会社の成長を牽引しています
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20male%20CEO%20portrait%20in%20modern%20business%20suit%2C%20confident%20executive%20leader%20with%20warm%20smile%20and%20professional%20demeanor%2C%20corporate%20headshot%20with%20clean%20background%2C%20mature%20Japanese%20businessman%20with%20leadership%20presence&width=300&height=300&seq=japanese-ceo-001&orientation=squarish"
                alt="田中太郎"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">田中 太郎</h3>
              <p className="text-blue-600 font-medium mb-4">代表取締役CEO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                早稲田大学商学部卒業後、大手システム会社で20年以上のIT業界経験を積み、多数の企業のデジタル変革を成功に導いてきました。戦略的視点と実行力で会社の成長を牽引しています。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20female%20CTO%20portrait%20in%20business%20attire%2C%20confident%20technology%20executive%20with%20intelligent%20expression%20and%20warm%20smile%2C%20corporate%20headshot%20with%20modern%20background%2C%20skilled%20Japanese%20female%20tech%20leader&width=300&height=300&seq=japanese-cto-001&orientation=squarish"
                alt="佐藤花子"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">佐藤 花子</h3>
              <p className="text-blue-600 font-medium mb-4">取締役CTO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                東京大学工学部情報工学科卒業。NTTデータでのシステムエンジニア経験を活かし、技術面での革新を推進。最新技術の導入と品質管理において卓越したリーダーシップを発揮しています。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20male%20COO%20portrait%20in%20sharp%20business%20suit%2C%20experienced%20operations%20executive%20with%20approachable%20demeanor%20and%20confident%20smile%2C%20corporate%20headshot%20with%20professional%20lighting%2C%20competent%20Japanese%20business%20leader&width=300&height=300&seq=japanese-coo-001&orientation=squarish"
                alt="山田次郎"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">山田 次郎</h3>
              <p className="text-blue-600 font-medium mb-4">取締役COO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                慶應義塾大学経済学部卒業後、外資系コンサルティング会社で経営コンサルタントとして活躍。効率的な業務運営と組織マネジメントのスペシャリストとして、継続的な改善を実現しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Table */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">会社情報</h2>
          <div className="bg-white shadow-sm rounded-xl overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-8 py-6 bg-gray-50 font-medium text-gray-900">会社名</td>
                  <td className="px-8 py-6">株式会社テックソリューションズ</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 bg-gray-50 font-medium text-gray-900">設立</td>
                  <td className="px-8 py-6">2009年4月1日</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 bg-gray-50 font-medium text-gray-900">資本金</td>
                  <td className="px-8 py-6">1億円</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 bg-gray-50 font-medium text-gray-900">従業員数</td>
                  <td className="px-8 py-6">52名（2024年1月現在）</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 bg-gray-50 font-medium text-gray-900">所在地</td>
                  <td className="px-8 py-6">〒150-0013 東京都渋谷区恵比寿1-1-1 恵比寿ガーデンプレイス 20F</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 bg-gray-50 font-medium text-gray-900">事業内容</td>
                  <td className="px-8 py-6">
                    Webサイト制作・システム開発・モバイルアプリ開発<br />
                    ITコンサルティング・デジタルマーケティング
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold font-[\'Pacifico\'] text-xl text-blue-600 mb-4">logo</h3>
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
