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

<script lang="ts" setup>
import { formatTimezoneOffset } from "~/utils/formatTimezoneOffset";
import { formatterOffset } from "~/utils/formatterOffset";
import { useTimezone } from "~/store/useTimezone";

import { ref, onMounted } from "vue";

const interval = ref();

const utcFormatted = ref("00:00");

const offsetFormatted = ref("Mouse over the zone");

const { $subscribe } = useTimezone();

const staryPullingUpdate = (ofsetTimezone: string) => {
  interval.value = setInterval(() => {
    offsetFormatted.value = formatTimezoneOffset(+ofsetTimezone);
  }, 1000);
};

const unsubscribe = $subscribe((_, { ofsetTimezone }) => {
  clearInterval(interval.value);

  utcFormatted.value = formatterOffset(+ofsetTimezone);

  offsetFormatted.value = formatTimezoneOffset(+ofsetTimezone);

  staryPullingUpdate(ofsetTimezone);
});

onMounted(() => {
  return () => {
    clearInterval(interval.value);
    unsubscribe();
  };
});
</script>

<script lang="ts">
export default {};
</script>
