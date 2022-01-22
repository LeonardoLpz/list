<template>
  <div class="error-content">
    <img src="@/assets/error.png" alt="" />
    <p class="error-title">Parece que algo ha fallado</p>
    <p class="error-text">Vuelve a intentar más tarde</p>
  </div>
</template>
<script>
export default {
  name: "Error-screen",
};
</script>
<style lang="scss">
$black: #2d3958;
$background: #fafbff;
$white: #ffff;
$purple: #6a35ff;
.error-content {
  color: $purple;
  font-family: Roboto;
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  margin-top: 150px;
  grid-row-gap: 40px;
}
.error-content img {
  width: 270px;
  margin: auto;
}
.error-title {
  font-size: 24px;
}
.error-text {
  font-size: 30px;
  font-weight: bold;
}
</style>
