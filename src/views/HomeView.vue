<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <v-sheet class="h-100 w-100 bg-primary home-block">
    <v-sheet
      class="bg-white login-block"
      width="624"
      height="100%"
    >
      <v-sheet
        width="350"
        class="d-flex flex-column login-block--content"
      >
        <v-img
          src="./../assets/images/logo.png"
          width="117"
          height="30"
          class="mb-[30px]"
        ></v-img>
        <h1 class="text-[40px] font-bold mb-[30px]">Авторизация</h1>
        <v-form>
          <v-text-field
            class="h-[70px]"
            rounded="lg"
            variant="solo"
            flat
            label="Логин"
            bg-color="#F6F6F6"
            color="primary"
          ></v-text-field>
          <v-text-field
            class="h-[70px] mb-[30px]"
            rounded="lg"
            variant="solo"
            flat
            label="Пароль"
            bg-color="#F6F6F6"
            color="primary"
          ></v-text-field>
          <router-link to="/forms">
            <v-btn
              variant="flat"
              color="primary"
              width="160"
              height="50"
              rounded="lg"
              class="text-[16px]"
              >Вход
            </v-btn>
          </router-link>
        </v-form>
      </v-sheet>
    </v-sheet>
  </v-sheet>
</template>

<style scoped lang="scss">
.home-block {
  background-image: url("./../assets/images/home-bg.png");
  background-repeat: no-repeat;
}

.login-block {
  border-radius: 0 10px 10px 0;
}

.login-block--content {
  margin-left: 179px;
  padding-top: 80px;
}
</style>
