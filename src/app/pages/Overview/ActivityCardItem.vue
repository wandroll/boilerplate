<template>
  <md-list-item v-if="event.type === 'push'">
    <md-avatar class="md-avatar-icon md-accent">
      <md-icon md-src="assets/icon-cloud-up.svg"></md-icon>
    </md-avatar>

    <div class="md-list-text-container">
      <span>{{ $t('overview.activity.events.push.name', { commits: event.commits, count: event.repositories.length }) }}</span>
      <span>{{ event.commits }} {{ $t('overview.activity.events.push.commits') }}</span>
    </div>
  </md-list-item>

  <md-list-item v-else-if="event.type === 'pull'">
    <md-avatar class="md-avatar-icon md-accent">
      <md-icon md-src="assets/icon-eye.svg"></md-icon>
    </md-avatar>

    <div class="md-list-text-container">
      <span>{{ $t('overview.activity.events.pull.name', { pulls: event.pulls, count: event.repositories.length }) }}</span>
      <span>{{ event.pulls }} {{ $t('overview.activity.events.pull.pull') }}</span>
    </div>
  </md-list-item>

  <md-list-item v-else-if="event.type === 'repo'">
    <md-avatar class="md-avatar-icon md-accent">
      <md-icon md-src="assets/icon-new.svg"></md-icon>
    </md-avatar>

    <div class="md-list-text-container">
      <span>{{ $t('overview.activity.events.repo.name') }}</span>
      <span>{{ event.repository }}</span>
    </div>
  </md-list-item>
</template>

<style lang="scss" scoped>

</style>

<script>
  export default {
    props: {
      event: Object
    }
  }
</script>
