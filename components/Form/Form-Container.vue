<template>
  <div class="form-container">
    <main>
      <Form-Header />
      <Form-Body />
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .form-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 120px 16px 0;
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;
    z-index: 1;
    main {
      position: relative;
      max-width: 480px;
      width: 100%;
      background: rgb(255, 255, 255);
      box-shadow:
        rgba(0, 0, 0, 0.01) 0 0 1px,
        rgba(0, 0, 0, 0.04) 0 4px 8px,
        rgba(0, 0, 0, 0.04) 0 16px 24px,
        rgba(0, 0, 0, 0.01) 0 24px 32px;
      border-radius: 24px;
      margin-top: 1rem;
    }
  }

</style>