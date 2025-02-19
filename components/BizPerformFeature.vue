<template>
  <section class="dark:bg-gray-100 dark:text-gray-800">
    <div class="container max-w-7xl mx-auto px-4 py-8 lg:px-8">
      <h2
        class="mb-10 text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900"
      >
        주요 사업 실적
      </h2>

      <!-- 가로 스크롤 컨테이너 -->
      <div class="relative">
        <!-- 스크롤 그라데이션 효과 -->
        <div
          class="absolute left-0 top-0 bottom-0 w-20 to-transparent z-10"
        ></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-20 to-transparent z-10"
        ></div>

        <!-- 스크롤 영역 -->
        <div class="overflow-x-auto pb-6 hide-scrollbar">
          <div class="flex gap-6 min-w-max px-20">
            <!-- 교육/e-Learning 섹션 -->
            <div class="w-80 flex-none">
              <div
                class="bg-blue-100 p-3 text-center font-bold rounded-lg mb-4"
              >
                교육 / e-Learning
              </div>
              <div
                class="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <div class="space-y-4">
                  <div class="text-sm">
                    <p class="font-semibold">
                      전체교과서 차세대 구축 준비(Bridge) 프로젝트
                    </p>
                    <p class="text-gray-600">2024년 ~</p>
                  </div>
                  <div class="border-b border-gray-200"></div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      LG디지털 초코 서비스 플랫폼 개발 및 SM
                    </p>
                    <p class="text-gray-600">2023년 ~</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      SK 마이써니 e-Learning 시스템 SM
                    </p>
                    <p class="text-gray-600">2023년 ~</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">SK이노베이션 교육/MIS SM</p>
                    <p class="text-gray-600">2023년 ~</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">스마일게이트 성장센터 고도화</p>
                    <p class="text-gray-600">2023년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">동천스마트몰 증학시스템 고도화</p>
                    <p class="text-gray-600">2023년</p>
                  </div>
                  <div class="border-b border-gray-200"></div>
                  <div class="text-sm">
                    <p class="font-semibold">SK온 LMS시스템 구축</p>
                    <p class="text-gray-600">2022년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      대교교육 차이홍 BM Pre-Consulting
                    </p>
                    <p class="text-gray-600">2022년</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 통신/텔레매틱스 섹션 -->
            <div class="w-80 flex-none">
              <div
                class="bg-blue-100 p-3 text-center font-bold rounded-lg mb-4"
              >
                통신/텔레매틱스
              </div>
              <div
                class="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <div class="space-y-4">
                  <div class="text-sm">
                    <p class="font-semibold">
                      두산 밥캣 텔레매틱스 관리 시스템 구축 및 SM
                    </p>
                    <p class="text-gray-600">
                      - MIQ 시스템 고도화 (2025년 예정)
                    </p>
                    <p class="text-gray-600">
                      - Lin-Q 시스템 재구축 및 SM (2024년 ~)
                    </p>
                    <p class="text-gray-600">
                      - CI(Process Innovation) 구현 (2023년)
                    </p>
                  </div>
                  <div class="border-b border-gray-200"></div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      ADT캡스 차세대 OSS 시스템 구축 및 SM
                    </p>
                    <p class="text-gray-600">2022년 ~</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      SKB SK텔링크 B2B사업용 ICOS 고도화(Swing) 개발
                    </p>
                    <p class="text-gray-600">2022년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      SKB MPOC의 AWS Public Cloud 전환개발
                    </p>
                    <p class="text-gray-600">2022년</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- AI 섹션 -->
            <div class="w-80 flex-none">
              <div
                class="bg-blue-100 p-3 text-center font-bold rounded-lg mb-4"
              >
                AI
              </div>
              <div
                class="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <div class="space-y-4">
                  <div class="text-sm">
                    <p class="font-semibold">
                      미래에셋 생성형 AI 플랫폼 시스템 개발
                    </p>
                    <p class="text-gray-600">(w/마이온컴퍼니) (2024년)</p>
                  </div>
                  <div class="border-b border-gray-200"></div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      SKB AI 고객센터 챗봇 시스템 구축
                    </p>
                    <p class="text-gray-600">2023년</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 물류/유통 섹션 -->
            <div class="w-80 flex-none">
              <div
                class="bg-blue-100 p-3 text-center font-bold rounded-lg mb-4"
              >
                물류/유통
              </div>
              <div
                class="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <div class="space-y-4">
                  <div class="text-sm">
                    <p class="font-semibold">SK렌터카 시스템 SM</p>
                    <p class="text-gray-600">2024년 ~</p>
                  </div>
                  <div class="border-b border-gray-200"></div>
                  <div class="text-sm">
                    <p class="font-semibold">SK렌터카 시스템 고도화</p>
                    <p class="text-gray-600">2023년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      - 장단기 렌탈 / 중고차 / 다이렉트 시스템
                    </p>
                    <p class="text-gray-600">2023년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      SKB 통합 Bworld 시스템 구축 사업
                    </p>
                    <p class="text-gray-600">2023년</p>
                  </div>
                  <div class="border-b border-gray-200"></div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      SK렌터카 전기차 사업관리(데이터) 시스템 구축
                    </p>
                    <p class="text-gray-600">2022년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">SKB 사이버고객센터 고도화 개발</p>
                    <p class="text-gray-600">2022년</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 제조/기타 섹션 -->
            <div class="w-80 flex-none">
              <div
                class="bg-blue-100 p-3 text-center font-bold rounded-lg mb-4"
              >
                제조/기타
              </div>
              <div
                class="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <div class="space-y-4">
                  <div class="text-sm">
                    <p class="font-semibold">
                      GS칼텍스 에너지플러스 앱 운영/고도화 DevOPS
                    </p>
                    <p class="text-gray-600">2025년</p>
                  </div>
                  <div class="border-b border-gray-200"></div>
                  <div class="text-sm">
                    <p class="font-semibold">SKE&S VC 최적화 시스템 구축</p>
                    <p class="text-gray-600">2024년</p>
                  </div>
                  <div class="border-b border-gray-200"></div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      UGPS 통합정보화 시스템 구축(전력운영 구축)
                    </p>
                    <p class="text-gray-600">2023년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      SK이노베이션 보안관리지표 관리시스템 구축
                    </p>
                    <p class="text-gray-600">2023년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      SKCC 인프라 운영관리 웹포털 구축
                    </p>
                    <p class="text-gray-600">2023년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      교통안전공단 차세대 자동차관리 정보시스템 구축
                    </p>
                    <p class="text-gray-600">2023년</p>
                  </div>
                  <div class="border-b border-gray-200"></div>
                  <div class="text-sm">
                    <p class="font-semibold">SK온 통합 장비관리 시스템 구축</p>
                    <p class="text-gray-600">2022년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">삼성엔지니어링 EDP 구축</p>
                    <p class="text-gray-600">2022년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      미주홈-스토리지 및 DB마이그레이션
                    </p>
                    <p class="text-gray-600">2022년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">
                      교직원공제회 통계 및 데이터이관 개발
                    </p>
                    <p class="text-gray-600">2022년</p>
                  </div>
                  <div class="text-sm">
                    <p class="font-semibold">공무원 연금개발 시스템 구축</p>
                    <p class="text-gray-600">2022년</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BusinessPerformance',
};
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
