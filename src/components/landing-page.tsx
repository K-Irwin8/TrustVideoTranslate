'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function LandingPageComponent() {
  const [videoHeight, setVideoHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const viewportHeight = window.innerHeight
        const containerTop = containerRef.current.getBoundingClientRect().top
        const availableHeight = viewportHeight - containerTop - 100 // 100px for padding and other elements
        setVideoHeight(availableHeight * 0.4) // 40% of available height for videos
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <div className="bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Image src="/placeholder.svg?height=40&width=100" width={100} height={40} alt="LOGO ロゴ" className="mr-2" />
          </div>
          <div>
            <Link href="/login" className="text-gray-600 hover:text-gray-900 mr-4">
              ログイン
            </Link>
            <Button asChild className="bg-[#0000FF] text-white hover:bg-blue-700">
              <Link href="/try-free">無料で始める</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section ref={containerRef} className="min-h-screen flex flex-col justify-center items-center px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="flex justify-center space-x-4 mb-8">
              <Image src="/placeholder.svg?height=50&width=50" width={50} height={50} alt="評価" />
              <Image src="/placeholder.svg?height=50&width=100" width={100} height={50} alt="プロダクトハント" />
              <Image src="/placeholder.svg?height=50&width=100" width={100} height={50} alt="ゴールデンキティアワード" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-8">プロ級の翻訳を数分で</h1>

            <div className="flex justify-center space-x-4 mb-8">
              <Button asChild className="bg-[#0000FF] text-white text-xl px-8 py-4 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                <Link href="/try-free">無料で始める</Link>
              </Button>
              <Button asChild variant="outline" className="text-[#0000FF] border-[#0000FF] text-xl px-8 py-4 rounded-md hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <div className="w-[45%]">
                <div className="relative" style={{ height: `${videoHeight}px` }}>
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    controls
                    poster="/placeholder.svg?height=360&width=640"
                  >
                    <source src="/path-to-your-original-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="mt-2 text-lg">オリジナル動画</p>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="text-gray-400 w-8 h-8" />
              </div>
              <div className="w-[45%]">
                <div className="relative" style={{ height: `${videoHeight}px` }}>
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    controls
                    poster="/placeholder.svg?height=360&width=640"
                  >
                    <source src="/path-to-your-translated-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="mt-2 text-lg">動画翻訳</p>
              </div>
            </div>
          </div>
        </section>

        {[1, 2, 3].map((index) => (
          <section key={index} className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full h-full max-w-6xl max-h-[80vh]">
              <Image
                src={`/placeholder.svg?height=1080&width=1920&text=Figma+Image+${index}`}
                width={1920}
                height={1080}
                alt={`Figma Image ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          </section>
        ))}

        <section className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">料金プラン</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "無料プラン", price: "¥0/月", features: ["基本機能", "5分/月の翻訳", "2言語サポート"] },
                { title: "プロプラン", price: "¥2,980/月", features: ["すべての機能", "60分/月の翻訳", "10言語サポート", "優先サポート"] },
                { title: "エンタープライズ", price: "お問い合わせ", features: ["カスタマイズ可能", "無制限の翻訳", "すべての言語サポート", "専属サポート"] }
              ].map((plan, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-4xl font-bold mb-6">{plan.price}</p>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={index === 1 ? "bg-[#0000FF] hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-700"}>
                      選択する
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">会社名について</h3>
              <ul className="space-y-2">
                <li><Link href="/about">会社概要</Link></li>
                <li><Link href="/careers">採用情報</Link></li>
                <li><Link href="/press">プレスリリース</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">製品</h3>
              <ul className="space-y-2">
                <li><Link href="/features">機能</Link></li>
                <li><Link href="/pricing">料金</Link></li>
                <li><Link href="/faq">よくある質問</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">リソース</h3>
              <ul className="space-y-2">
                <li><Link href="/blog">ブログ</Link></li>
                <li><Link href="/developers">開発者向け</Link></li>
                <li><Link href="/support">サポート</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
              <p>〒100-0005 東京都千代田区丸の内1-1-1</p>
              <p>電話: 03-1234-5678</p>
              <p>メール: info@COMPANYEMAIL.ai</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 COMPANY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}