'use client'

import { useState } from 'react'
import { Upload, ChevronDown } from 'lucide-react'

export function VideoTranslationForm() {
  const [file, setFile] = useState<File | null>(null)
  const [sourceLanguage, setSourceLanguage] = useState('')
  const [targetLanguage, setTargetLanguage] = useState('')
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && (droppedFile.type === 'video/mp4' || droppedFile.type === 'video/quicktime')) {
      setFile(droppedFile)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && (selectedFile.type === 'video/mp4' || selectedFile.type === 'video/quicktime')) {
      setFile(selectedFile)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) {
      alert('Please upload a video file.')
      return
    }

  const formData = new FormData()
    formData.append('file', file as File)
    formData.append('email', email)
    formData.append('sourceLanguage', sourceLanguage)
    formData.append('targetLanguage', targetLanguage)
    formData.append('title', title)

    try {
        const response = await fetch('https://api.trustvideotranslate.com/upload', {
          method: 'POST',
          body: formData,
        })
        const result = await response.json()
        alert(result.message || 'An error occurred.')
      } catch (error) {
        console.error('Error:', error)
        alert('An error occurred while uploading the file.')
      }
  }
    

  const languages = [
    { value: 'japanese', label: '日本語' },
    { value: 'english', label: '英語' },
    { value: 'zh', label: '中国語' },
    { value: 'fr', label: 'フランス語' },
    { value: 'es', label: 'スペイン語' },
    { value: 'pt', label: 'ポルトガル語' },
  ]

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">TRUST 動画翻訳</h1>
      <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center cursor-pointer"
        >
          {file ? (
            <p className="text-blue-600">{file.name}</p>
          ) : (
            <>
              <Upload className="mx-auto h-12 w-12 text-blue-500" />
              <p className="mt-2 text-sm text-blue-600">
                ファイルをアップロードまたはドラッグ＆ドロップ
              </p>
              <p className="text-xs text-gray-500 mt-1">MP4, MOVファイルをサポートしています</p>
            </>
          )}
          <input
            type="file"
            accept=".mp4,.mov"
            onChange={handleFileInput}
            className="hidden"
            id="file-upload"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="source-language" className="block text-sm font-medium text-gray-700">
            元の言語
          </label>
          <div className="relative">
            <select
              id="source-language"
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md appearance-none bg-white"
            >
              <option value="">言語を選択</option>
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="target-language" className="block text-sm font-medium text-gray-700">
            翻訳する言語
          </label>
          <div className="relative">
            <select
              id="target-language"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md appearance-none bg-white"
            >
              <option value="">言語を選択</option>
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="video-title" className="block text-sm font-medium text-gray-700">
            動画タイトル
          </label>
          <input
            type="text"
            id="video-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="タイトルを入力してください"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="user-email" className="block text-sm font-medium text-gray-700">
            メールアドレス
          </label>
          <input
            type="email"
            id="user-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="送信先のメールアドレスを入力してください"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          翻訳を開始
        </button>
      </form>
    </div>
  )
}
