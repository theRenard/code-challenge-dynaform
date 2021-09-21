<template>
  <div class="form-body">
    <div class="form-body__grid">
      <Form />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .form-body {
    padding: 1rem 1.25rem 0.5rem;
    width: 100%;
    color: #565a69;
    &__grid {
      display: grid;
      grid-auto-rows: auto;
      row-gap: 12px;
    }
  }
</style>