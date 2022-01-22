<template>
  <div class="card">
    <img
      src="https://resources.plerk.io/category/music.png"
      alt="category Image"
      class="card-image"
    />
    <div class="card-content">
      <p class="card-category">Música</p>
      <p class="card-price">$10 USD</p>
      <p class="card-category-type">Tipo de categoria: Normal</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    msg: String,
  },
};
</script>
<style lang="scss">
$black: #2d3958;
$background: #fafbff;
$white: #ffff;
$purple: #6a35ff;
.card {
  background: $white;
  border-radius: 10px;
  width: 341px;
  height: 188px;
  filter: drop-shadow(1px 2px 5px rgba(123, 136, 168, 0.08));
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  padding: 20px 10px;
  box-sizing: border-box;
  margin-inline-end: 20px;
  margin-block-end: 20px;
}
.card-image {
  width: 150px;
  justify-self: center;
  align-self: center;
}
.card-content {
  display: grid;
  grid-row-gap: 15px;
  grid-template-rows: auto auto 1fr;
}
.card-category {
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 600;
}
.card-price {
  font-size: 18px;
  font-family: Roboto;
}
.card-category-type {
  font-size: 12px;
  font-family: Roboto;
  align-self: end;
}
</style>
