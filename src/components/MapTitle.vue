<template>
  <div>
    <h2 class="text-white text-bold text-center q-mb-sm">
      {{ offsetFormatted }}
    </h2>
    <section class="text-accent text-bold text-center">
      <span>( UTC {{ utcFormatted }} )</span>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { formatTimezoneOffset } from "~/utils/formatTimezoneOffset";
import { formatterOffset } from "~/utils/formatterOffset";

const props = defineProps<{ ofsetTimezone: number }>();

const utcFormatted = computed(() => formatterOffset(props.ofsetTimezone));

const offsetFormatted = computed(() =>
  formatTimezoneOffset(props.ofsetTimezone)
);
</script>

<script lang="ts">
export default {};
</script>
