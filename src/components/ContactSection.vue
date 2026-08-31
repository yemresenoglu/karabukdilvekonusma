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
</style>
