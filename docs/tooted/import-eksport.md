---
id: import-eksport
title: Toodete import / eksport
sidebar_label: Import / eksport
sidebar_position: 6
---

import ImageSlider from '@site/src/components/ImageSlider';

# Toodete import / eksport

<ImageSlider images={[
  { src: '/img/toote-eksport/samm1.png', alt: 'Admin Paneel → Menüü → Kaubad', caption: 'Samm 1: Klõpsa „Eksport" praeguste toodete eksportimiseks exceli failina.' },
  { src: '/img/toote-eksport/samm2.png', alt: 'Eksporditud toodete faili leiata allalaetud failidest.', caption: 'Samm 2: Eksporditud toodete faili leiata allalaetud failidest.' },
  { src: '/img/toote-import/samm1.png', alt: 'Admin Paneel → Menüü → Kaubad', caption: 'Samm 1: Ava Admin Paneel ja vali "Menüü" → "Kaubad"' },
  { src: '/img/toote-import/samm2.png', alt: 'Importimine', caption: 'Samm 2: Klõpsa „..." → "Importtooted" uute toodete importimiseks' },
  { src: '/img/toote-import/samm3.png', alt: 'Valige oma kohvik ja fail', caption: 'Samm 3: Vali õige kohvik ning fail.' },
]} />

## Toodete eksportimine

**Tee:** `Admin Paneel` → `Menüü` → `Kaubad` → `Ekspordi`

1. Ava **Admin Paneel** → **Menüü** → **Kaubad**
2. Vajuta paremas ülanurgas **„Ekspordi"**
3. Laaditakse alla tabel (CSV/XLS/XLSX), mis sisaldab kõiki olemasolevaid tooteid
4. Seda sama tabelit saab kasutada uute toodete importimise alusena

---

## Toodete importimine

**Tee:** `Admin Paneel` → `Menüü` → `Kaubad` → `Impordi`

1. Ava **Admin Paneel** → **Menüü** → **Kaubad**
2. Vajuta paremas ülanurgas **„Impordi"**
3. Laadi alla näidistabel või kasuta eelnevalt eksporditud tabelit
4. Täida tabel soovitud toodetega ja salvesta **CSV**, **XLS** või **XLSX** formaadis
5. Vajuta **„Lae üles"** ja vali oma arvutist täidetud tabel
6. Seosta veerud: **Nimi**, **Kategooria**, **Jaam**, **Tüüp**, **Hind**, **Kaalutoode**
7. Vajuta **„Kontrolli andmeid"** — kui kõik on korras, vajuta **„Impordi"**

:::warning Tähelepanu
Olemasolevate toodete veerge **PosterID product_id** ja **PosterID modificator_id** ei tohi muuta. Uute toodete puhul jäta need veerud tühjaks.
:::
