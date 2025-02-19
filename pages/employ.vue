<script setup lang="ts">
import {
  IconBriefcase,
  IconUsers,
  IconClock,
  IconGift,
} from '@tabler/icons-vue';
</script>

<template>
  <div class="employ-container">
    <div class="page-header">
      <h1>채용정보</h1>
      <div class="header-line"></div>
    </div>

    <div class="content">
      <div class="company-intro">
        <h3>㈜라온아이텍이</h3>
        <p>21세기를 이끌어갈 창의적이고 도전적인 인재를 모집합니다.</p>
      </div>

      <div class="employ-info">
        <section class="info-card">
          <div class="card-header">
            <IconBriefcase class="icon" />
            <h2>자격요건</h2>
          </div>
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

        <section class="info-card">
          <div class="card-header">
            <IconUsers class="icon" />
            <h2>모집분야</h2>
          </div>
          <p>웹/모바일 개발자, AA, TA, DA, SAP(ERP) 컨설턴트 및 개발자</p>
        </section>

        <section class="info-card">
          <div class="card-header">
            <IconClock class="icon" />
            <h2>근무환경</h2>
          </div>
          <p>09:00 ~ 18:00 / 주5일근무 / 공휴일 휴무 / 월 1회 연차</p>
        </section>

        <section class="info-card">
          <div class="card-header">
            <IconGift class="icon" />
            <h2>복리후생</h2>
          </div>
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

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.header-line {
  width: 50px;
  height: 3px;
  background-color: #3b82f6;
  margin: 1rem auto;
}

.company-intro {
  text-align: center;
  background-color: #f8fafc;
  padding: 3rem 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.company-intro h3 {
  font-size: 1.8rem;
  color: #1e40af;
  margin-bottom: 1rem;
}

.company-intro p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4b5563;
}

.info-card {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease-in-out;
}

.info-card:hover {
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

.icon {
  width: 24px;
  height: 24px;
  color: #3b82f6;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e293b;
}

h2 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #334155;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin-bottom: 0.8rem;
  line-height: 1.6;
  color: #4b5563;
  padding-left: 1.5rem;
  position: relative;
}

ul li::before {
  content: '•';
  color: #3b82f6;
  position: absolute;
  left: 0;
  font-weight: bold;
}

section p {
  line-height: 1.6;
  color: #4b5563;
}

@media (min-width: 768px) {
  .employ-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}
</style>
