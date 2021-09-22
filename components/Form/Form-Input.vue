<template>
  <el-form-item :data-cy-name="name" :data-cy-type="component" :label="label" :rules="rules" :prop="name">
    <component
      :is="component"
      v-model="model"
      @change="inputHandler">
      <template v-if="isSelect">
        <el-option
          v-for="option in value"
          :key="option"
          :label="option"
          :value="option" />
      </template>
    </component>
  </el-form-item>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { InputFieldSchema } from '~/types';
import { fieldToInputMap, getRulesForFieldSchema } from "~/utils/index";

@Component
export default class FormInput extends Vue {

  get component() {
    return this.schema.type;
  }

  get isSelect() {
    return this.schema.type === fieldToInputMap.Enum;
  }

  get label() {
    return this.schema.label;
  }

  get name() {
    return this.schema.name;
  }

  get value() {
    return this.schema.value;
  }

  @Prop({
    type: Object as Vue.PropType<InputFieldSchema>,
    required: true
  })
  public schema!: InputFieldSchema;

  model = this.schema.type === fieldToInputMap.Number ? 0 : '';

  rules = getRulesForFieldSchema(this.schema.type);

  inputHandler(value: string) {
    this.$emit('input', { value, name: this.name });
  }

}

</script>