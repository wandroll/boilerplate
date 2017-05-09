<template>
  <div id="app" class="container">
    <md-whiteframe class="main-header">
      <md-toolbar class="md-large">
        <div class="page-wrapper">
          <div class="md-toolbar-container">
            <md-button class="main-menu-trigger md-icon-button" @click.native="toggleSidenav">
              <md-icon md-src="assets/icon-menu.svg"></md-icon>
            </md-button>

            <h1 class="md-title md-flex">Vue Material Demo</h1>
          </div>

          <div class="md-toolbar-container">
            <md-tabs md-theme="alternative" @change="changeTab">
              <md-tab v-for="item in nav" :key="item.url" :md-label="$t(item.label)" />
            </md-tabs>
          </div>
        </div>
      </md-toolbar>
    </md-whiteframe>

    <md-sidenav class="main-sidenav md-left md-fixed" ref="sideNav">
      <md-list>
        <md-list-item v-for="item in nav" :key="item.url">
          <router-link exact :to="item.url">
            <md-icon :md-src="`assets/icon-${item.icon}.svg`" />
            <span>{{ $t(item.label) }}</span>
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <router-view />
  </div>
</template>

<style lang="scss">
  @import '~vue-material/src/core/stylesheets/variables.scss';

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
  }

  .page-wrapper {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    position: relative;
  }

  .main-header {
    position: relative;

    .md-toolbar {
      height: 128px;
      overflow: hidden;

      @media (max-width: 767px) {
        height: 64px;
        min-height: 64px;
      }
    }

    .main-menu-trigger {
      @media (min-width: 767px) {
        display: none;
      }

      .md-icon {
        top: 0;
      }
    }

    .md-title {
      @media (min-width: 767px) {
        padding-left: 8px;
      }
    }

    .md-toolbar-container:last-child {
      align-items: flex-end;

      @media (max-width: 767px) {
        display: none;
      }
    }

    .md-tabs {
      margin-left: 8px;
    }

    .md-tabs-content {
      display: none;
    }
  }

  .main-sidenav {
    z-index: 4;

    .router-link-exact-active {
      font-weight: 700;
    }
  }
</style>

<script lang="babel">
  export default {
    name: 'app',
    data: () => ({
      nav: [
        {
          url: '/',
          icon: 'panorama',
          label: 'overview.title'
        },
        {
          url: '/repositories',
          icon: 'code',
          label: 'repositories.title'
        },
        {
          url: '/stars',
          icon: 'stars',
          label: 'stars.title'
        }
      ]
    }),
    methods: {
      toggleSidenav () {
        this.$refs.sideNav.open()
      },
      changeTab (item) {
        const { url } = this.nav[item]

        this.$router.push(url)
      }
    },
    mounted () {
      this.$router.afterEach(() => {
        this.$refs.sideNav.close()
      })
    }
  }
</script>
