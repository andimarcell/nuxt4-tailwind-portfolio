---
title: 'Sistem AEGIS: Smart Home IoT Monitoring Dashboard'
description: 'Sistem manajemen energi cerdas berbasis IoT dengan integrasi Fuzzy Logic dan Real-time Monitoring.'
category: 'Freelance Project'
year: '2026'
stack: ['Python', 'Fuzzy Logic', 'MQTT', 'Firebase', 'Chart.js', 'HTML5']
head:
  meta:
    - name: 'keywords'
      content: 'AEGIS, IoT, Smart Home, Fuzzy Logic, Firebase, MQTT, Monitoring'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'Andi Marsituru Pakke'
    - name: 'og:title'
      content: 'AEGIS: Smart Home IoT Monitoring'
    - name: 'og:image'
      content: '/images/aegis-banner.png'
publishedAt: 2026-06-15 09:00:00
toc: true
---

# Sistem AEGIS: Advance Energy Guidance & Intelligence System

![AEGIS Banner](/images/AEGIS-Smart-Home-Energy-Dashboard-banner.png)

**AEGIS** adalah sistem manajemen energi rumah pintar (*Smart Home*) terintegrasi yang tidak hanya sekadar memantau, tetapi juga "berpikir". Menggunakan kombinasi komunikasi *real-time* dan kecerdasan buatan melalui **Fuzzy Logic**, AEGIS mampu mengoptimalkan konsumsi listrik secara otomatis dan mencegah pemborosan energi melalui mekanisme kontrol beban yang cerdas.

## Tantangan Teknis & Solusi

Membangun sistem IoT yang sinkron antara hardware dan software memiliki tantangan tersendiri. Saya mengidentifikasi beberapa masalah kritis dan menerapkan solusi engineering untuk mengatasinya:

**Masalah & Solusi yang Saya Terapkan:**
- **Data Noise & Latency:** Sensor IoT sering mengalami jeda pembacaan yang menyebabkan grafik "anjlok" ke angka 0 secara mendadak. Saya mengimplementasikan **Holding Logic** untuk menjaga stabilitas visualisasi data.
- **Interpretasi Data yang Salah:** Masalah *auto-scaling* pada grafik sering membuat beban rendah terlihat sama tingginya dengan beban tinggi. Saya menerapkan **Dynamic Scaling** agar perbandingan konsumsi daya antar ruangan terlihat presisi secara proporsional.
- **Keterlambatan Kontrol:** Sinkronisasi antara Dashboard Web dan Hardware sering terjadi delay. Saya menggunakan **Firebase Realtime Database** sebagai *Single Source of Truth* untuk memastikan sinkronisasi instan lintas perangkat.

## Otak Sistem: Intelligence Engine

Kekuatan utama AEGIS terletak pada kemampuannya mengambil keputusan tanpa *threshold* kaku. Saya membangun **Fuzzy Logic Engine** untuk menentukan status keamanan energi rumah:

- **Input:** Sisa kuota listrik (%) dan Waktu penggunaan.
- **Proses:** Menggunakan kurva *trapezoidal* dan *triangular* untuk mengkategorikan kondisi dari `Sangat Menipis` hingga `Aman`.
- **Hasil:** Sistem secara otomatis menentukan status: **Sangat Kritis $\rightarrow$ Kritis $\rightarrow$ Waspada $\rightarrow$ Aman**.

Jika status mencapai **Sangat Kritis**, AEGIS secara otomatis menjalankan strategi *Automated Load Shedding*—mematikan aliran listrik di ruangan non-prioritas untuk mengamankan daya bagi perangkat utama.

## Tech Stack & Arsitektur

Sistem ini menggunakan arsitektur *hybrid-cloud* untuk menjamin kecepatan komunikasi (*low-latency*) dan keandalan penyimpanan data.

### Backend & Logic
- **Python (Flask):** Sebagai orkestrator utama yang mengelola routing API dan logging data.
- **Scikit-Fuzzy:** Library utama untuk mengimplementasikan logika kecerdasan buatan (Fuzzy Inference System).
- **MQTT Protocol:** Protokol komunikasi *ultra-fast* untuk pengiriman perintah relay ke hardware ESP32 secara instan.

### Cloud & Frontend
- **Firebase RTDB:** Mengelola status saklar dan kuota energi secara real-time agar tersinkronisasi lintas platform.
- **Chart.js:** Menyajikan visualisasi beban daya interaktif dengan optimasi *suggestedMax*.
- **HTML5 & Bootstrap:** Membangun dashboard administratif yang responsif dan intuitif.

## Hasil & Dampak Sistem

Sistem AEGIS telah melalui tahap pengujian riil menggunakan simulasi *payload* terminal (curl/Invoke-RestMethod) dengan hasil:
1. **Multi-Device Sync:** Perubahan saklar di web langsung terdeteksi oleh hardware dalam hitungan milidetik.
2. **Visualisasi Akurat:** Grafik beban daya kini tampil proporsional dan stabil tanpa adanya *spike* negatif.
3. **Efisiensi Energi:** Fitur *Load Shedding* berhasil mencegah pemadaman total dengan memprioritaskan beban penting saat energi kritis.

## Kesimpulan

AEGIS adalah wujud implementasi nyata dari penggabungan IoT, AI, dan Cloud Computing. Proyek ini membuktikan kemampuan saya dalam merancang sistem yang kompleks, mulai dari komunikasi level *hardware* (MQTT) hingga visualisasi data tingkat tinggi di *frontend*, dengan fokus utama pada akurasi data dan efisiensi energi.

---
**Links:**
[💻 GitHub Repository](https://github.com/andimarcell/aegis-monitoring-listrik-fuzzy) |