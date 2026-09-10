---
title: 'What is FTracker? From an Academic Thesis to a High-Performance Hybrid Application for Students'
description: 'From an Academic Thesis to a High-Performance Hybrid Application for Students'
head:
  meta:
    - name: 'keywords'
      content: 'Nuxt 4, Supabase, CapacitorJS, Finance Tracker, Portfolio, Hybrid App'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'Andi Marsituru Pakke'
    - name: 'og:title'
      content: 'FTracker: Evolution from Thesis to Product'
    - name: 'og:image'
      content: '/images/Stylish Charcoal FTracker Banner.png'
publishedAt: 2026-09-010 09:00:00
toc: true
---

# FTracker: Evolusi Aplikasi Pelacak Keuangan Mahasiswa

![FTracker Banner](/images/Stylish-Charcoal-FTracker-Banner.png)

**FTracker** bukan sekadar aplikasi pencatat keuangan biasa. Proyek ini adalah perjalanan panjang yang dimulai dari sebuah riset akademis (Skripsi) untuk mengatasi masalah *Latte Factor*—pengeluaran kecil tak terencana yang sering membuat saldo mahasiswa terkuras—hingga bertransformasi menjadi aplikasi hybrid berperforma tinggi yang siap digunakan di berbagai platform.

##  The Genesis: Dari Riset Menjadi Solusi

Awalnya, proyek ini dikembangkan sebagai tugas akhir (Skripsi) dengan studi kasus di **Universitas Mulia**. Masalah utamanya sederhana namun nyata: banyak mahasiswa (terutama anak kos) yang kesulitan mengelola uang saku karena minimnya visualisasi arus kas yang intuitif.

**Solusi yang saya tawarkan pada versi awal:**
- **Digitalisasi Pencatatan:** Mengganti buku catatan manual menjadi sistem digital.
- **Dynamic Trend Color Indicator:** Fitur unggulan yang memberikan sinyal visual **Hijau (Optimal)** atau **Merah (Perlu Evaluasi)** berdasarkan tren keuangan real-time.
- **Security First:** Implementasi *Row Level Security (RLS)* di tingkat database untuk menjamin privasi data antar pengguna.

##  The Evolution: Nuxt Finance Move-Forward

Setelah menyelesaikan tahap akademis, saya tidak berhenti. Saya merasa aplikasi ini bisa mencapai potensi maksimal jika dikembangkan dengan standar industri. Saya menginisiasi fase **"Move-Forward"** untuk mengubah aplikasi ini dari sekadar "syarat lulus" menjadi produk yang *market-ready*.

### Apa yang Saya Tingkatkan?

| Fitur | Versi Skripsi (MVP) | Versi Move-Forward (Pro) |
| :--- | :--- | :--- |
| **Platform** | Web Only | Hybrid (Web, PWA, Android APK, iOS) |
| **UX/UI** | Fungsional Standar | High-End Micro-interactions & Haptic Feedback |
| **Teknologi UI** | Nuxt UI v3 | Nuxt UI v4 + Tailwind CSS v4 |
| **Distribusi** | Browser Access | CapacitorJS (Native Wrapper) |
| **Animasi** | Transisi Dasar | CSS-Only Smooth Transitions & Scroll-Reveal |

## Tech Stack & Arsitektur

Aplikasi ini dibangun dengan arsitektur modern yang menekankan pada kecepatan, keamanan, dan efisiensi kode.

### Frontend & Mobile
- **Nuxt 4 (SSR + Static):** Memberikan performa loading yang instan dan SEO yang optimal.
- **Tailwind CSS v4:** Menggunakan *custom utility layers* untuk styling yang konsisten dan ringan.
- **Nuxt UI 4:** Memberikan komponen antarmuka yang modern dan aksesibel.
- **CapacitorJS:** Memungkinkan satu codebase berjalan sebagai aplikasi native Android dan iOS.

### Backend & Infrastructure
- **Supabase:** Menangani Autentikasi, Database PostgreSQL, dan Realtime Engine.
- **Row Level Security (RLS):** Memastikan isolasi data absolut menggunakan kebijakan `auth.uid() = user_id`.
- **Vercel:** Deployment otomatis melalui pipeline CI/CD dari GitHub.

### UX Engineering
- **Haptic Feedback:** Integrasi `navigator.vibrate` untuk memberi sensasi fisik saat berinteraksi dengan aplikasi di mobile.
- **Accessibility:** Implementasi `prefers-reduced-motion` untuk pengguna yang sensitif terhadap animasi.
- **Zod Validation:** Validasi skema ketat untuk mencegah data anomali masuk ke database.

## Hasil & Dampak

Melalui pengujian *Black-box* dan *White-box*, serta wawancara langsung dengan mahasiswa, FTracker terbukti:
1. **Meningkatkan Kesadaran Finansial:** Pengguna lebih cepat menyadari kondisi "boros" melalui indikator warna dinamis.
2. **Efisiensi Input:** Penggunaan modal form dengan validasi real-time mempercepat proses pencatatan transaksi.
3. **Aksesibilitas Tinggi:** Dengan versi APK dan PWA, pengguna dapat mencatat transaksi kapan saja tanpa harus membuka browser.

## Kesimpulan

FTracker adalah bukti nyata dari proses iterasi berkelanjutan. Dimulai dari sebuah riset akademis, dikembangkan dengan disiplin teknis, dan disempurnakan dengan sentuhan UX profesional. Proyek ini mencerminkan kemampuan saya dalam menganalisis masalah, membangun solusi teknis, dan melakukan optimasi produk secara berkelanjutan.

---
**Links:**
- [🌐 Live Demo](https://mycomun.vercel.app/) | [💻 GitHub Repository](https://github.com/andimarcell) 