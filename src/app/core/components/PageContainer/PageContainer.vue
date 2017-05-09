<template>
  <transition name="page-container" appear>
    <div class="page-container">
      <slot />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
  @import '~vue-material/src/core/stylesheets/variables.scss';

  .page-container {
    padding: 16px;
    flex: 1;
    overflow: auto;
    background-color: #fff;
    transition: $swift-ease-out;
    transition-duration: .4s;
  }

  .page-container-enter-active,
  .page-container-leave-active {
    width: 100%;
    position: absolute;
    top: 64px;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    transform: translate3D(0, 0, 0);
  }

  .page-container-enter,
  .page-container-leave-to {
    opacity: 0;
    transform: translate3D(0, 15%, 0);
    transition: $swift-ease-out;
  }

  .page-container-enter-to {
    z-index: 1;
    opacity: 1;
    transition: $material-enter;
  }
</style>

<script lang="babel">
  export default {
    name: 'page-container'
  }
</script>
