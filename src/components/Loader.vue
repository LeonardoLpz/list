<template>
  <div class="loading-section">
    <div id="loadingProgressG">
      <div id="loadingProgressG_1" class="loadingProgressG"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loadingSection",
};
</script>
<style lang="scss">
$black: #2d3958;
$background: #fafbff;
$white: #ffff;
$purple: #6a35ff;
.loading-section {  
  text-align: center;
  justify-content: center;
  display: grid;
  grid-row-gap: 32px;
  grid-template-rows: 1fr;
  height: calc(100vh - 16px);
}
#loadingProgressG {
  width: 123px;
  height: 6px;
  justify-self: center;
  align-self: center;
  overflow: hidden;
  background-color: $background;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
}

.loadingProgressG {
  margin-top: 0;
  background-color: $purple;
  margin-left: -123px;
  -moz-animation-name: bounce_loadingProgressG;
  -moz-animation-duration: 3s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -webkit-animation-name: bounce_loadingProgressG;
  -webkit-animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -ms-animation-name: bounce_loadingProgressG;
  -ms-animation-duration: 3s;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  -o-animation-name: bounce_loadingProgressG;
  -o-animation-duration: 3s;
  -o-animation-iteration-count: infinite;
  -o-animation-timing-function: linear;
  animation-name: bounce_loadingProgressG;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  width: 123px;
  height: 6px;
}
.loadingBefore {
  grid-template-rows: 1fr 0px 1fr;
  grid-row-gap: 15px;
}
@-moz-keyframes bounce_loadingProgressG {
  0% {
    margin-left: -123px;
  }

  100% {
    margin-left: 123px;
  }
}

@-webkit-keyframes bounce_loadingProgressG {
  0% {
    margin-left: -123px;
  }

  100% {
    margin-left: 123px;
  }
}

@-ms-keyframes bounce_loadingProgressG {
  0% {
    margin-left: -123px;
  }

  100% {
    margin-left: 123px;
  }
}

@-o-keyframes bounce_loadingProgressG {
  0% {
    margin-left: -123px;
  }

  100% {
    margin-left: 123px;
  }
}

@keyframes bounce_loadingProgressG {
  0% {
    margin-left: -123px;
  }

  100% {
    margin-left: 123px;
  }
}
</style>
