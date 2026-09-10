---
title: 'Sistem AEGIS: Smart Home IoT Monitoring Dashboard'
description: 'Integrasi sistem monitoring daya real-time dengan Fuzzy Logic Engine, MQTT, dan Firebase Cloud.'
category: 'Freelance Project'
year: '2026'
stack: ['Python', 'Fuzzy Logic', 'MQTT', 'Firebase', 'Chart.js', 'HTML5']
---

## Ringkasan Proyek

**AEGIS** adalah sistem manajemen rumah pintar (*Smart Home*) terintegrasi yang dirancang untuk memantau konsumsi daya listrik secara *real-time* dan mengendalikan perangkat otomatis menggunakan kecerdasan buatan melalui **Fuzzy Logic Engine**. Sistem ini bertujuan untuk memberikan efisiensi energi dan kemudahan kontrol perangkat rumah tangga secara terpusat melalui sebuah dashboard monitoring.

## Tantangan Teknis & Masalah yang Ditemukan

Dalam proses pengembangannya, ditemukan beberapa kendala teknis kritis yang memengaruhi akurasi visualisasi dan pengalaman pengguna:

- **Auto-Scaling Grafik Identik:** Terdapat masalah pada pustaka Chart.js yang melakukan penyesuaian skala sumbu Y secara otomatis dan terpisah untuk setiap dataset. Hal ini menyebabkan kurva beban Lampu (40%) dan Colokan (60%) terlihat memiliki tinggi yang sama, sehingga memberikan interpretasi data yang salah.
- **Sinkronisasi Saklar (Toggle) Delay:** Tombol saklar pada antarmuka web seringkali tidak sinkron ketika status perangkat di Firebase berubah akibat intervensi otomatis dari AI (Fuzzy Logic), menyebabkan ketidaksesuaian antara kondisi fisik perangkat dan tampilan UI.
- **Jeda Pembacaan Sensor:** Terjadi fenomena di mana garis grafik daya anjlok ke nilai 0 secara mendadak. Hal ini disebabkan oleh jeda waktu pembacaan data (*latency*) pada sensor yang mengirimkan data kosong atau terputus sesaat.

## Arsitektur & Solusi yang Diterapkan

Untuk mengatasi permasalahan di atas, saya menerapkan serangkaian solusi teknis pada berbagai lapisan sistem:

### ⚙️ Backend & Pemrosesan Data
Sistem dibangun menggunakan bahasa pemrograman **Python** dengan pembagian modul yang terstruktur:
- `app.py`: Sebagai entry point aplikasi.
- `logika_kontrol.py` & `fuzzy_engine.py`: Menangani logika kecerdasan buatan untuk otomatisasi perangkat.
- `MQTT.py`: Mengelola protokol komunikasi MQTT untuk pertukaran data cepat antara hardware dan software.

### 📊 Optimasi Visualisasi & Sinkronisasi
- **Penyamaan Skala Sumbu Y Dinamis:** Melakukan konfigurasi `suggestedMax` berbasis limit daya aktual pada `dashboard.html`. Solusi ini memastikan visualisasi kurva antara berbagai perangkat (seperti lampu dan colokan) tampil presisi secara proporsional.
- **Logika Penahan Grafik (Holding Logic):** Mengimplementasikan algoritma penahan data (*data holding*) pada grafik. Dengan logika ini, visualisasi data tetap stabil dan kontinu meskipun terjadi intermitensi atau jeda pembacaan pada sensor.
- **Sinkronisasi Real-time Cloud:** Mengoptimalkan fungsi `updateAngkaRuangan()` agar melakukan pembaruan atribut `.checked` pada elemen UI secara otomatis saat terjadi perubahan data pada **Firebase Realtime Database**.

## Hasil Akhir & Dampak Sistem

Sistem AEGIS telah melalui tahap pengujian riil menggunakan simulasi pengiriman *payload* terminal (via `curl` dan `Invoke-RestMethod`). Hasil pengujian menunjukkan:
- **Multi-device Synchronization:** Perubahan data di database cloud tersinkronisasi lintas perangkat secara instan.
- **Validasi Data:** Dashboard monitoring kini menyajikan data yang valid, responsif, dan bebas dari anomali visual.
- **Kesiapan Operasional:** Sistem siap digunakan untuk monitoring daya rumah tangga dengan tingkat akurasi data yang tinggi.
