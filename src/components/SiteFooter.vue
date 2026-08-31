<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div>
        <p class="footer__brand">
          <span>Özel Sağlık Hizmet Birimi</span>
          <span>Dil ve Konuşma Terapisti İlknur Coşkun Karaveli</span>
        </p>
      </div>
      <p class="footer__copy">© {{ year }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-line);
  padding-block: 2rem;
}

.footer__inner {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.35;
  max-width: 28ch;
  color: var(--color-brand-deep);
}

.footer__copy {
  font-size: 0.9rem;
  color: var(--color-muted);
}
</style>
