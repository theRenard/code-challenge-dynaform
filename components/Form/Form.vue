<template>
  <el-form ref="form" :model="form" label-width="120px">
    <Form-Input
      v-for="schema of inputSchemas"
      :key="schema.name"
      :schema="schema" />
  </el-form>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import { RootState } from '~/store'
import { fieldSchemaToInputSchema } from '~/utils';

@Component
export default class Form extends Vue {

    form = {};

    get fields() {
        return (this.$store.state as RootState).formSchema.fields;
    }

    get inputSchemas() {
      return this.fields.map(schema => fieldSchemaToInputSchema(schema));
    }

}

</script>