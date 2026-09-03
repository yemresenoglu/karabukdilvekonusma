<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import giris from '../assets/klinik/giris.jpg'
import tabela from '../assets/klinik/tabela.jpg'
import koridor from '../assets/klinik/koridor.jpg'
import duvarDekor from '../assets/klinik/duvar-dekor.jpg'
import uygulamaOdasi from '../assets/klinik/uygulama-odasi.jpg'
import terapiOdasi from '../assets/klinik/terapi-odasi.jpg'
import manzara from '../assets/klinik/manzara.jpg'

const photos = [
  {
    src: giris,
    alt: 'Klinik giriş ve bekleme alanı',
    caption: 'Giriş ve bekleme alanı',
  },
  {
    src: tabela,
    alt: 'Dil ve Konuşma Terapisti İlknur Coşkun Karaveli tabelası',
    caption: 'Klinik tabelası',
  },
  {
    src: koridor,
    alt: 'Klinik koridoru',
    caption: 'Koridor',
  },
  {
    src: duvarDekor,
    alt: 'İletişim dünyaya açılan bir köprüdür duvar dekoru',
    caption: 'Bekleme alanı dekoru',
  },
  {
    src: uygulamaOdasi,
    alt: 'Uygulama odası girişi',
    caption: 'Uygulama odası',
  },
  {
    src: terapiOdasi,
    alt: 'Çocuklar için terapi odası',
    caption: 'Terapi odası',
  },
  {
    src: manzara,
    alt: 'Klinikten Karabük manzarası',
    caption: 'Manzara',
  },
]

const activeIndex = ref(null)

function openPhoto(index) {
  activeIndex.value = index
  document.body.style.overflow = 'hidden'
}

function closePhoto() {
  activeIndex.value = null
  document.body.style.overflow = ''
}

function onKeydown(event) {
  if (event.key === 'Escape') closePhoto()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="klinik" class="section clinic">
    <div class="container">
      <div class="clinic__intro reveal">
        <span class="section-label">Kliniğimiz</span>
        <h2 class="section-title">Sıcak ve güvenli bir ortam</h2>
        <p class="section-lead">
          Karabük’teki kliniğimizde çocuk ve yetişkinler için konforlu, düzenli ve
          terapiye uygun bir alan sunuyoruz.
        </p>
      </div>

      <ul class="clinic__grid">
        <li
          v-for="(photo, index) in photos"
          :key="photo.caption"
          class="clinic__item reveal"
          :style="{ transitionDelay: `${(index % 3) * 70}ms` }"
        >
          <button type="button" class="clinic__trigger" @click="openPhoto(index)">
            <img :src="photo.src" :alt="photo.alt" loading="lazy" />
            <span class="clinic__caption">{{ photo.caption }}</span>
          </button>
        </li>
      </ul>
    </div>

    <div
      v-if="activeIndex !== null"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="photos[activeIndex].caption"
      @click.self="closePhoto"
    >
      <button type="button" class="lightbox__close" aria-label="Kapat" @click="closePhoto">
        Kapat
      </button>
      <img :src="photos[activeIndex].src" :alt="photos[activeIndex].alt" />
      <p class="lightbox__caption">
        <strong>{{ photos[activeIndex].caption }}</strong>
      </p>
    </div>
  </section>
</template>

<style scoped>
.clinic {
  background:
    linear-gradient(180deg, transparent, rgba(228, 238, 235, 0.55) 10%, rgba(228, 238, 235, 0.55) 90%, transparent);
}

.clinic__intro {
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
}

.clinic__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.25rem, 3vw, 2rem);
}

.clinic__trigger {
  display: grid;
  gap: 0.75rem;
  width: 100%;
  text-align: left;
  color: inherit;
}

.clinic__trigger img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: center;
  border-radius: 1rem;
  box-shadow: var(--shadow-soft);
  transition: transform 0.45s var(--ease-out), box-shadow 0.45s var(--ease-out);
}

.clinic__trigger:hover img {
  transform: translateY(-4px);
  box-shadow: 0 28px 60px rgba(26, 46, 44, 0.14);
}

.clinic__caption {
  font-size: 0.9rem;
  color: var(--color-muted);
  line-height: 1.45;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(15, 40, 38, 0.88);
  backdrop-filter: blur(8px);
}

.lightbox img {
  width: min(100%, 960px);
  max-height: min(82vh, 960px);
  object-fit: contain;
  border-radius: 0.75rem;
  background: #fff;
}

.lightbox__close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  min-height: 2.5rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: #f7fbfa;
  font-weight: 500;
}

.lightbox__caption {
  text-align: center;
  color: #e8f3f1;
  max-width: 40ch;
}

.lightbox__caption strong {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
}

@media (max-width: 960px) {
  .clinic__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .clinic__grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .clinic__trigger:hover img {
    transform: none;
  }
}
</style>
