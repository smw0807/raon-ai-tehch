<script setup lang="ts">
import {
  IconBriefcase,
  IconUsers,
  IconClock,
  IconGift,
} from '@tabler/icons-vue';
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-slate-800">채용정보</h1>
      <div class="w-12 h-1 bg-blue-500 mx-auto mt-4"></div>
    </div>

    <div class="space-y-8">
      <div class="text-center bg-slate-50 p-8 sm:p-12 rounded-lg shadow-md">
        <h3 class="text-2xl text-blue-900 mb-4">㈜라온아이텍이</h3>
        <p class="text-xl text-gray-600 leading-relaxed">
          21세기를 이끌어갈 창의적이고 도전적인 인재를 모집합니다.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div
          class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:-translate-y-1 transition-transform duration-200"
        >
          <div class="flex items-center gap-2 mb-4">
            <IconBriefcase class="w-6 h-6 text-blue-500" />
            <h2 class="text-xl font-semibold text-slate-700">자격요건</h2>
          </div>
          <ul class="space-y-3 text-gray-600">
            <li
              class="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold"
            >
              4년제 대학 졸업 또는 졸업예정자
            </li>
            <li
              class="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold"
            >
              전산 관련학과 전공자
            </li>
            <li
              class="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold"
            >
              전산관련 교육기관 수료자
            </li>
            <li
              class="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold"
            >
              신체건강하고 창의력과 열정을 겸비한 남/녀 누구나
            </li>
            <li
              class="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold"
            >
              군필자 또는 면제자로서 해외여행에 결격사유가 없는 자(병역특례부문
              제외)
            </li>
          </ul>
        </div>

        <div
          class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:-translate-y-1 transition-transform duration-200"
        >
          <div class="flex items-center gap-2 mb-4">
            <IconUsers class="w-6 h-6 text-blue-500" />
            <h2 class="text-xl font-semibold text-slate-700">모집분야</h2>
          </div>
          <p class="text-gray-600">
            웹/모바일 개발자, AA, TA, DA, SAP(ERP) 컨설턴트 및 개발자
          </p>
        </div>

        <div
          class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:-translate-y-1 transition-transform duration-200"
        >
          <div class="flex items-center gap-2 mb-4">
            <IconClock class="w-6 h-6 text-blue-500" />
            <h2 class="text-xl font-semibold text-slate-700">근무환경</h2>
          </div>
          <p class="text-gray-600">
            09:00 ~ 18:00 / 주5일근무 / 공휴일 휴무 / 월 1회 연차
          </p>
        </div>

        <div
          class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:-translate-y-1 transition-transform duration-200"
        >
          <div class="flex items-center gap-2 mb-4">
            <IconGift class="w-6 h-6 text-blue-500" />
            <h2 class="text-xl font-semibold text-slate-700">복리후생</h2>
          </div>
          <p class="text-gray-600">퇴직연금 / 4대보험</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
