<template>
  <div class="dynaform">
    <Form-Container />
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class IndexPage extends Vue {
  mounted(): void {
    this.$store.dispatch('fetchSchema');
  }
}
</script>
