const defaultDescription =
  "Özel Sağlık Hizmet Birimi — Dil ve Konuşma Terapisti İlknur Coşkun Karaveli. Karabük'te çocuk ve yetişkinler için bireysel dil ve konuşma terapisi."

export function setPageMeta({ title, description } = {}) {
  if (title) {
    document.title = title
  }

  const meta = document.querySelector('meta[name="description"]')
  if (meta && description) {
    meta.content = description
  }
}

export function resetPageMeta() {
  document.title =
    'Özel Sağlık Hizmet Birimi | Dil ve Konuşma Terapisti İlknur Coşkun Karaveli'

  const meta = document.querySelector('meta[name="description"]')
  if (meta) {
    meta.content = defaultDescription
  }
}
