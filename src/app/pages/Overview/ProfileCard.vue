<template>
  <md-card class="profile-card">
    <div class="profile-card-picture">
      <md-card-media-cover>
        <md-card-media class="profile-card-background" md-ratio="4:3">
          <img :src="`assets/background-${backgroundImage}.jpg`" alt="Background">
        </md-card-media>
      </md-card-media-cover>

      <md-card-media class="profile-card-avatar">
        <img src="https://avatars3.githubusercontent.com/u/1357885?v=3" alt="Profile">
      </md-card-media>
    </div>

    <md-card-header>
      <div class="md-title">Marcos Moura</div>
      <div class="md-subhead">marcosmoura</div>
    </md-card-header>

    <md-card-header class="profile-card-icon">
      <md-icon md-src="assets/icon-link.svg" />
      <a href="https://vuematerial.github.io/" target="_blank" rel="noopener">https://vuematerial.github.io/</a>
    </md-card-header>

    <md-card-header class="profile-card-icon">
      <md-icon md-src="assets/icon-location.svg" />
      <span>Brazil</span>
    </md-card-header>

    <md-card-content>
      Front End Engineer from Brazil with a focus on usability, performance and with a great experience with Material Design.
    </md-card-content>
  </md-card>
</template>

<style lang="scss" scoped>
  @mixin filter-base () {
    &:before,
    &:after {
      width: 100%;
      height: 100%;
      display: block;
      top: 0;
      left: 0;
      pointer-events: none;
      content: " ";
    }

    &:before {
      z-index: 2;
    }

    &:after {
      position: absolute;
      z-index: 3;
    }

    img {
      z-index: 1;
    }
  }

  .profile-card-background {
    @include filter-base;
    overflow: hidden;
    filter: contrast(.9);

    &:after {
      background: rgba(242, 242, 242, .8);
      mix-blend-mode: darken;
    }

    &:before {
      background: rgb(34, 37, 63);
      mix-blend-mode: color-dodge;
    }

    img {
      filter: blur(6px);
      transform: scale(1.1);
    }
  }

  .profile-card-picture {
    position: relative;
  }

  .profile-card-avatar {
    $vertical: 22%;
    $horizontal: 29%;

    @include filter-base;
    width: auto;
    position: absolute;
    top: $vertical;
    right: $horizontal;
    bottom: $vertical;
    left: $horizontal;
    overflow: hidden;
    background-color: #fff;
    border-radius: 3px;
    filter: contrast(1.08) brightness(1.08) sepia(0.08);

    &:before {
      position: absolute;
    }

    &:after {
      background: rgb(58, 3, 57);
      mix-blend-mode: exclusion;
      opacity: .5;
    }
  }

  .md-card-header + .md-card-header {
    padding-top: 0;
  }

  .profile-card-icon {
    color: rgba(#000, .7);

    .md-icon {
      $size: 21px;

      width: $size;
      min-width: $size;
      height: $size;
      min-height: $size;
      font-size: $size;
      line-height: $size;
    }

    a {
      margin-left: 4px;
      vertical-align: middle;
    }
  }
</style>

<script lang="babel">
  export default {
    name: 'profile-card',
    data () {
      return {
        backgroundImage: this.getRandomInt(1, 2)
      }
    },
    methods: {
      getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
    }
  }
</script>
