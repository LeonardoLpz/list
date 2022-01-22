<template>
  <div class="card">
    <img :src="this.props.image" alt="category Image" class="card-image" />
    <div class="card-content">
      <p class="card-category">{{ this.props.name.esp }}</p>
      <p class="card-price">
        {{
          (this.props.suggested_budget / 100).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        }}
      </p>
      <p class="card-category-type">
        {{
          this.props.category_type == 1
            ? "Normal"
            : this.props.category_type == 2
            ? "Libre"
            : "Personalizada"
        }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    props: Object,
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
  width: 150px;
}
.card-category {
  font-size: 20px;
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
