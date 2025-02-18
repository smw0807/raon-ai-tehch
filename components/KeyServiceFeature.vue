<template>
  <section class="mb-20">
    <div
      class="container max-w-xl p-4 py-8 mx-auto space-y-16 lg:px-8 lg:max-w-7xl"
    >
      <div>
        <h2
          class="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900"
        >
          주요 서비스 영역
        </h2>
        <!-- <p
          class="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600"
        >
          Quando cetero his ne, eum admodum sapientem ut.
        </p> -->
      </div>

      <div class="container mx-auto px-4">
        <!-- As-Is 섹션 -->
        <div class="flex flex-col md:flex-row gap-4 mb-4">
          <div
            class="w-full md:w-32 bg-blue-100 p-4 rounded-lg flex items-center justify-center"
          >
            <span class="font-bold">As-Is</span>
          </div>

          <!-- 상단 파란색 박스들 -->
          <div
            class="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div
              class="bg-blue-100 p-4 rounded-lg flex items-center justify-center"
            >
              <span class="font-bold">e-Learning</span>
            </div>
            <div
              class="bg-blue-100 p-4 rounded-lg flex items-center justify-center"
            >
              <span class="font-bold">통신/텔레매틱스</span>
            </div>
            <div
              class="bg-blue-100 p-4 rounded-lg flex items-center justify-center"
            >
              <span class="font-bold">물류/유통</span>
            </div>
            <div
              class="bg-blue-100 p-4 rounded-lg flex items-center justify-center"
            >
              <span class="font-bold">제조/기타</span>
            </div>
          </div>
        </div>

        <!-- ERP 박스 -->
        <div class="bg-blue-100 p-4 rounded-lg mb-8 text-center font-bold">
          <span>ERP</span>
        </div>

        <!-- 화살표 -->
        <div class="flex justify-center mb-8">
          <div
            class="w-0 h-0 border-l-[25px] border-l-transparent border-t-[30px] border-t-green-200 border-r-[25px] border-r-transparent"
          ></div>
        </div>

        <!-- To-Be 섹션 -->
        <div class="flex flex-col md:flex-row gap-4 mb-4">
          <div
            class="w-full md:w-32 bg-yellow-100 p-4 rounded-lg flex items-center justify-center"
          >
            <span class="font-bold">To-Be</span>
          </div>

          <!-- 하단 노란색 박스들 -->
          <div
            class="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div
              class="bg-yellow-100 p-4 rounded-lg flex items-center justify-center text-center"
            >
              <span class="font-bold">IoT/<br />Machine<br />Learning</span>
            </div>
            <div
              class="bg-yellow-100 p-4 rounded-lg flex items-center justify-center"
            >
              <span class="font-bold">Health Care</span>
            </div>
            <div
              class="bg-yellow-100 p-4 rounded-lg flex items-center justify-center"
            >
              <span class="font-bold">Google<br />Analytics</span>
            </div>
            <div
              class="bg-yellow-100 p-4 rounded-lg flex items-center justify-center"
            >
              <span class="font-bold">Smart Farm</span>
            </div>
          </div>
        </div>

        <!-- AI 박스 -->
        <div class="bg-yellow-100 p-4 rounded-lg text-center font-bold">
          <span>AI</span>
        </div>
      </div>
    </div>
  </section>
</template>
