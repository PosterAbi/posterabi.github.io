---
id: laoseis
title: Laoseis & tarned
sidebar_label: Laoseis & tarned
sidebar_position: 4
---

import ImageSlider from '@site/src/components/ImageSlider';

# Laoseis & tarned

<ImageSlider images={[
  { src: '/img/laoseis/samm1.png', alt: 'Admin Paneel – Menüü → Ladu', caption: 'Samm 1: Ava Admin Paneel ja vali "Ladu" → "Laoseis"' },
  { src: '/img/laoseis/samm2.png', alt: 'Tarne lisamine', caption: 'Samm 2: Klõpsa „Lisa" uue tarne lisamiseks' },
  { src: '/img/laoseis/samm3.png', alt: 'Tarne tegemine', caption: 'Samm 3: Täida kõik väljad tarne lisamiseks.' },
  { src: '/img/laoseis/samm4.png', alt: 'Kassa sisene laoseisu vaatamine ja tarne lisamine', caption: 'Samm 4: Kassast laoseisu vaatamine või tarne lisamine.' },
  { src: '/img/laoseis/samm5.png', alt: 'Kassast tarne lisamine', caption: 'Samm 5: Kassast tarne lisamine.' },
]} />

## Laoseisu vaatamine

**Tee:** `Admin Paneel` → `Ladu` → `Laoseis`

1. Ava **Admin Paneel** → **Ladu** → **Laoseis**
2. Klõpsa toote real "Tarned" või "Laoseis" et näha detailsemat infot.
:::tip Filtrid
- **Filtreeri asutuse järgi** — Üleval on otsingu ja filtreerimis võimalus. Filtreerides on endal lihtsam jälgida.
:::
---

## Koguste lisamine (Tarne)

**Tee:** `Admin Paneel` → `Ladu` → `Tarned` → `Lisa`

1. Ava **Admin Paneel** → **Ladu** → **Tarned** → **Lisa**
2. Vali tarnija
   - Kasuta **„Algseis"** esmakordsel sisestamisel
   - Kui tarnijat pole, vali **„Lisa uus tarnija"** ja täida väljad
3. Vali oma kohvikule vastav ladu asukoha järgi.
4. Vali **„Lisa makse"**
   - Vali maksmiseks kasutatud konto (nt Pirita PANK)
   - Kuupäev ja kellaaeg
   - Summa arvutatakse automaatselt pärast toodete lisamist
5. Klõpsa „Nimetus" lahtrile → vali toode → sisesta ühik, kogus ja 1 tk hind
   - Kogusumma arvutatakse automaatselt
6. Vajuta **„Lisa veel"** järgmise toote lisamiseks sama tarne alla

:::tip Kiirvalikud
- **Tarnete import** — suurema hulga toodete puhul saab kasutada impordi funktsiooni.
:::

---

## Tarne lisamine otse kassast

**Tee:** `Kassa` → `Menüü` → `Lisa tarne`

1. Ava **Kassa** → **Menüü**
2. Vajuta **„Lisa tarne"** või **"Supply"**
3. Vali **tarnija/Supplier**
4. Vali **ladu/Storage**, kuhu tarnitavad tooted lähevad
5. Määra **konto/Account** tarne eest tasumiseks
6. Vajuta **„Vali/Add item"** toodete lisamiseks
7. Sisesta **kogus/Quantity**, **ühiku hind/For piece** ja **kogus/amount**
8. Klõpsa **"Send to mgmt console"** et tarned lisada.
