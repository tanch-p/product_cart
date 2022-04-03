export const state = () => ({
  option: { text: 'Singapore | English', locale: 'sg', language: 'en' },
})

export const mutations = {
  changeLocale(state,option) {
    state.option = option
  },
}
