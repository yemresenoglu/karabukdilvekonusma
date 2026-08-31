<script setup>
const steps = [
  {
    title: 'Tanışma ve dinleme',
    text: 'İlk görüşmede şikâyeti, geçmişi ve beklentileri birlikte netleştiririz.',
  },
  {
    title: 'Kapsamlı değerlendirme',
    text: 'Yaşa uygun testler ve gözlemle güçlü yönleri ve ihtiyaç alanlarını belirleriz.',
  },
  {
    title: 'Bireysel terapi planı',
    text: 'Ölçülebilir hedefler, seans sıklığı ve ev pratikleriyle sürdürülebilir bir yol çizeriz.',
  },
]
</script>

<template>
  <section id="yaklasim" class="section approach">
    <div class="container">
      <div class="approach__intro reveal">
        <span class="section-label">Yaklaşım</span>
        <h2 class="section-title">Üç adımda net bir süreç</h2>
        <p class="section-lead">
          Terapi sürecini şeffaf tutarız; her adımda ne yaptığımızı ve neden yaptığımızı paylaşırız.
        </p>
      </div>

      <ol class="approach__steps">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="approach__step reveal"
          :style="{ transitionDelay: `${index * 90}ms` }"
        >
          <span class="approach__num">0{{ index + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.approach__intro {
  margin-bottom: clamp(2.5rem, 5vw, 3.75rem);
}

.approach__steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.5rem, 4vw, 2.75rem);
  counter-reset: none;
}

.approach__step {
  padding-top: 1.5rem;
  border-top: 2px solid var(--color-brand);
}

.approach__num {
  display: block;
  font-family: var(--font-display);
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  color: var(--color-brand-soft);
  margin-bottom: 1.1rem;
}

.approach__step h3 {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.approach__step p {
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 28ch;
}

@media (max-width: 800px) {
  .approach__steps {
    grid-template-columns: 1fr;
  }
}
</style>
