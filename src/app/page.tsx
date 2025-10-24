import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
      <nav className="p-6 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-stone-800">Bokson Hands</h1>
          <div className="space-x-6">
            <Link href="/story" className="text-stone-600 hover:text-stone-800">브랜드 스토리</Link>
            <Link href="/materials" className="text-stone-600 hover:text-stone-800">소재 분석 & FAQ</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-stone-800 mb-6">세월을 함께 걷는 브랜드</h2>
          <p className="text-xl text-stone-600 mb-8">소창 면사를 주재료로 한 지속가능한 라이프스타일</p>
          <div className="w-24 h-1 bg-stone-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-light text-stone-800 mb-6">자연스러운 아름다움</h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              소창 면사의 자연스러운 질감과 내구성을 통해 시간이 흘러도 변하지 않는 가치를 전달합니다. 
              우리의 제품은 단순한 소비가 아닌, 삶과 함께 성장하는 동반자입니다.
            </p>
            <div className="space-y-4">
              <Link 
                href="/story" 
                className="inline-block bg-stone-800 text-white px-8 py-3 hover:bg-stone-700 transition-colors"
              >
                브랜드 스토리 보기
              </Link>
              <br />
              <Link 
                href="/materials" 
                className="inline-block border border-stone-800 text-stone-800 px-8 py-3 hover:bg-stone-800 hover:text-white transition-colors"
              >
                소재 정보 확인
              </Link>
            </div>
          </div>
          <div className="bg-stone-200 h-96 flex items-center justify-center">
            <span className="text-stone-500">소창 면사 제품 이미지</span>
          </div>
        </div>
      </main>
    </div>
  );
}
