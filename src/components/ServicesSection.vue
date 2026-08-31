<script setup>
const services = [
  {
    title: 'Konuşma Sesi Bozukluğu',
    text: 'Seslerin doğru ve anlaşılır şekilde üretilmesine yönelik çalışmalar yapılır.',
  },
  {
    title: 'Gelişimsel Dil Bozukluğu(Gecikmiş Konuşma)',
    text: 'Çocuğun yaşına uygun anlama, ifade edebilme ve iletişim becerilerini güçlendirmeye yönelik çalışmalar yapılır.',
  },
  {
    title: 'Akıcı Konuşma Bozukluğu',
    text: 'Konuşma akıcılığı sağlamak için çocuk ve yetişkinlerin gerekli becerilerini geliştirmeye yönelik çalışmalar yapılır.',
  },
  {
    title: 'Ses Bozukluğu',
    text: 'Sesin doğru, sağlıklı ve etkili kullanılmasına yönelik çalışmalar yapılır.',
  },
  {
    title: 'Motor Konuşma Bozukluğu',
    text: 'Konuşma için gerekli olan motor becerilerini geliştirme ve konuşma akıcılığı sağlamak için çalışmalar yapılır.',
  },
  {
    title: 'Edinilmiş Dil Bozukluğu(Afazi)',
    text: 'İnme, beyin hasarı, norolojik hasarlar ve başka nedenlerden dolayı ortaya çıkan dil ve iletişim bozukluğu sonrasında gelişen bir dil bozukluğuna yönelik çalışmalar yapılır.',
  },
  {
    title: 'Otizm Spekturum Bozukluğunda İletişim Desteği',
    text: 'Ortak dikkat, jest mimik kullanımı, sosyal iletişim ve işlevsel dil becerilerine yönelik çalışmalar yapılır.',
  },
  {
    title: 'Okuma Yazma Güçlükleri',
    text: 'Ses farkındalığı, okuma, yazma ve dil temelli akademik becerilerin geliştirilmesine yönelik çalışmalar yapılır.',
  },
]
</script>

<template>
  <section id="calisma-alanlarim" class="section services">
    <div class="container">
      <div class="services__intro reveal">
        <span class="section-label">Çalışma Alanlarım</span>
        <h2 class="section-title">İhtiyaca özel terapi alanları</h2>
        <p class="section-lead">
          Her başvuru aynı değildir. Önce dinler, değerlendirir; sonra birlikte net bir yol haritası çıkarırız.
        </p>
      </div>

      <ul class="services__list">
        <li
          v-for="(service, index) in services"
          :key="service.title"
          class="services__item reveal"
          :style="{ transitionDelay: `${index * 60}ms` }"
        >
          <span class="services__index">{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.services {
  background:
    linear-gradient(180deg, transparent, rgba(228, 238, 235, 0.7) 12%, rgba(228, 238, 235, 0.7) 88%, transparent);
}

.services__intro {
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
}

.services__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid var(--color-line);
}

.services__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.25rem;
  padding: 1.75rem 1.25rem 1.75rem 0;
  border-bottom: 1px solid var(--color-line);
}

.services__item:nth-child(odd) {
  padding-right: 2rem;
  border-right: 1px solid var(--color-line);
}

.services__item:nth-child(even) {
  padding-left: 2rem;
}

.services__index {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--color-brand-soft);
  padding-top: 0.2rem;
}

.services__item h3 {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 0.55rem;
}

.services__item p {
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 38ch;
}

@media (max-width: 800px) {
  .services__list {
    grid-template-columns: 1fr;
  }

  .services__item:nth-child(odd),
  .services__item:nth-child(even) {
    padding-inline: 0;
    border-right: none;
  }
}
</style>
