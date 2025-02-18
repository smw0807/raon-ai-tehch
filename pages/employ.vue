<script setup lang="ts"></script>

<template>
  <div class="employ-container">
    <h1>채용정보</h1>

    <div class="content">
      <p class="company-intro">
        ㈜라온아이텍이<br />21세기를 이끌어갈 창의적이고 도전적인 인재를
        모집합니다.
      </p>

      <div class="employ-info">
        <section>
          <h2>자격요건</h2>
          <ul>
            <li>4년제 대학 졸업 또는 졸업예정자</li>
            <li>전산 관련학과 전공자</li>
            <li>전산관련 교육기관 수료자</li>
            <li>신체건강하고 창의력과 열정을 겸비한 남/녀 누구나</li>
            <li>
              군필자 또는 면제자로서 해외여행에 결격사유가 없는 자(병역특례부문
              제외)
            </li>
          </ul>
        </section>

        <section>
          <h2>모집분야</h2>
          <p>웹/모바일 개발자, AA, TA, DA, SAP(ERP) 컨설턴트 및 개발자</p>
        </section>

        <section>
          <h2>근무환경</h2>
          <p>09:00 ~ 18:00 / 주5일근무 / 공휴일 휴무 / 월 1회 연차</p>
        </section>

        <section>
          <h2>복리후생</h2>
          <p>퇴직연금 / 4대보험</p>
        </section>

        <section>
          <h2>전형 시기</h2>
          <p>수시 접수</p>
        </section>

        <section>
          <h2>전형 방법</h2>
          <ul>
            <li>1차 서류 전형</li>
            <li>2차 면접 전형(면접 전형은 합격자에 한해 개별 통보함)</li>
          </ul>
        </section>

        <section>
          <h2>지원 요령</h2>
          <ul>
            <li>서류: 이력서 및 자기소개서 1부</li>
            <li>
              서류 전형 합격자에 한하여 성적증명서 및 졸업(예정) 증명서와 자진을
              제출하여야 함
            </li>
          </ul>
        </section>

        <section>
          <h2>지원 방법</h2>
          <p>우 편: 서울특별시 금천구 가산로3, 141호(구 선경오피스텔)</p>
          <p>E-Mail: shhyun@raonaitech.co.kr</p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.employ-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.company-intro {
  font-size: 1.5rem;
  margin: 2rem 0;
  line-height: 1.8;
}

.employ-info section {
  margin: 2rem 0;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

section p {
  line-height: 1.6;
}
</style>
