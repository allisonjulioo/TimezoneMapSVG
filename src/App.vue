<template>
  <div>
    <map-title :ofsetTimezone="ofsetTimezone" />
    <map-timezone @onOverCountry="HandleonOverCountry" />
  </div>
</template>

<script>
import MapTimezone from "~/components/MapTimezone.vue";
import MapTitle from "~/components/MapTitle.vue";

export default {
  components: {
    MapTimezone,
    MapTitle,
  },

  data() {
    return {
      ofsetTimezone: 0,
    };
  },

  methods: {
    HandleonOverCountry(currentOfsetTimezone) {
      this.ofsetTimezone = +currentOfsetTimezone ?? 0;
    },
  },
};
</script>
