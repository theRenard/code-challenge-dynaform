
import { fieldToInputMap } from "~/utils/index";

type ValueOf<T> = T[keyof T];
export enum GenderEnum {
  M = 'M',
  F = 'F',
}

export type InputFieldSchema = {
  label: string,
  name: string,
  type: ValueOf<typeof fieldToInputMap>,
  value?: string | string[],
};

export type FormFieldType = 'String' | 'Number' | 'Date' | string;

export interface FormFieldSchema {
  name: string;
  type: FormFieldType;
}

export interface FormSchema {
  name: string;
  fields: FormFieldSchema[];
}

