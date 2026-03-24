---
id: sularaha
title: Sularaha kontroll & panka
sidebar_label: Sularaha kontroll & panka
sidebar_position: 3
---

import ImageSlider from '@site/src/components/ImageSlider';

# Sularaha kontroll & panka

<ImageSlider images={[
  { src: '/img/finantsid-kontroll/samm1.png', alt: 'Admin Paneel → Finantsid → Kontod', caption: 'Variant 1: Vaata oma kohviku kontoseisud üle.' },
  { src: '/img/finantsid-kontroll/samm2.png', alt: 'Admin Paneel → Finantsid → Kassavahetused', caption: 'Variant 2: Vajuta kassavahetuse peale et näha detilsemat infot.' },
  { src: '/img/finantsid-kontroll/samm3.png', alt: 'Kassa → Menüü → Koosta Aruanne', caption: 'Variant 3: Ava Kassa menüü ning koosta aruanne näiteks praeguse kassavahetuse kohta." → "Kaubad"' },
  { src: '/img/finantsid-kontroll/samm4.png', alt: 'Aruande seadistamine', caption: 'Variant 3: Vali ajavahemik ning kassapidaja ning vali kas **"Kaupade müük"** sees/väljas' },
  { src: '/img/finantsid-kontroll/samm5.png', alt: 'Aruande ülevaade', caption: 'Variant 3: Aruandest on näha kui palju, kuidas ja mida müüdi.' },
]} />

Sularaha ülelugemine, kontroll ja panka toimetamine.

## Sularaha koguse kontroll

1. Loe sularaha **füüsiliselt üle**
2. `Admin Paneel` → `Finantsid` → `Kontod` → Kontrolli sularahakonto saldot
3. `Admin Paneel` → `Finantsid` → `Kassavahetused` → Vajuta vahetuse peale et kontrollida finantse vahetuse alguses ja lõpus.
4. `Kassa` → `Menüü` → `Koosta aruanne`
   - Vali ajavahemik ja kassapidaja
   - Lülita „Kaupade müük" sisse/välja vastavalt vajadusele
   - Vajuta „Koosta aruanne" — näed perioodi sularahamakseid

:::tip Valem
**Sularaha vahetuse alguses** + **Sularaha maksed vahetuse ajal** = **Sularaha lõppjääk**
:::

---

## Sularaha panka toimetamine

1. `Kassa` → `Menüü` → `Tehingu loomine` → **Sularaha väljavõtmine**
2. `Admin Paneel` → `Finantsid` → `Tehingud` → `Lisa` → `Ülekanne`
   - **Kontolt:** Seif
   - **Kontole:** Pangakonto
   - Klõpsa **Salvesta**
