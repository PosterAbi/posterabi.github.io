---
id: kliendid
title: Kliendid
sidebar_label: Kliendid
sidebar_position: 1
---

import ImageSlider from '@site/src/components/ImageSlider';

# Kliendid

<ImageSlider images={[
  { src: '/img/kliendid/samm1.png', alt: '', caption: '' },
  { src: '/img/kliendid/samm2.png', alt: '', caption: '' },
  { src: '/img/kliendid/samm3.png', alt: '', caption: '' },
  { src: '/img/kliendid/samm4.png', alt: '', caption: '' },
  { src: '/img/kliendid/samm5.png', alt: '', caption: '' },
  { src: '/img/kliendid/samm6.png', alt: '', caption: '' },
]} />

## Kliendibaasi loomine

**Tee:** `Admin Paneel` → `Marketing` → `Kliendid`

1. Ava **Admin Paneel** → **Turundus** → **Kliendid**
2. Vajuta **„Lisa klient"**
3. Täida vajalikud väljad:
   - **Nimi** — kliendi ees- ja perekonnanimi
   - **Kliendi grupp** — vali sobiv grupp (nt "Püsiklient", "VIP" vms)
   - **Kõik muud väljad on valikulised.**
4. Vajuta **„Salvesta"**

### Kliendi grupid

**Tee:** `Admin Paneel` → `Turundus` → `Kliendi grupid`

Kliendi grupid võimaldavad klientidele erinevaid soodustusi määrata:

1. Vajuta **„Lisa grupp"**
2. Sisesta grupi **nimi** (nt "Püsiklient", "Töötaja", "VIP")
3. Määra **soodustuse protsent** — see kehtib automaatselt kõigile grupi liikmetele
4. Vajuta **„Salvesta"**

:::tip
Gruppi saab hiljem muuta ja soodustuse protsenti uuendada — muudatus kehtib kohe kõigile grupi liikmetele.
:::

---

## Püsikliendi soodustused

Poster toetab grupipõhist soodustust:

| Seadistus | Kirjeldus |
|-----------|-----------|
| **Grupi soodustus %** | Fikseeritud allahindlus, mis rakendub automaatselt kõigile grupi liikmetele |
| **Kampaaniad** | Kampaaniad saab piirata kindla kliendi grupiga (nt "VIP hind") |

Soodustuse seadistamiseks:
1. Ava **Turundus** → **Kliendi grupid**
2. Vali grupp ja sisesta soovitud **soodustuse %**
3. Salvesta

---

## Kliendi sidumine müügiga

### Kassas

1. Ava kassa ja alusta müüki
2. Vajuta **kliendi ikooni** (inimese kujutis) tellimuse vaates
3. Otsi klienti **nime** või **telefoni** järgi
4. Vali klient — soodustus rakendub automaatselt

### Mida annab kliendi sidumine?

- **Soodustus** rakendub automaatselt vastavalt kliendi grupile
- **Ostuajalugu** salvestub kliendi alla — nähtav admin-paneelis
- **Aruanded** — saad vaadata müüki klientide lõikes: **Aruanded → Müük klientide järgi**
