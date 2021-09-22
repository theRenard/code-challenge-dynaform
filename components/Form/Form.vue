<template>
  <el-form ref="formEl" :model="form" label-width="120px">
    <Form-Input
      v-for="schema of inputSchemas"
      :key="schema.name"
      :schema="schema"
      @input="inputHandler" />
    <el-form-item size="large">
      <el-button type="primary" @click="submitForm">Send</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">

import { Component, Vue, Ref } from 'nuxt-property-decorator'
import { RootState } from '~/store'
import { fieldSchemaToInputSchema } from '~/utils';

type FormData = {[key: string]: any}
type VForm = Vue & {
  validate: (callback: Function) => boolean;
  resetValidation: () => boolean;
  reset: () => void;
};

@Component
export default class Form extends Vue {

    form: FormData = {};

    @Ref("formEl") readonly formEl!: VForm;

    get fields() {
        return (this.$store.state as RootState).formSchema.fields;
    }

    get inputSchemas() {
      return this.fields.map(schema => fieldSchemaToInputSchema(schema));
    }

    inputHandler({ name, value }: { name: string, value: any }) {
      if (value) Vue.set(this.form, name, value)
      else Vue.delete(this.form, name);
    }

    submitForm() {
      const callback = (valid: boolean) => {
        if (valid) {
          alert(JSON.stringify(this.form, null, 2));
          return true;
        } else {
          return false;
        }
      }
      this.formEl.validate(callback);
    }

}

</script>