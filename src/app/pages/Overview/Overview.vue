<template>
  <page-container>
    <md-layout :md-gutter="true" md-column-xsmall>
      <md-layout md-flex="30" md-flex-small="35" md-flex-xsmall>
        <profile-card />
      </md-layout>

      <md-layout md-flex="70" md-flex-small="65" md-flex-xsmall>
        <pinned-repositories />
        <activity-card />
      </md-layout>
    </md-layout>
  </page-container>
</template>

<style lang="scss" scoped>
  .md-card {
    margin-bottom: 16px;
  }

  .md-layout {
    align-items: flex-start;
  }
</style>

<script lang="babel">
  import ProfileCard from './ProfileCard'
  import PinnedRepositories from './PinnedRepositories'
  import ActivityCard from './ActivityCard'

  export default {
    name: 'overview',
    components: {
      ProfileCard,
      PinnedRepositories,
      ActivityCard
    }
  }
</script>
