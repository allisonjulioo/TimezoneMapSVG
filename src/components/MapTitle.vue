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

<script>
import { formatTimezoneOffset } from "~/utils/formatTimezoneOffset";
import { formatterOffset } from "~/utils/formatterOffset";
import { useTimezone } from "~/store/useTimezone";

export default {
  data() {
    return {
      unsubscribe: null,
      interval: null,
      unsubscribe: {},
      utcFormatted: "00:00",
      offsetFormatted: "Mouse over the zone",
    };
  },

  methods: {
    staryPullingUpdate(ofsetTimezone) {
      this.interval = setInterval(() => {
        this.offsetFormatted = formatTimezoneOffset(ofsetTimezone);
      }, 1000);
    },
  },

  mounted() {
    const { $state, $subscribe } = useTimezone();

    this.unsubscribe = $subscribe((_, { ofsetTimezone }) => {
      clearInterval(this.interval);

      this.utcFormatted = formatterOffset(ofsetTimezone);

      this.offsetFormatted = formatTimezoneOffset(ofsetTimezone);

      this.staryPullingUpdate(ofsetTimezone);
    });
  },

  beforeUnmount() {
    clearInterval(this.interval);
    this.unsubscribe();
  },
};
</script>
