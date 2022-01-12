<template>
  <PageContainer page-title="Welcome to YardSearch!">
    <article class="p-2 pb-0 m-auto">
      <p>
        Created at the beginning of 2022, YardSearch aggregates data from
        various automotive junkyards, giving you the ability to <strong><a
          href="search.html"
        >search for vehicles</a></strong> and <strong><a
          href="stats.html"
        >see recent statistics</a></strong> from multiple yards at once, all
        for free!
      </p>
      <p>
        <strong>Four</strong> junkyards in Utah are currently supported, and we
        plan to expand to other areas and yards in the near future.
      </p>
    </article>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/PageContainer.vue'

export default {
  name: 'App',
  components: {
    PageContainer
  }
}
</script>

<style scoped>
article {
  max-width: 50rem;
}
</style>
