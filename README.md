# Webshop za fotelje – Internship projekt

Ovaj projekt predstavlja jednostavan frontend webshop za fotelje, izrađen kao dio prijave za internship. Cilj projekta bio je demonstrirati razumijevanje modernih web tehnologija, modularnog pristupa razvoju sučelja te rad po vizualnoj specifikaciji (Figma dizajn).

---

## 🛠️ Korištene tehnologije

- [Next.js](https://nextjs.org/) – za izgradnju React-based aplikacije i dinamičko rutiranje
- [Tailwind CSS](https://tailwindcss.com/) – za brzu i responzivnu stilizaciju sučelja
- Custom JSON file – za simulaciju backend podataka i strukturirano dohvaćanje sadržaja

---

## 📌 Kratki opis projekta

Webshop sadrži glavnu stranicu s pregledom proizvoda (fotelja), mogućnost otvaranja detalja pojedinog proizvoda putem dinamičkih ruta te modularnu strukturu kroz komponente koje se mogu lako ponovno koristiti.

---

## 💡 Najveći izazovi

Najzahtjevniji dio projekta bio je rad prema zadanom Figma dizajnu. Budući da nisam imao prethodnog iskustva s Figma alatima, nisam znao kako doći do točnih mjera i razmaka među elementima, pa sam izgled sučelja pokušao rekonstruirati "po oku" što vjernije. Također, budući da nisam ranije koristio responzivne dijelove Tailwind CSS-a, bilo je izazovno uskladiti klasičan dizajn s utility-first pristupom Tailwinda.

---

## 🌟 Na što sam najponosniji

- Jasna i čitljiva struktura koda
- Modularizacija kroz komponente i prijenos podataka među njima
- Prva upotreba `sm:` i drugih Tailwind responzivnih utilitija
- Izgled sučelja koji je vrlo blizu originalnom dizajnu unatoč nedostatku preciznih dimenzija

---

## 🧭 Struktura projekta

Projekt se sastoji isključivo od frontend dijela, bez pozadinskog API-ja. Umjesto toga, koristi se lokalni JSON file kao izvor podataka. Glavne komponente uključuju:

- `components/` – sve UI komponente (npr. ProductCard, Header, Layout, itd.)
- `pages/` – Next.js stranice uključujući dinamičku rutu za proizvode (`[id].tsx`)
- `public/dummy_data.json` – mock podaci za proizvode (naslov, opis, cijena, slike...)

---

## ⚙️ Tehničke odluke

- Umjesto statičkog umetanja svake slike na zasebnu stranicu, odlučio sam koristiti vlastiti JSON s opisima i URL-ovima slika, te generirati sadržaj komponente kroz mapiranje tog JSON-a.
- Iskoristio sam Next.js dinamičko rutiranje kako bi svaka fotelja imala vlastitu stranicu temeljem svog `id` parametra.
- Funkcionalnosti poput košarice, filtera ili pretrage nisu bile dio zadatka, no razumijem kako bi se takve opcije nadogradile i mogao bih ih implementirati po potrebi.

---

## 📌 Napomena

Ovo je moj prvi projekt koji razvijam direktno po dizajnu iz Figma file-a i iako možda neki razmaci ili proporcije nisu identične, trud sam usmjerio prema što vjernijem izgledu, funkcionalnoj strukturi i modularnosti. Spreman sam učiti i ispraviti sve uočene nedostatke.

---


## ⏱️ Aktivno vrijeme potrošeno na projektu

| Datum    | Aktivnost               | Trajanje         |
|----------|--------------------------|------------------|
| Navbar   |                          | 1h 6min          |
| Footer   |                          | 36min            |
| Layout fixing |                    | 14min            |
| 8.7.     | Razvoj općenito          | 2h               |
| 10.7.    |                          | 2h               |
| 11.7.    |                          | 2h               |
| 12.7.    |                          | 1h 45min + 1h    |
| 13.7.    |                          | 37min            |
| 14.7.    |                          | 30min            |
| 16.7.    |                          | 1h 37min         |
| 17.7.    |                          | 2h 45min         |
| 18.7.    |                          | 45min            |
| 19.7.    |                          | 4h               |
| 21.7.    |                          | 1h 5min          |

Hvala na čitanju! ✨