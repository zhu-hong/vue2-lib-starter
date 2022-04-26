<script>
export default {
  name: 'Go',
  data() {
    return {
      go: true
    }
  },
}
</script>

<template>
  <el-button :type="go ? 'primary' : 'danger'" @click="go = !go" size="small" icon="el-icon-magic-stick">GO</el-button>
</template>

<style lang="scss">
.el-button {
  &--small {
    font-size: 14px;
  }
}
</style>
