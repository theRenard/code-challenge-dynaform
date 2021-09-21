import { FormFieldSchema, InputFieldSchema } from "~/types";

export const fieldToInputMap = {
  'String': 'el-input',
  'Number': 'el-input-number',
  'Date': 'el-date-picker',
  'Enum': 'el-select',
} as const;

/**
 * Ok this need explanation, we process the xxxxEnum field and
 * tranform the enum values into an array.
 * @export
 * @param {FormFieldSchema['type']} type
 * @return {*}  {InputFieldSchema['value']}
 */
export function getValueFromEnum(type: FormFieldSchema['type']): InputFieldSchema['value'] {
  const regExp = /\(([^)]+)\)/;
  const values = (type.replace(/['"]+/g, '').match(regExp) as RegExpMatchArray)[1].split(',');
  return values;
};

/**
 * tranform snake case to regular field label
 * @export
 * @param {FormFieldSchema['name']} name
 * @return {*}  {InputFieldSchema['name']}
 */
export function snakeToTitle(name: FormFieldSchema['name']): InputFieldSchema['name'] {
  return name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ').toLowerCase();
};

export function fieldToInput(type: FormFieldSchema['type']) {
  if (type === 'Enum' || type.includes('Enum')) return fieldToInputMap.Enum;
  if (type === 'String' || type === 'Number' || type === 'Date') {
    return fieldToInputMap[type];
  }
  return fieldToInputMap.String;
}

export function fieldSchemaToInputSchema(fieldSchema: FormFieldSchema): InputFieldSchema {

  const label = snakeToTitle(fieldSchema.name);
  const type = fieldToInput(fieldSchema.type);

  const inputFieldSchema: InputFieldSchema = {
    label,
    name: fieldSchema.name,
    type,
  }

  if (type === fieldToInputMap.Enum) {
    inputFieldSchema.value = getValueFromEnum(fieldSchema.type);
  }

  return inputFieldSchema;
}