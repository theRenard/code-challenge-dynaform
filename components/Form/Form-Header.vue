<template>
  <div class="form-header">
    <div class="form-header__container">
      <div class="form-header__container-left">
        <span>{{ $store.getters.name }} Form</span>
      </div>
      <div class="form-header__container-right">
        <!-- <Form-Gear /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .form-header {
      padding: 1rem 1.25rem 0.5rem;
      width: 100%;
      color: rgb(86, 90, 105);
      &__container {
        @include center;
      }
      &__container-left {
        span {
          box-sizing: border-box;
          margin: 0;
          min-width: 0;
          font-weight: 500;
          font-size: 16px;
          color: rgb(0, 0, 0);
        }
      }
  }
</style>