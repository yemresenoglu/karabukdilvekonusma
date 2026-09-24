<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { formatDate, getAllPosts, renderContent } from '../lib/blog.js'

const route = useRoute()
const router = useRouter()
const posts = getAllPosts()
const expandedSlug = ref(null)

function togglePost(slug) {
  const isClosing = expandedSlug.value === slug
  expandedSlug.value = isClosing ? null : slug
  router.replace({ name: 'blog', hash: isClosing ? '' : `#${slug}` })
}

function scrollToCard(slug) {
  nextTick(() => {
    document.getElementById(`blog-${slug}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

onMounted(() => {
  const slugFromHash = route.hash.replace(/^#/, '')
  if (slugFromHash && posts.some((post) => post.slug === slugFromHash)) {
    expandedSlug.value = slugFromHash
    scrollToCard(slugFromHash)
  }
})
</script>

<template>
  <section class="section blog-page">
    <div class="container">
      <header class="blog-page__header reveal is-visible">
        <span class="section-label">Blog</span>
        <h1 class="section-title">Yazılar</h1>
        <p class="section-lead">
          Dil, konuşma ve iletişim gelişimi hakkında bilgilendirici yazılar.
        </p>
      </header>

      <ul v-if="posts.length" class="blog-list">
        <li
          v-for="post in posts"
          :id="`blog-${post.slug}`"
          :key="post.slug"
          class="blog-list__item reveal is-visible"
        >
          <article class="blog-card" :class="{ 'is-expanded': expandedSlug === post.slug }">
            <time class="blog-card__date" :datetime="post.date">{{ formatDate(post.date) }}</time>
            <h2 class="blog-card__title">{{ post.title }}</h2>

            <p v-if="expandedSlug !== post.slug" class="blog-card__excerpt">{{ post.excerpt }}</p>

            <div class="blog-card__expand" :class="{ 'is-open': expandedSlug === post.slug }">
              <div class="blog-card__expand-inner">
                <div class="blog-prose" v-html="renderContent(post.content)"></div>
              </div>
            </div>

            <button
              type="button"
              class="blog-card__toggle"
              :aria-expanded="expandedSlug === post.slug"
              @click="togglePost(post.slug)"
            >
              {{ expandedSlug === post.slug ? 'Daha az göster' : 'Devamını oku' }}
            </button>
          </article>
        </li>
      </ul>

      <p v-else class="blog-empty">Henüz yayınlanmış yazı bulunmuyor.</p>
    </div>
  </section>
</template>
