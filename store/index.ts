import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { FormSchema } from '~/types';

export const state = () => ({
  formSchema: {
    name: '',
    fields: [],
   } as FormSchema,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  name: state => state.formSchema.name,
  fields: state => state.formSchema.fields,
}

export const mutations: MutationTree<RootState> = {
  CHANGE_NAME: (state, formSchema: FormSchema) => (state.formSchema = formSchema),
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchSchema({ commit }) {
    const formSchema = await this.$axios.$get<FormSchema>('/api/schema');
    commit('CHANGE_NAME', formSchema);
  },
}