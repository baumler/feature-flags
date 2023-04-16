<script setup lang="ts">
import MyLogo from './components/MyLogo.vue';
import FlaggedFeature from './components/FlaggedFeature.vue';
</script>

<template>
  <div class="app">
    <div class="app-banner-empty">
      Banner flag is set to "true" so it is hidden
    </div>

    <FlaggedFeature flag="test-banner">
      <div class="app-banner">
        BANNER -- Flag is set to "false" so you see me!
      </div>
    </FlaggedFeature>

    <div class="app-content">
      <div class="centered">
        <h1>React Feature Flag</h1>

        <div class="logos">
          <MyLogo />
          <MyLogo />
        </div>
      </div>

      <hr/>

      <div class="center-left">
        <p>To toggle the feature flag:</p>

        <ul>
          <li>Open <code>src/features.json</code></li>
          <li>Change <code>active</code></li>
        </ul>
      </div>
    </div>

    <footer>&copy; {{ new Date().getFullYear() }} Tyler Baumler</footer>
  </div>
</template>
