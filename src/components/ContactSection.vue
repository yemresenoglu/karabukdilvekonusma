<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  message: '',
})

const submitted = ref(false)

function onSubmit() {
  submitted.value = true
}
</script>

<template>
  <section id="iletisim" class="section contact">
    <div class="container contact__inner">
      <div class="contact__copy reveal">
        <span class="section-label">İletişim</span>
        <h2 class="section-title">Birlikte başlamak için yazın.</h2>
        <p class="section-lead">
          Randevu veya ön bilgilendirme için formu doldurun. En kısa sürede dönüş yapılır.
        </p>
      </div>

      <form class="contact__form" @submit.prevent="onSubmit">
        <div v-if="submitted" class="contact__success" role="status">
          Teşekkürler. Talebiniz alındı — bu bir demo formudur.
        </div>

        <template v-else>
          <label>
            Ad Soyad
            <input v-model="form.name" type="text" name="name" required autocomplete="name" />
          </label>

          <label>
            Telefon
            <input v-model="form.phone" type="tel" name="phone" required autocomplete="tel" />
          </label>

          <label>
            Mesajınız
            <textarea
              v-model="form.message"
              name="message"
              rows="4"
              placeholder="Kısaca ihtiyacınızı yazabilirsiniz."
            ></textarea>
          </label>

          <button class="btn btn-primary" type="submit">Gönder</button>
        </template>
      </form>

      <ul class="contact__meta reveal">
        <li>
          <span>Konum</span>
          <strong>Yenişehir, Ömer Lütfi Özaytaç Caddesi No:5 Kat:2 Daire:202, 78000 Merkez/Karabük</strong>
        </li>
        <li>
          <span>Telefon</span>
          <strong>
            <a href="tel:+905013378878">0501 337 88 78</a>
          </strong>
        </li>
        <li>
          <span>E-posta</span>
          <strong>
            <a href="mailto:karabukdilvekonusma@gmail.com">karabukdilvekonusma@gmail.com</a>
          </strong>
        </li>
      </ul>

      <div class="contact__channels reveal">
        <a
          class="contact__channel"
          href="https://wa.me/905013378878"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12.04 2c-5.46 0-9.91 4.43-9.91 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.9-4.44 9.9-9.9C21.94 6.43 17.5 2 12.04 2Zm5.83 14.12c-.24.68-1.4 1.26-1.93 1.34-.49.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.61-2.89-1.25-4.77-4.16-4.92-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.29.38-.42.51-.14.14-.28.29-.12.56.16.28.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.19 1.36.28.14.44.12.6-.07.16-.19.7-.82.89-1.1.19-.28.37-.24.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.7-.17 1.38Z"
            />
          </svg>
          WhatsApp
        </a>
        <a
          class="contact__channel"
          href="https://www.instagram.com/karabuk.dilvekonusmaterapisti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M8.5 3h7A5.5 5.5 0 0 1 21 8.5v7A5.5 5.5 0 0 1 15.5 21h-7A5.5 5.5 0 0 1 3 15.5v-7A5.5 5.5 0 0 1 8.5 3Zm0 1.7A3.8 3.8 0 0 0 4.7 8.5v7a3.8 3.8 0 0 0 3.8 3.8h7a3.8 3.8 0 0 0 3.8-3.8v-7a3.8 3.8 0 0 0-3.8-3.8h-7Zm8.35 1.55a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.7A2.1 2.1 0 1 0 14.1 12 2.1 2.1 0 0 0 12 9.9Z"
            />
          </svg>
          Instagram
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.contact__copy {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact__copy .section-title,
.contact__copy .section-lead {
  max-width: 28ch;
  margin-inline: auto;
}

.contact__copy .section-lead {
  text-align: center;
}

.contact__form {
  width: min(100%, 32rem);
  margin-top: 2.5rem;
  background: #fff;
  border: 1px solid var(--color-line);
  border-radius: calc(var(--radius) + 0.25rem);
  padding: clamp(1.5rem, 4vw, 2.25rem);
  display: grid;
  gap: 1.1rem;
  box-shadow: var(--shadow-soft);
  text-align: left;
}

.contact__form label {
  display: grid;
  gap: 0.45rem;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--color-ink-soft);
}

.contact__form input,
.contact__form textarea {
  width: 100%;
  border: 1px solid rgba(31, 92, 87, 0.18);
  border-radius: 0.85rem;
  background: #fff;
  padding: 0.85rem 1rem;
  color: var(--color-ink);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact__form input:focus,
.contact__form textarea:focus {
  border-color: var(--color-brand);
  box-shadow: 0 0 0 4px rgba(31, 92, 87, 0.12);
}

.contact__form textarea {
  resize: vertical;
  min-height: 7rem;
}

.contact__form .btn {
  justify-self: center;
  margin-top: 0.35rem;
}

.contact__success {
  padding: 1.5rem 0.25rem;
  font-family: var(--font-display);
  font-size: 1.35rem;
  line-height: 1.4;
  color: var(--color-brand-deep);
  text-align: center;
}

.contact__meta {
  margin-top: 2.75rem;
  display: grid;
  gap: 1.35rem;
  width: min(100%, 36rem);
}

.contact__meta li {
  display: grid;
  gap: 0.35rem;
}

.contact__meta span {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-brand-soft);
}

.contact__meta strong,
.contact__meta a {
  font-weight: 500;
  color: var(--color-ink);
  line-height: 1.55;
}

.contact__meta a:hover {
  color: var(--color-brand);
}

.contact__channels {
  margin-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  width: min(100%, 36rem);
}

.contact__channel {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 3rem;
  min-width: 10.5rem;
  padding: 0.7rem 1.25rem;
  border-radius: 999px;
  border: 1px solid rgba(31, 92, 87, 0.18);
  background: #fff;
  color: var(--color-brand-deep);
  font-weight: 500;
  font-size: 0.95rem;
  transition: transform 0.35s var(--ease-out), background 0.25s ease, border-color 0.25s ease,
    box-shadow 0.35s var(--ease-out);
}

.contact__channel svg {
  width: 1.2rem;
  height: 1.2rem;
  flex-shrink: 0;
}

.contact__channel:hover {
  transform: translateY(-2px);
  background: var(--color-brand);
  border-color: var(--color-brand);
  color: #f7fbfa;
  box-shadow: 0 12px 28px rgba(31, 92, 87, 0.2);
}

@media (prefers-reduced-motion: reduce) {
  .contact__channel:hover {
    transform: none;
  }
}
</style>
