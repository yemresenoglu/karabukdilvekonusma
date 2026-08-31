<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import kongre from '../assets/sertifikalar/kongre-2020.png'
import floortime101 from '../assets/sertifikalar/floortime-101.png'
import todil from '../assets/sertifikalar/todil.png'
import dirBasic from '../assets/sertifikalar/dirfloortime-basic.png'
import denver from '../assets/sertifikalar/denver-ii.png'
import etecom from '../assets/sertifikalar/etecom.png'
import gobdo from '../assets/sertifikalar/gobdo-2-tv.png'
import ses from '../assets/sertifikalar/ses-sempozyumu.png'
import demOku from '../assets/sertifikalar/dem-oku.png'
import sobat from '../assets/sertifikalar/sobat-ii.png'

const certificates = [
  {
    src: dirBasic,
    title: 'DIRFloortime® Basic Certificate',
    detail: 'ICDL · DIR 201 · 2022',
  },
  {
    src: floortime101,
    title: 'DIR® Floortime™ (101) Başlangıç Eğitimi',
    detail: 'Floortime İstanbul · Hacettepe iş birliği · 2019',
  },
  {
    src: todil,
    title: 'TODİL Uygulayıcı Eğitimi',
    detail: 'Türkçe Okul Çağı Dil Gelişimi Testi · 2022',
  },
  {
    src: denver,
    title: 'Denver II Yeterlilik Belgesi',
    detail: 'Gelişimsel Tarama Testi · 2020',
  },
  {
    src: demOku,
    title: 'DEM-OKU Uygulamacı Sertifikası',
    detail: 'Disleksi Eğitim Müdahaleleri · 2021',
  },
  {
    src: sobat,
    title: 'SOBAT-II Uygulamacı Sertifikası',
    detail: 'Sesli Okuma ve Okuduğunu Anlama Testi · 2021',
  },
  {
    src: etecom,
    title: 'ETEÇOM Uygulamacı Sertifikası',
    detail: 'Etkileşim Temelli Erken Çocuklukta Müdahale · 2019',
  },
  {
    src: gobdo,
    title: 'GOBDÖ-2-TV Kullanım Sertifikası',
    detail: 'Otistik Bozukluk Derecelendirme Ölçeği · 2019',
  },
  {
    src: kongre,
    title: 'Dil ve Konuşma Terapisi Öğrenci Kongresi',
    detail: 'II. Uluslararası Katılımlı Kongre · 2020',
  },
  {
    src: ses,
    title: 'Ses Hastalıklarında Tanı ve Tedavi Sempozyumu',
    detail: 'Profesyonel Ses Derneği · 2018',
  },
]

const activeIndex = ref(null)

function openCert(index) {
  activeIndex.value = index
  document.body.style.overflow = 'hidden'
}

function closeCert() {
  activeIndex.value = null
  document.body.style.overflow = ''
}

function onKeydown(event) {
  if (event.key === 'Escape') closeCert()
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
  <section id="sertifikalarim" class="section certificates">
    <div class="container">
      <div class="certificates__intro reveal">
        <span class="section-label">Sertifikalarım</span>
        <h2 class="section-title">Eğitim ve yeterlilik belgelerim</h2>
        <p class="section-lead">
        </p>
      </div>

      <ul class="certificates__grid">
        <li
          v-for="(cert, index) in certificates"
          :key="cert.title"
          class="certificates__item reveal"
          :style="{ transitionDelay: `${(index % 3) * 70}ms` }"
        >
          <button type="button" class="certificates__trigger" @click="openCert(index)">
            <img :src="cert.src" :alt="cert.title" loading="lazy" />
            <span class="certificates__caption">
              <strong>{{ cert.title }}</strong>
              <span>{{ cert.detail }}</span>
            </span>
          </button>
        </li>
      </ul>
    </div>

    <div
      v-if="activeIndex !== null"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="certificates[activeIndex].title"
      @click.self="closeCert"
    >
      <button type="button" class="lightbox__close" aria-label="Kapat" @click="closeCert">
        Kapat
      </button>
      <img
        :src="certificates[activeIndex].src"
        :alt="certificates[activeIndex].title"
      />
      <p class="lightbox__caption">
        <strong>{{ certificates[activeIndex].title }}</strong>
        <span>{{ certificates[activeIndex].detail }}</span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.certificates {
  background:
    linear-gradient(180deg, transparent, rgba(228, 238, 235, 0.55) 10%, rgba(228, 238, 235, 0.55) 90%, transparent);
}

.certificates__intro {
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
}

.certificates__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.25rem, 3vw, 2rem);
}

.certificates__trigger {
  display: grid;
  gap: 0.9rem;
  width: 100%;
  text-align: left;
  color: inherit;
}

.certificates__trigger img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center;
  border-radius: 1rem;
  box-shadow: var(--shadow-soft);
  transition: transform 0.45s var(--ease-out), box-shadow 0.45s var(--ease-out);
}

.certificates__trigger:hover img {
  transform: translateY(-4px);
  box-shadow: 0 28px 60px rgba(26, 46, 44, 0.14);
}

.certificates__caption {
  display: grid;
  gap: 0.3rem;
}

.certificates__caption strong {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.certificates__caption span {
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
  width: min(100%, 720px);
  max-height: min(78vh, 900px);
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
  display: grid;
  gap: 0.25rem;
  text-align: center;
  color: #e8f3f1;
  max-width: 40ch;
}

.lightbox__caption strong {
  font-family: var(--font-display);
  font-size: 1.15rem;
}

.lightbox__caption span {
  font-size: 0.92rem;
  color: rgba(232, 243, 241, 0.75);
}

@media (max-width: 960px) {
  .certificates__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .certificates__grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .certificates__trigger:hover img {
    transform: none;
  }
}
</style>
