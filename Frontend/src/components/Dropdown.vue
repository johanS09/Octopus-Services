<template>
  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3 border border-primary">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Sistemas Operativos" },
        { value: "1", text: "Windows" },
        { value: "2", text: "Linux" },
        { value: "3", text: "MacOs" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
};
</script>