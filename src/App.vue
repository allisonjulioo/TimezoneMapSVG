<template>
  <div>
    <map-title :ofsetTimezone="ofsetTimezone" />
    <map-timezone @onOverCountry="HandleonOverCountry" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MapTimezone from "~/components/MapTimezone.vue";
import MapTitle from "~/components/MapTitle.vue";
import { Country } from "~/types/country";

const ofsetTimezone = ref<number>();

const HandleonOverCountry = (currentOfsetTimezone: string) => {
  ofsetTimezone.value = +currentOfsetTimezone ?? 0;
};
</script>
