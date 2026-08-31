<script setup>
import portrait from '../assets/ilknur-coskun-karaveli.png'
</script>

<template>
  <section id="hakkimda" class="section about">
    <div class="container about__grid">
      <div class="about__copy reveal">
        <span class="section-label">Hakkımda</span>
        <h2 class="section-title">Güvenli bir ortamda, net bir iletişim yolu.</h2>
        <p class="section-lead">
          Hacettepe Üniversitesi Dil ve Konuşma Terapisi Bölümü’nden 2020 yılında şeref
          öğrencisi olarak mezun oldum. 2025 yılında tezli yüksek lisans eğitimimi tamamladım.
        </p>
        <p class="about__text">
          Karabük’te bireysel değerlendirme ve terapi ile dil, iletişim ve konuşma becerilerini
          güçlendiriyorum. Her seansı kişinin yaşına, ihtiyaçlarına ve günlük yaşamına göre
          planlıyor; aileleri sürece dahil ederek ilerlemeyi birlikte takip ediyor ve evde
          sürdürülebilir pratikler öneriyorum. Amacım yalnızca ses üretmek değil; kişinin
          kendini rahatça ifade edebildiği bir iletişim deneyimi kurmak.
        </p>
      </div>

      <figure class="about__figure reveal">
        <img
          :src="portrait"
          alt="Dil ve Konuşma Terapisti İlknur Coşkun Karaveli"
        />
        <figcaption>
          Dil ve Konuşma Terapisti İlknur Coşkun Karaveli
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(2rem, 6vw, 4.5rem);
  align-items: center;
}

.about__text {
  margin-top: 1.25rem;
  color: var(--color-ink-soft);
  max-width: 46ch;
  line-height: 1.75;
}

.about__figure {
  position: relative;
}

.about__figure img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center top;
  border-radius: calc(var(--radius) + 0.35rem);
  box-shadow: var(--shadow-soft);
}

.about__figure figcaption {
  margin-top: 1rem;
  font-size: 0.95rem;
  color: var(--color-muted);
  max-width: 32ch;
}

@media (max-width: 860px) {
  .about__grid {
    grid-template-columns: 1fr;
  }

  .about__figure img {
    aspect-ratio: 4 / 5;
    max-height: 34rem;
    margin-inline: auto;
  }
}
</style>
