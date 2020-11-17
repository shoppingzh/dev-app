<template>
  <div class="ds-card" :data-placeholder="placeholder">
    <div class="ds-card__inner">
      <div>
        <div class="ds-card__title">
          {{ title }}
        </div>
        <div class="ds-card__description">
          {{ description }}
        </div>
      </div>
    </div>
    <div class="ds-card__back" />
  </div>
</template>

<script>
export default {
  name: 'DsCard',
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
  @color: #070b22;
  .ds-card {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 300px;
    height: 400px;
    color: #fbfafb;
    background-color: @color;
    padding: 10px 20px 40px;
    box-sizing: border-box;

    &:hover {
      &:after {
        top: 0;
      }
    }
    
    &:before {
      content: "";
      display: block;
      position: absolute;
      z-index: 3;
      left: 0;
      width: 50%;
      top: 0;
      bottom: 0;
      background-color: rgba(200, 200, 200, .1);
      opacity: .7;
    }
    &:after {
      content: attr(data-placeholder);
      display: block;
      position: absolute;
      right: 15px;
      top: 10%;
      font-size: 150px;
      color: #14182f;
      font-weight: 700;
      z-index: 2;
      transition: top .3s ease-in-out;
    }

    &__inner {
      position: relative;
      z-index: 5;
    }
    
    &__back {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -2;
      transform: skew(2deg, 2deg);
      background-image: linear-gradient(45deg, #e1451b, #dd0248);
      
    }
    &__title {
      font-size: 30px;
      margin-bottom: 12px;
    }
  }
</style>