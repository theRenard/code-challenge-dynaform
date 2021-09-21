<template>
  <el-form-item :label="label">
    <component
      :is="component"
      v-model="model">
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
import { fieldToInputMap } from "~/utils/index";

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

  get value() {
    return this.schema.value;
  }

  @Prop({
    type: Object as Vue.PropType<InputFieldSchema>,
    required: true
  })
  public schema!: InputFieldSchema;

  model = '';

}

</script>