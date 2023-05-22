<template>
  <div>
    <map-title />
    <map-timezone />
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
};
</script>
