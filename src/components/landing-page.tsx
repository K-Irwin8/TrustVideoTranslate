// THIS IS THE FINISHED VERSION FOR - HAS LOG IN - HAS 料金プラン for free and 2C customers etc. THE NEXT UPDATED VERSION IS FOR THE 受託 only phase


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
            {/*company logo image*/}
            <Image src="/trustVideoTranslateLogo.svg" width={180} height={72} alt="company ロゴ" className="mr-2" />
          </div>
          <div>
            {/*<Link href="/login" className="text-gray-600 hover:text-gray-900 mr-4">
              ログイン
            </Link>*/}
            {/*<Button asChild className="bg-[#0000FF] text-white hover:bg-blue-700">
              <Link href="/try-free">無料で始める</Link>
            </Button>*/}
            <Button asChild variant="outline" className="bg-[#0000FF] text-white text-xl px-8 py-4 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                <Link href="/pdf-for-contact/salespitchv1.pdf">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section ref={containerRef} className="min-h-screen flex flex-col justify-center items-center px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="flex justify-center space-x-4 mb-8">
              {/* these are the images when you get somekind of 権威性 like something something NO1, or something something GOLD
              // comment out for now*/}
              {/*
              <Image src="/placeholder.svg?height=50&width=50" width={50} height={50} alt="評価" />
              <Image src="/placeholder.svg?height=50&width=100" width={100} height={50} alt="プロダクトハント" />
              <Image src="/placeholder.svg?height=50&width=100" width={100} height={50} alt="ゴールデンキティアワード" />
              */}
            </div>


            <h1 className="text-5xl md:text-6xl font-bold mb-8">プロ級の翻訳を数分で</h1>

            <div className="flex justify-center space-x-4 mb-8">
              {/*<Button asChild className="bg-[#0000FF] text-white text-xl px-8 py-4 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                <Link href="/try-free">無料で始める</Link>
              </Button>*/}
              {/*<Button asChild variant="outline" className="text-[#0000FF] border-[#0000FF] text-xl px-8 py-4 rounded-md hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                <Link href="/contact">お問い合わせ</Link>
              </Button>*/}
              <Button asChild variant="outline" className="bg-[#0000FF] text-white text-xl px-8 py-4 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                <Link href="/pdf-for-contact/salespitchv1.pdf">お問い合わせ</Link>
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

        <section className="min-h-screen flex items-center justify-center bg-white p-8">
          <div className="max-w-6xl w-full">
            <h2 className="text-3xl font-bold text-center mb-4">
              最先端のAI技術と翻訳の専門性が融合
            </h2>
            <h1 className="text-5xl font-bold text-center mb-12">
              Trust動画翻訳 3つの強み
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">プロ級の品質：AIが実現する高精度翻訳</h3>
                <p className="text-lg mb-4">
                  Trust動画翻訳は、最先端のAI技術を駆使して、人間の翻訳者に匹敵する高品質な翻訳を提供します。
                  単なる機械翻訳を超え、文脈や業界特有の表現を理解し、自然で流暢な翻訳を実現します。
                </p>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <p className="font-bold mb-2">翻訳例：</p>
                  <p className="mb-2">原文：「猫に小判」</p>
                  <p className="mb-2">一般的な機械翻訳：「Coins for cats」</p>
                  <p className="text-[#0000FF] font-bold">Trust 動画翻訳：「Pearls before swine」</p>
                </div>
                <p className="text-sm text-gray-600">
                  Trust 動画翻訳は単なる直訳ではなく、適切な英語の慣用句に置き換えることで、
                  元の文の真意を正確に伝えることができます。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">AIと人間の専門家のベストミックス</h3>
                <p className="text-lg mb-4">
                  Trust動画翻訳サービスは、高度なAI技術と経験豊富な翻訳専門家のノウハウを組み合わせています。
                  AIが高速で正確な翻訳の下地を作り、人間の専門家がその品質をさらに向上させます。
                  これにより、スピードと品質の両立を実現し、従来の翻訳サービスでは不可能だった
                  高品質かつ迅速な翻訳サービスを提供しています。
                </p>
                <ul className="list-disc list-inside text-lg">
                  <li>業界特化の専門用語に対応</li>
                  <li>文化的なニュアンスを的確に翻訳</li>
                  <li>ブランドの声を維持しつつローカライズ</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">翻訳にかかるコストを圧縮</h3>
                <p className="text-lg mb-4">
                  Trust動画翻訳サービスは、従来の人力翻訳と比較して大幅なコスト削減を実現しました。これまで高額な翻訳費用がネックで多言語展開を断念されていた方も、グローバル展開が可能になります。
                </p>
                <p className="text-sm text-gray-600">
                  ※一部の機能のみ無料でお試しいただけます。
                </p>
              </div>
              <div className="flex items-end justify-center">
                <Image
                  src="/Frame1-10graph.svg" ///Frame1-10graph?height=300&width=400
                  width={400}
                  height={300}
                  alt="コスト削減チャート"
                  className="w-full h-auto"
                  id="cost-reduction-chart"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <Image src="/yukinoIsMyNo1.svg" width={300} height={200} alt="翻訳プロセス" className="mx-auto" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">圧倒的な翻訳スピード</h3>
                <p className="text-lg">
                  Trust動画翻訳独自のAI技術を活用し、超高速処理を実現しました。字幕制作や音声吹き替えをスピーディに安く提供することで、他社にリリースされるコンテンツを追随出来ず遅れを取っていた、世界に向けたコンテンツを送り出す支援をします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">料金プラン</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "字幕翻訳プラン", price: "¥800/分", features: ["1営業日で納品", "プロの翻訳家による字幕修正可能(別料金)", "日本語、英語対応"] },
                { title: "動画吹替β版", price: "¥1100/分", features: ["1営業日で納品", "日本語、英語対応"] },
                { title: "字幕翻訳+動画吹替β版", price: "¥1500/分", features: ["1営業日で納品", "日本語、英語対応"] }
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
                    {/*<Button className={index === 1 ? "bg-[#0000FF] hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-700"}>
                      選択する
                    </Button>*/}
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
              <h3 className="text-lg font-semibold mb-4">Trust動画翻訳について</h3>
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
              <p>〒223-0053 東京都目黒区目黒4-1-1</p>
              <p>電話: 03-1234-5678</p>
              <p>メール: info@trustvideotranslate.ai</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 TRUST VIDEO TRANSLATE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}