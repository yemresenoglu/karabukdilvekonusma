<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const scrolled = ref(false)
const menuOpen = ref(false)
const isMobile = ref(false)
const menuDialog = ref(null)
let mobileQuery

const isHome = computed(() => route.name === 'home')
const headerSolid = computed(() => scrolled.value || menuOpen.value || !isHome.value)

const navLinks = [
  { type: 'section', hash: '#hakkimda', label: 'Hakkımda' },
  { type: 'section', hash: '#calisma-alanlarim', label: 'Çalışma Alanlarım' },
  { type: 'section', hash: '#yaklasim', label: 'Yaklaşım' },
  { type: 'section', hash: '#sertifikalarim', label: 'Sertifikalarım' },
  { type: 'section', hash: '#klinik', label: 'Kliniğimiz' },
  { type: 'section', hash: '#iletisim', label: 'İletişim' },
  { type: 'route', to: { name: 'blog' }, label: 'Blog', match: ['blog'] },
]

function sectionTo(hash) {
  return isHome.value ? hash : `/${hash}`
}

function isLinkActive(link) {
  if (link.type === 'route') {
    return link.match.includes(route.name)
  }
  return false
}

function onMobileChange(event) {
  isMobile.value = event.matches
  if (!event.matches) {
    closeMenu()
  }
}

function onScroll() {
  if (!menuOpen.value) {
    scrolled.value = window.scrollY > 24
  }
}

function closeMenu() {
  menuOpen.value = false
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function onDialogClose() {
  menuOpen.value = false
  scrolled.value = window.scrollY > 24
}

watch(menuOpen, async (open) => {
  await nextTick()
  const dialog = menuDialog.value
  if (!dialog) return

  if (open) {
    scrolled.value = true
    if (!dialog.open) {
      dialog.showModal()
    }
  } else if (dialog.open) {
    dialog.close()
  }
})

onMounted(() => {
  mobileQuery = window.matchMedia('(max-width: 860px)')
  isMobile.value = mobileQuery.matches
  mobileQuery.addEventListener('change', onMobileChange)

  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  mobileQuery?.removeEventListener('change', onMobileChange)
  menuDialog.value?.close()
})
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': headerSolid, 'is-open': menuOpen }">
    <div class="container header__inner">
      <RouterLink class="logo" :to="{ name: 'home', hash: '#ust' }" @click="closeMenu">
        <span class="logo__mark" aria-hidden="true"></span>
        <span class="logo__text">
          <span>Özel Sağlık Hizmet Birimi</span>
          <span>Dil ve Konuşma Terapisti İlknur Coşkun Karaveli</span>
        </span>
      </RouterLink>

      <button
        v-if="isMobile"
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="site-nav-mobile"
        :aria-label="menuOpen ? 'Menüyü kapat' : 'Menüyü aç'"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
      </button>

      <nav v-if="!isMobile" id="site-nav" class="nav nav--desktop">
        <template v-for="link in navLinks" :key="link.label">
          <a
            v-if="link.type === 'section'"
            class="nav__link"
            :href="sectionTo(link.hash)"
          >
            {{ link.label }}
          </a>
          <RouterLink
            v-else
            class="nav__link"
            :class="{ 'is-active': isLinkActive(link) }"
            active-class=""
            :to="link.to"
          >
            {{ link.label }}
          </RouterLink>
        </template>
        <a class="nav__cta" :href="sectionTo('#iletisim')">Randevu Al</a>
      </nav>
    </div>
  </header>

  <dialog
    v-if="isMobile"
    id="site-nav-mobile"
    ref="menuDialog"
    class="mobile-nav"
    aria-label="Site menüsü"
    @close="onDialogClose"
  >
    <div class="mobile-nav__bar">
      <p class="mobile-nav__brand">Menü</p>
      <button
        type="button"
        class="mobile-nav__close"
        aria-label="Menüyü kapat"
        @click="closeMenu"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="mobile-nav__links">
      <template v-for="link in navLinks" :key="link.label">
        <a
          v-if="link.type === 'section'"
          :href="sectionTo(link.hash)"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <RouterLink
          v-else
          :class="{ 'is-active': isLinkActive(link) }"
          active-class=""
          :to="link.to"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
      </template>
      <a class="mobile-nav__cta" :href="sectionTo('#iletisim')" @click="closeMenu">Randevu Al</a>
    </div>
  </dialog>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  padding-block: 1.1rem;
  transition: padding 0.35s ease;
}

.header.is-scrolled,
.header.is-open {
  padding-block: 0.7rem;
}

.header.is-scrolled::before,
.header.is-open::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(243, 247, 246, 0.96);
  box-shadow: 0 1px 0 var(--color-line);
  pointer-events: none;
}

.header__inner {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  max-width: min(58vw, 34rem);
}

.logo__text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  font-family: var(--font-display);
  font-size: clamp(0.72rem, 1.5vw, 0.92rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: #f7fbfa;
  transition: color 0.2s ease;
}

.header.is-scrolled .logo__text,
.header.is-open .logo__text {
  color: var(--color-brand-deep);
}

.logo__mark {
  width: 0.85rem;
  height: 0.85rem;
  flex-shrink: 0;
  border-radius: 50%;
  background: #f7fbfa;
  box-shadow: 0 0 0 6px rgba(247, 251, 250, 0.18);
  transition: background 0.2s ease, box-shadow 0.2s ease;
}

.header.is-scrolled .logo__mark,
.header.is-open .logo__mark {
  background: var(--color-brand);
  box-shadow: 0 0 0 6px rgba(31, 92, 87, 0.12);
}

.nav {
  display: flex;
  align-items: center;
  gap: clamp(0.85rem, 1.4vw, 1.75rem);
  flex-shrink: 0;
}

.nav--desktop .nav__link {
  font-size: 0.92rem;
  font-weight: 400;
  color: #f7fbfa;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.nav--desktop .nav__link:hover,
.nav--desktop .nav__link.is-active {
  color: #fff;
}

.header.is-scrolled .nav--desktop .nav__link {
  color: var(--color-ink-soft);
}

.header.is-scrolled .nav--desktop .nav__link:hover,
.header.is-scrolled .nav--desktop .nav__link.is-active {
  color: var(--color-brand);
}

.nav__cta {
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  background: var(--color-brand);
  color: #f7fbfa !important;
  font-weight: 500 !important;
  font-size: 0.92rem;
  white-space: nowrap;
}

.nav__cta:hover {
  background: var(--color-brand-deep);
  color: #fff !important;
}

.menu-toggle {
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  place-items: center;
  gap: 6px;
  flex-direction: column;
}

.menu-toggle span {
  display: block;
  width: 1.35rem;
  height: 2px;
  background: #f7fbfa;
  transition: transform 0.3s var(--ease-out), background 0.2s ease;
}

.header.is-scrolled .menu-toggle span,
.header.is-open .menu-toggle span {
  background: var(--color-ink);
}

.header.is-open .menu-toggle span:first-child {
  transform: translateY(4px) rotate(45deg);
}

.header.is-open .menu-toggle span:last-child {
  transform: translateY(-4px) rotate(-45deg);
}
</style>
