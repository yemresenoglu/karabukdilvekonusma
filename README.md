# Özel Sağlık Hizmet Birimi
# Dil ve Konuşma Terapisti İlknur Coşkun Karaveli

Vue 3 (JavaScript) ile hazırlanmış modern, tek sayfalık (SPA) web sitesi.

## Başlatma

```bash
npm install
npm run dev
```

## Komutlar

- `npm run dev` — geliştirme sunucusu
- `npm run build` — üretim derlemesi
- `npm run preview` — derlenen siteyi önizleme

## Yapı

- `src/App.vue` — site iskeleti (header, footer, router)
- `src/views/` — ana sayfa ve blog sayfaları
- `src/components/` — header, hero, hakkımda, çalışma alanlarım, yaklaşım, iletişim, footer
- `src/data/blogPosts.js` — blog yazıları
- `src/styles/main.css` — global stil ve tasarım değişkenleri

## Blog yazısı eklemek

`src/data/blogPosts.js` dosyasına yeni bir nesne ekleyin:

- `slug` — URL parçası (ör. `cocugum-konusmuyor-ne-zaman-destek-almaliyim`)
- `title` — sayfa başlığı (H1)
- `seoTitle` — tarayıcı sekmesi / Google başlığı (opsiyonel)
- `metaDescription` — arama sonuçları açıklaması (opsiyonel)
- `date` — `YYYY-MM-DD` formatında tarih
- `excerpt` — liste sayfasında görünen özet
- `content` — yazı gövdesi (`##` başlık, `-` madde listesi, `[metin](/url)` link desteklenir)

Yeni yazı ekledikten sonra `public/sitemap.xml` dosyasına ilgili URL'yi de ekleyin.
