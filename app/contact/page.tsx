
'use client';

import Link from 'next/link';

export default function Contact() {
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
              <Link href="/services" className="text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                サービス
              </Link>
              <Link href="/contact" className="text-blue-600 font-medium cursor-pointer">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">お問い合わせ</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              お気軽にご相談ください。専門スタッフが丁寧にサポートいたします。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Only */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">お問い合わせ先</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">電話でのお問い合わせ</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">03-1234-5678</p>
              <p className="text-sm text-gray-600">受付時間：平日 9:00-18:00</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="ri-mail-line text-2xl text-green-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">メールでのお問い合わせ</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">info@company.co.jp</p>
              <p className="text-sm text-gray-600">回答目安：2営業日以内</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="ri-map-pin-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">オフィス所在地</h3>
              <p className="text-gray-900 leading-relaxed">
                〒150-0013<br />
                東京都渋谷区恵比寿1-1-1<br />
                恵比寿ガーデンプレイス 20F
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-6 text-center text-xl">💡 お問い合わせ前にご確認ください</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="text-sm text-blue-800 space-y-3">
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                  無料相談は30分程度を予定しております
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                  プロジェクトの詳細資料があると、より具体的なご提案が可能です
                </li>
              </ul>
              <ul className="text-sm text-blue-800 space-y-3">
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                  急ぎのご相談は電話でのお問い合わせをお勧めします
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                  NDA（秘密保持契約）の締結も承っております
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">アクセス</h2>
            <p className="text-gray-600">JR恵比寿駅東口より徒歩5分</p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.8037328849896!2d139.71332287653074!3d35.64617597260334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e2ab26!2z5oGu5q-U5a-_44Ks44O844OH44Oz44OX44Os44Kk44K5!5e0!3m2!1sja!2sjp!4v1703123456789!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
