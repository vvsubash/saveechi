<template>
  <div>{{ $route.params.user }}</div>
</template>

<script>
export default {
  validate({ params, store }) {
    return params.user === store.state.user
  }
}
</script>
