import Link from "next/link";

export default function Story() {
  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="p-6 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-stone-800">Bokson Hands</Link>
          <div className="space-x-6">
            <Link href="/story" className="text-stone-800 font-medium">브랜드 스토리</Link>
            <Link href="/materials" className="text-stone-600 hover:text-stone-800">소재 분석 & FAQ</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-stone-800 mb-4">브랜드 스토리</h1>
          <div className="w-16 h-1 bg-stone-400 mx-auto"></div>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-light text-stone-800 mb-6">시작</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Bokson Hands는 전통적인 소창 면사의 가치를 현대적으로 재해석하며 시작되었습니다. 
              빠르게 변화하는 세상에서 변하지 않는 본질적 가치를 추구하며, 
              시간이 흘러도 아름다움을 잃지 않는 제품을 만들고자 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-stone-800 mb-6">철학</h2>
            <p className="text-stone-600 leading-relaxed text-lg mb-4">
              "세월을 함께 걷는 브랜드"라는 슬로건은 단순한 마케팅 문구가 아닙니다. 
              우리는 제품이 사용자의 삶과 함께 성장하고, 시간이 지날수록 더욱 깊은 의미를 갖게 되기를 바랍니다.
            </p>
            <p className="text-stone-600 leading-relaxed text-lg">
              소창 면사의 자연스러운 변화와 숙성은 우리 삶의 여정과 닮아있습니다. 
              완벽함보다는 진정성을, 화려함보다는 지속가능함을 추구합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-stone-800 mb-6">가치</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-medium text-stone-800 mb-3">지속가능성</h3>
                <p className="text-stone-600">환경을 생각하는 소재 선택과 생산 과정</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-stone-800 mb-3">장인정신</h3>
                <p className="text-stone-600">전통 기법과 현대 기술의 조화</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-stone-800 mb-3">진정성</h3>
                <p className="text-stone-600">꾸밈없는 자연스러운 아름다움</p>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/" 
            className="inline-block bg-stone-800 text-white px-8 py-3 hover:bg-stone-700 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
}
