import Link from "next/link";

export default function Materials() {
  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="p-6 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-stone-800">Bokson Hands</Link>
          <div className="space-x-6">
            <Link href="/story" className="text-stone-600 hover:text-stone-800">브랜드 스토리</Link>
            <Link href="/materials" className="text-stone-800 font-medium">소재 분석 & FAQ</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-stone-800 mb-4">소창 면사 분석 & FAQ</h1>
          <div className="w-16 h-1 bg-stone-400 mx-auto"></div>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-light text-stone-800 mb-8">소창 면사 소재 분석</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-stone-800 mb-4">물리적 특성</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• 밀도: 1.54-1.56 g/cm³</li>
                  <li>• 흡습성: 8-10%</li>
                  <li>• 인장강도: 3.5-4.0 g/den</li>
                  <li>• 신장률: 7-8%</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-stone-800 mb-4">화학적 특성</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• 셀룰로오스 함량: 88-96%</li>
                  <li>• pH 안정성: 6.5-7.5</li>
                  <li>• 내알칼리성: 우수</li>
                  <li>• 염색성: 양호</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-stone-800 mb-4">환경적 장점</h3>
              <p className="text-stone-600 leading-relaxed">
                소창 면사는 100% 천연 소재로 생분해가 가능하며, 재배 과정에서 화학 농약 사용을 최소화합니다. 
                또한 염색 과정에서도 친환경 염료를 사용하여 환경 부담을 줄입니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light text-stone-800 mb-8">자주 묻는 질문</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-stone-800 mb-3">Q. 소창 면사 제품의 관리 방법은?</h3>
                <p className="text-stone-600">
                  찬물 또는 미지근한 물에서 중성세제로 손세탁하는 것을 권장합니다. 
                  직사광선을 피해 그늘에서 자연 건조시키면 오래도록 사용할 수 있습니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-stone-800 mb-3">Q. 시간이 지나면서 색상이 변하나요?</h3>
                <p className="text-stone-600">
                  자연 소재의 특성상 시간이 지나면서 자연스러운 색상 변화가 있을 수 있습니다. 
                  이는 소재의 자연스러운 숙성 과정으로, 오히려 독특한 매력을 더해줍니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-stone-800 mb-3">Q. 알레르기가 있어도 사용할 수 있나요?</h3>
                <p className="text-stone-600">
                  소창 면사는 천연 소재로 화학 처리를 최소화하여 민감한 피부에도 안전합니다. 
                  다만 개인차가 있으므로 처음 사용 시 패치 테스트를 권장합니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-stone-800 mb-3">Q. 제품의 수명은 얼마나 되나요?</h3>
                <p className="text-stone-600">
                  적절한 관리 하에 5-10년 이상 사용 가능합니다. 
                  시간이 지날수록 더욱 부드러워지고 사용자의 생활 패턴에 맞춰 변화하는 것이 특징입니다.
                </p>
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
