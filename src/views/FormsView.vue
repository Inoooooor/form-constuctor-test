<template>
  <v-sheet class="d-flex h-100 w-100 bg-[#F6F6F6]">
    <v-sheet
      width="434"
      height="100%"
      class="bg-white mr-[30px] form-nav-block"
    >
      <v-sheet
        width="173"
        class="d-flex flex-column h-100 justify-space-between ms-[179px] pt-[80px]"
      >
        <v-sheet width="100%">
          <v-img
            src="./../assets/images/logo.png"
            width="117"
            height="30"
            class="mb-[30px]"
          ></v-img>

          <v-tabs
            v-model="tab"
            direction="vertical"
            color="primary"
          >
            <v-tab
              v-for="tab in tabNames"
              :key="tab.id"
              hide-slider
              class="text-none"
              :value="tab.value"
              >{{ tab.name }}</v-tab
            >
          </v-tabs>
        </v-sheet>

        <v-btn
          variant="outlined"
          color="primary"
          width="160"
          height="50"
          rounded="lg"
          class="text-[16px] text-none mb-[73px]"
          >Выход
        </v-btn>
      </v-sheet>
    </v-sheet>
    <div class="forms-window w-[825px] pt-[80px] d-flex flex-column">
      <div
        class="forms-window__title d-flex justify-space-between align-center mb-[49px]"
      >
        <span class="text-[40px] font-semibold">Формы</span>
        <v-btn
          variant="flat"
          color="primary"
          width="160"
          height="50"
          rounded="lg"
          class="text-[16px] text-none"
          >Создать форму
        </v-btn>
      </div>
      <div class="forms-window__forms-list h-[630px]">
        <v-sheet
          v-for="n in 3"
          :key="n"
          height="190"
          width="100%"
          class="d-flex justify-space-between rounded-[10px] p-[24px] mb-[30px] form-card"
        >
          <v-sheet>
            <v-sheet class="d-flex flex-column">
              <v-sheet class="w-[372px] mb-[8px] text-[24px] font-semibold"
                >Форма регистрации участников</v-sheet
              >
              <v-sheet class="mb-[58px] text-[14px] text-grey"
                >Автор: user1</v-sheet
              >
            </v-sheet>
            <v-sheet class="text-grey text-[14px]"
              >Дата создания: 01.01.23</v-sheet
            >
          </v-sheet>
          <v-sheet
            class="w-[179px] h-100 d-flex flex-column justify-space-between"
          >
            <v-btn
              variant="outlined"
              color="primary"
              width="100%"
              height="42"
              rounded="lg"
              class="text-[16px] text-none"
              >Редактировать
            </v-btn>
            <v-btn
              variant="text"
              color="primary"
              width="100%"
              height="42"
              rounded="lg"
              class="text-[16px] text-none"
              >Удалить
            </v-btn>
          </v-sheet>
        </v-sheet>
      </div>
    </div>
  </v-sheet>
</template>
<script setup>
import { ref } from "vue"
const tab = ref(null)

const tabNames = [
  {
    id: 1,
    value: "forms",
    name: "Формы",
  },
  {
    id: 2,
    value: "users",
    name: "Пользователи",
  },
]
</script>
<style scoped lang="scss">
.form-nav-block {
  border-radius: 0 10px 10px 0;
}
</style>
