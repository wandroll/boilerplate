<template>
  <md-card class="pinned-repositories md-flex-100">
    <md-card-area>
      <md-card-header>
        <h2 class="md-title">Pinned Repositories</h2>
      </md-card-header>
    </md-card-area>

    <md-list class="md-double-line">
      <md-list-item v-for="repo in repositories" :key="repo.name">
        <div class="md-list-text-container">
          <span>{{ repo.name }}</span>
          <span>{{ repo.description }}</span>
        </div>

        <div class="md-list-action" v-if="repo.stars">
          {{ repo.stars }} <md-icon md-src="assets/icon-stars.svg"></md-icon>
        </div>
      </md-list-item>
    </md-list>
  </md-card>
</template>

<style lang="scss" scoped>
  @import '~vue-material/src/core/stylesheets/variables.scss';
  @import '~vue-material/src/core/stylesheets/mixins.scss';

  .md-card-header {
    padding: 8px 16px;
  }

  .md-list {
    flex-flow: row wrap;

    @include layout-small {
      flex-flow: column nowrap;
    }
  }

  .md-list-item {
    max-width: 50%;
    flex: 0 0 50%;

    @include layout-small {
      max-width: none;
      flex: none;
    }
  }

  .md-list-text-container span {
    @include layout-small {
      white-space: normal;
    }
  }

  .md-list-action {
    padding: 0 8px;
    display: flex;
    align-items: center;
    color: rgba(#000, .54);
    font-size: 12px;

    .md-icon {
      width: 16px;
      min-width: 16px;
      margin-left: 4px;
    }
  }
</style>

<script lang="babel">
  export default {
    name: 'pinned-repositories',
    data: () => ({
      repositories: [
        {
          name: 'vuematerial/vue-material',
          description: 'Material design for Vue.js',
          stars: '3k'
        },
        {
          name: 'vuematerial/boilerplate',
          description: 'Official Vue Material boilerplate',
          stars: '5'
        },
        {
          name: 'vue-boilerplate',
          description: 'An opinionated Vue.js 2 boilerplate with Vue Router, AVA and Istanbul',
          stars: '10'
        },
        {
          name: 'react-boilerplate',
          description: 'An opinionated React.js 2',
          stars: null
        },
        {
          name: 'vuejs/vue',
          description: 'A progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
          stars: '53.3'
        },
        {
          name: 'boxy-oceanic',
          description: 'Boxy Oceanic port for vscode',
          stars: null
        }
      ]
    })
  }
</script>
