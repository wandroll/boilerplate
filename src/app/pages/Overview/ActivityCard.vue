<template>
  <md-card class="activity-card md-flex-100">
    <md-card-area>
      <md-card-header>
        <md-card-header-text>
          <h2 class="md-title">{{ $t('overview.activity.title') }}</h2>
        </md-card-header-text>

        <md-menu md-size="2" md-direction="bottom left">
          <md-button class="md-dense md-accent" md-menu-trigger>
            <span>{{ currentFilter }}</span>
            <md-icon md-src="assets/icon-arrow-dropdown.svg"></md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item v-for="filter in filters" :key="filter" @click.native="changeFilter(filter)">{{ filter }}</md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-card-header>
    </md-card-area>

    <md-list class="md-double-line" v-for="month in timeline" :key="month.name">
      <md-subheader>{{ month.name }}</md-subheader>
      <activity-card-item v-for="event in month.events" :key="event.name" :event="event" />
    </md-list>
  </md-card>
</template>

<style lang="scss" scoped>
  .md-card-header {
    padding: 8px 16px;
  }

  .md-menu {
    padding-top: 8px;

    .md-button {
      min-width: 80px;
      padding-right: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .md-icon {
      margin: 0;
    }
  }
</style>

<script lang="babel">
  import ActivityCardItem from './ActivityCardItem'

  export default {
    name: 'activity-card',
    components: {
      ActivityCardItem
    },
    data: () => {
      const filters = ['2017', '2016', '2015', '2014']

      return {
        timeline: [
          {
            name: 'May',
            events: [
              {
                type: 'push',
                repositories: [
                  'vuematerial/boilerplate'
                ],
                commits: '23'
              },
              {
                type: 'pull',
                repositories: [
                  'vuematerial/boilerplate'
                ],
                pulls: '23'
              }
            ]
          },
          {
            name: 'April',
            events: [
              {
                type: 'push',
                repositories: [
                  'marcosmoura/vue-boilerplate',
                  'marcosmoura/react-boilerplate',
                  'marcosmoura/payment-app'
                ],
                commits: '26'
              },
              {
                type: 'repo',
                repository: 'marcosmoura/payment-app'
              }
            ]
          }
        ],
        currentFilter: filters[0],
        filters
      }
    },
    methods: {
      changeFilter (filter) {
        this.currentFilter = filter
      }
    }
  }
</script>
