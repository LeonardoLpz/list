<template>
  <div id="app">
    <div class="search-bar" v-if="!isLoading">
      <img src="@/assets/search-icon.png" class="search-bar-image" />
      <input
        type="text"
        :placeholder="'Buscar categoria'"
        id="search"
        v-model="searchParam"
        class="search-bar-input"
      />
    </div>
    <error-screen v-if="isError || !filteredCategories.length"></error-screen>
    <div class="card-container" v-if="!isError && !isLoading && filteredCategories.length">
      <Card
        v-for="(category, index) in filteredCategories"
        :key="index"
        :props="category"
      ></Card>
    </div>
    <loader v-if="isLoading" />
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import ErrorScreen from "@/components/ErrorScreen.vue";
import getData from "@/services/getData.js";
import Loader from "@/components/Loader.vue";
export default {
  components: { Card, ErrorScreen, Loader },
  data() {
    return {
      isError: false,
      categoryData: "",
      searchParam: "",
      isLoading: true
    };
  },
  computed: {
    filteredCategories() {
      if (!this.searchParam) {
        return this.categoryData;
      }
      return this.categoryData.filter((item) =>
      item.name.esp.toLowerCase()
      .includes(this.searchParam.toLowerCase()));
    },
  },
  beforeCreate() {
    getData
      .getData()
      .then((response) => {
        if (response.status == "bad") {
          this.isError = true;
        }
        this.categoryData = response.data;
        this.isLoading = false;
      })
      .catch(() => (this.isError = true));
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Roboto:wght@400;500;700&display=swap");
$black: #2d3958;
$background: #fafbff;
$white: #ffff;
$purple: #6a35ff;
body {
  background-color: $background;
}
p {
  margin: 0;
}
.search-bar {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  grid-column-gap: 5px;
  border: solid 1px $purple;
  border-radius: 10px;
  height: 31px;
  padding: 3px 6px;
  max-width: 425px;
  margin-left: auto;
}
.search-bar-image {
  width: 20px;
  align-self: center;
  justify-self: center;
}
.search-bar-input {
  border: none;
  outline: none;
  border-radius: 10px;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: auto;
  justify-content: center;
  margin-top: 40px;
}
</style>
