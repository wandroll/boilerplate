<template>
  <div id="app" class="container">
    <md-whiteframe class="main-header" md-tag="md-toolbar">
      <md-button class="main-menu-trigger md-icon-button" @click.native="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h1 class="md-title md-flex">Vue Material Starter</h1>
    </md-whiteframe>

    <md-sidenav class="main-sidenav md-left md-fixed" ref="sideNav">
      <md-list>
        <md-list-item>
          <router-link exact to="/">{{ $t('nav.home') }}</router-link>
        </md-list-item>

        <md-list-item>
          <router-link exact to="/about">{{ $t('nav.about') }}</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <router-view />
  </div>
</template>

<style lang="scss">
  @import '~vue-material/src/core/stylesheets/variables.scss';

  $sidebar-size: 280px;

  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  body {
    display: flex;
  }

  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    position: relative;
    transform: translate3d(0, 0, 0);
    transition: $swift-ease-out;

    @media (min-width: 1281px) {
      margin-left: $sidebar-size;
    }
  }

  .main-header {
    position: relative;
    z-index: 2;
  }

  .main-menu-trigger {
    @media (min-width: 1281px) {
      display: none;
    }
  }

  .md-title {
    @media (min-width: 1281px) {
      padding-left: 8px;
    }
  }

  .main-sidenav.md-left {
    z-index: 3;

    .md-sidenav-content {
      width: $sidebar-size;
      display: flex;
      flex-flow: column;
      overflow: hidden;
      transition: $swift-ease-out;

      @media (min-width: 1281px) {
        top: 0;
        left: -$sidebar-size;
        pointer-events: auto;
        box-shadow: $material-shadow-2dp;
        transform: translate3d(0, 0, 0);
      }
    }

    .md-backdrop {
      @media (min-width: 1281px) {
        opacity: 0;
        pointer-events: none;
      }
    }
  }
</style>

<script lang="babel">
  export default {
    name: 'app',
    methods: {
      toggleSidenav () {
        this.$refs.sideNav.open()
      }
    },
    mounted () {
      this.$router.beforeEach((from, to, next) => {
        this.$refs.sideNav.close()
        next()
      })
    }
  }
</script>
