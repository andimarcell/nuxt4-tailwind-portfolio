# Andi's Developer Portfolio

Personal website, portfolio, and tech blog built with modern web technologies. Focuses on maximum performance, SEO, and seamless user experience leveraging the latest Nuxt 4 architecture and Vite-powered Tailwind CSS v4.

![Nuxt 4](https://img.shields.io/badge/Nuxt_4-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Nuxt Content](https://img.shields.io/badge/Nuxt_Content-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)

## Key Features

Berdasarkan *roadmap* pengembangan, project ini dilengkapi dengan:

### UI/UX & Layouting
- **Modern Responsive Design:** Slicing menggunakan Tailwind CSS v4 (*CSS-first approach* tanpa `tailwind.config.js`).
- **Dark/Light Mode:** Toggle tema yang mulus dengan persistensi *state*.
- **Smooth Page Transitions:** Efek transisi elegan saat berpindah halaman.
- **Custom Error Page:** Halaman 404 yang didesain khusus dan responsif.
- **Dynamic Table of Content (TOC):** Navigasi artikel dengan *smooth scroll*, *active indicator*, dan logic show/hide.

### Content Management (Nuxt Content)
- **Markdown-Driven:** Menulis artikel blog dan daftar project murni menggunakan file Markdown (`.md`).
- **Front-matter & Prose:** Styling otomatis konten markdown dan injeksi meta data untuk SEO.
- **Component in Markdown (MDC):** Memanggil komponen Vue langsung di dalam file Markdown.
- **Code Highlighting:** Syntax highlight profesional untuk blok kode di dalam artikel.
- **Content Grouping:** Pengelompokan artikel blog berdasarkan tanggal dan kategori.

### Data Fetching & State
- **API Integration:** Menggunakan `useFetch` standar Nuxt 4 untuk menarik data eksternal secara asinkron.
- **Filtering & Sorting:** Manipulasi data secara *real-time* dari API maupun Nuxt Content.

### SEO & Performance
- **Dynamic Meta Tags:** Konfigurasi `Head` dan SEO secara dinamis per halaman.
- **Auto-Generated Sitemap:** Indexing otomatis agar terdeteksi sempurna oleh mesin pencari.

## Tech Stack & Architecture

- **Framework:** [Nuxt 4](https://nuxt.com/) (Menggunakan struktur `app/` directory, Nitro engine, dan Composition API `<script setup>`).
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Dikonfigurasi murni via `@import "tailwindcss"` di file CSS utama).
- **Icons:** [Iconify](https://iconify.design/) via `@egoist/tailwindcss-icons` (Penggunaan ikon via CSS class yang ringan).
- **Content:** [Nuxt Content](https://content.nuxtjs.org/) (Markdown & YAML parsing).

## Local Development
code
Bash
# Clone repository
git clone https://github.com/username/nuxt-portofolio.git

# Install dependencies (Gunakan package manager favoritmu: npm/yarn/pnpm/bun)
npm install

# Run Nuxt 4 development server
npm run dev