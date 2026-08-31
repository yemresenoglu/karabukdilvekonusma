<script setup>
</script>

<template>
  <section id="ust" class="hero">
    <div class="hero__media" aria-hidden="true">
      <img
        src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2000&q=80"
        alt=""
      />
      <div class="hero__veil"></div>
    </div>

    <div class="container hero__content">
      <p class="hero__brand">
        <span>Özel Sağlık Hizmet Birimi</span>
        <span>Dil ve Konuşma Terapisti İlknur Coşkun Karaveli</span>
      </p>
      <h1>İletişim dünyaya açılan bir köprüdür.</h1>
      <p class="hero__lead">
        Çocuklar ve yetişkinler için sıcak, bilimsel ve bireysel dil ve konuşma terapisi.
      </p>
      <div class="hero__actions">
        <a class="btn btn-primary" href="#iletisim">Randevu talep et</a>
        <a class="btn btn-ghost" href="#calisma-alanlarim">Çalışma alanlarımı incele</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: grid;
  align-items: end;
  overflow: hidden;
  color: #f7fbfa;
}

.hero__media {
  position: absolute;
  inset: 0;
}

.hero__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transform: scale(1.04);
  animation: hero-pan 18s var(--ease-out) forwards;
}

.hero__veil {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(15, 40, 38, 0.18) 0%, rgba(15, 40, 38, 0.42) 42%, rgba(15, 40, 38, 0.78) 100%),
    linear-gradient(90deg, rgba(15, 40, 38, 0.45) 0%, transparent 55%);
}

.hero__content {
  position: relative;
  z-index: 1;
  padding-block: clamp(6rem, 14vw, 9rem) clamp(3.5rem, 8vw, 5.5rem);
  max-width: 820px;
  margin-inline: 0 auto 0;
  animation: hero-rise 1.1s var(--ease-out) both;
}

.hero__brand {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 2.4vw, 1.55rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin-bottom: 1rem;
  max-width: 36ch;
  color: #e8f3f1;
}

.hero__brand span {
  display: block;
}

.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5.8vw, 4rem);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.03em;
  max-width: 14ch;
}

.hero__lead {
  margin-top: 1.35rem;
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  font-weight: 300;
  line-height: 1.65;
  max-width: 34ch;
  color: rgba(247, 251, 250, 0.88);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
}

.hero .btn-ghost {
  background: rgba(255, 255, 255, 0.12);
  color: #f7fbfa;
  border-color: rgba(255, 255, 255, 0.28);
}

.hero .btn-ghost:hover {
  background: rgba(255, 255, 255, 0.2);
}

@keyframes hero-rise {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-pan {
  from {
    transform: scale(1.08);
  }
  to {
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__media img,
  .hero__content {
    animation: none;
  }
}

@media (max-width: 640px) {
  .hero__content {
    width: min(1120px, calc(100% - 2.5rem));
  }
}
</style>
