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

export default {
  props: {
    ofsetTimezone: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  computed: {
    utcFormatted() {
      return formatterOffset(this.ofsetTimezone);
    },

    offsetFormatted() {
      return formatTimezoneOffset(this.ofsetTimezone);
    },
  },
};
</script>
