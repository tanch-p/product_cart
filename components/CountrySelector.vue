<template>
  <div class="mt-2 ml-2">
    <div
      class="flex flex-wrap w-64 mb-4 select-none cursor-pointer border border-gray-600 rounded-md md:w-[200px] items-center"
      @click="toggleDropdown"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <div>
        {{ locale.text }}
      </div>
      <div
        class="w-0 h-0 ml-2 border-x-transparent border-x-[6px] border-solid border-t-[10px] border-t-black"
      ></div>
    </div>
    <div v-if="dropdown" class="absolute z-50">
      <CountryDropdown
        v-for="(option, index) in list"
        :key="index"
        :option="option"
        @response="toggleDropdown"
      />
    </div>
  </div>
</template>

<script>
import CountryDropdown from './CountryDropdown.vue'

const list = [
  { text: 'Singapore | English', locale: 'sg', language: 'en' },
  { text: 'Hong Kong | English', locale: 'hk', language: 'en' },
  { text: '香港 | 中文繁體', locale: 'hk', language: 'zh-CHT' },
]

const dropdown = false

export default {
  name: 'CountrySelector',
  components: { CountryDropdown },
  data() {
    return {
      list,
      dropdown,
    }
  },
  computed: {
    locale() {
      return this.$store.state.country.option
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
  },
}
</script>
