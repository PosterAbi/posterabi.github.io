---
id: kassavahetus
title: Kassavahetus
sidebar_label: Kassavahetus
sidebar_position: 2
---

import ImageSlider from '@site/src/components/ImageSlider';

# Kassavahetus

<ImageSlider images={[
  { src: '/img/kassavahetus/samm1.png', alt: 'Vahetuse alustamine', caption: 'Vahetuse alustamine.' },
  { src: '/img/kassavahetus/samm2.png', alt: 'Vahetuse alustamine', caption: 'Vahetuse alustamine.' },
  { src: '/img/kassavahetus/samm3.png', alt: 'Vahetuse lõpetamine', caption: 'Vahetuse lõpetamine.' },
  { src: '/img/kassavahetus/samm4.png', alt: 'Kassavahetuse kontrollimine.', caption: 'Kassavahetuse finantside kontrollimine.' },
]} />

Vahetuse alustamine ja lõpetamine kassas.

## Vahetuse alustamine

**Tee:** `Kassa` → Sisselogimine

1. Ava **Kassa**
2. Logi sisse **PIN-koodiga**
3. Sisesta kassas olev **algsumma**

---

## Vahetuse lõpetamine

**Tee:** `Kassa` → `Menüü`

1. Ava **Kassa** → **Menüü**
2. Vali **„Sulge üldine kassavahetus"**
3. Sisesta **tegelik sularaha saldo**

---

## Oodatud vs tegelik saldo

Pärast vahetuse sulgemist kuvatakse **Finantsid → Kassavahetused** all kaks numbrit:

| Väli | Selgitus |
|------|----------|
| **Oodatud saldo** | Vahetuse algussumma + müügid + tulud − kulud (süsteemi arvutus) |
| **Tegelik saldo** | Kassapidaja sisestatud tegelik sularaha summa vahetuse sulgemise hetkel |

Kui tegelik saldo **erineb** oodatavast, märgib Poster vahetuse **punasega**.

---

## Vahetuste vaatamine admin-paneelis

**Tee:** `Admin Paneel` → `Finantsid` → `Kassavahetused`

1. Ava **Admin Paneel** → **Finantsid** → **Kassavahetused**
2. Näed kõiki vahetusi koos algus- ja lõpuaegade, oodatud ja tegeliku saldoga
3. Punasega märgitud vahetustel on saldo erinevus — vajuta vahetusele detailide vaatamiseks
