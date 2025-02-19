<script setup lang="ts">
import { IconQuote } from '@tabler/icons-vue';
</script>

<template>
  <div class="greeting-container">
    <div class="page-header">
      <h1>CEO 인사말</h1>
      <div class="header-line"></div>
    </div>

    <div class="content">
      <div class="highlight-box">
        <IconQuote class="quote-icon" />
        <p>
          끊임없는 도전을 통해 새로운 가치를 창출하고,<br />
          진정한 Digital Innovation 및 e-Business 파트너로서 고객 만족에 최선을
          다하겠습니다.
        </p>
      </div>

      <div class="message-content">
        <div class="greeting-section">
          <h2>안녕하십니까?</h2>
          <p>라온아이텍을 방문하여 주신 여러분께 깊은 감사를 드립니다.</p>
          <br />
          <p>
            라온아이텍은 한 가족으로서 직원 모두의 행복을 추구하고 나아가 최망칭
            미래를 창조한다는 자부심을 가진 훌륭한 일터입니다.<br />
            고객, 직원, 파트너들과의 상호 신뢰를 바탕으로 최적의 Solution을
            도출하여 Digital Transformation의 변화에 능동적으로 대처해 나가는
            선도적인 기업으로서의 역할을 충실히 하겠습니다.
          </p>
          <br />
          <p>
            신용, 기술력, 품질을 바탕으로 끊임없는 도전을 통해 새로운 가치를
            창출하고, 다양한 정보시스템 개발 및 Software개발과 다양한 Solution
            및 기술지원 서비스 제공으로 진정한 Digital Innovation 및 e-Business
            파트너로서 고객만족에 최선을 다하겠습니다.
          </p>
          <br />
          <p>앞으로도 많은 관심과 성원을 부탁드립니다.</p>
        </div>
      </div>

      <div class="signature">
        <p>㈜ 라온아이텍</p>
        <p class="ceo">대표이사 송현주</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.greeting-container {
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

.highlight-box {
  background-color: #f8fafc;
  padding: 3rem 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.quote-icon {
  width: 48px;
  height: 48px;
  color: #3b82f6;
  opacity: 0.2;
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.highlight-box p {
  font-size: 1.3rem;
  line-height: 2;
  color: #1e40af;
  font-weight: 500;
}

.message-content {
  margin: 3rem 0;
  padding: 0 1rem;
}

.greeting-section,
.vision-section,
.mission-section,
.closing-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease-in-out;
}

.greeting-section:hover,
.vision-section:hover,
.mission-section:hover,
.closing-section:hover {
  transform: translateY(-2px);
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e293b;
}

h2 {
  font-size: 1.8rem;
  color: #334155;
  margin-bottom: 1rem;
}

p {
  line-height: 1.8;
  color: #4b5563;
}

.signature {
  text-align: right;
  margin-top: 4rem;
  padding: 2rem;
  border-top: 2px solid #e5e7eb;
}

.signature p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.signature .ceo {
  font-weight: 600;
  color: #1e40af;
}

@media (min-width: 768px) {
  .message-content {
    padding: 0 2rem;
  }

  .highlight-box {
    padding: 4rem 3rem;
  }
}
</style>
