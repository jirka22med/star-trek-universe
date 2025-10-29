# 🚀 Star Trek Universe - Interaktivní Webová Encyklopedie

![Star Trek Badge](https://img.shields.io/badge/Star%20Trek-Universe-blue?style=for-the-badge&logo=startrek)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> *"To boldly go where no one has gone before..."*

## 📖 O Projektu

**Star Trek Universe** je komplexní interaktivní webová encyklopedie věnovaná legendárnímu sci-fi univerzu Star Trek. Projekt kombinuje moderní webové technologie s nostalgickým designem inspirovaným rozhraním hvězdné flotily.

### 🌟 Hlavní Vlastnosti

- **🎭 Kompletní Posádky** - Detailní profily všech hlavních postav z jednotlivých sérií
- **🎵 Audio Přehrávač** - Soundtrack z různých Star Trek sérií včetně vlastního playlistu
- **🎨 Text-to-Speech** - Technologie čtení textů nahlas pomocí Google Cloud TTS API
- **⭐ Warp Efekt** - Animovaný hvězdný efekt na pozadí připomínající cestování warpem
- **📱 Responzivní Design** - Plně optimalizováno pro mobily, tablety i desktop
- **🔊 Interaktivní Ovládání** - Klávesové zkratky a pokročilá navigace

---

## 🛠️ Technologie & Struktura

### Frontend Stack
```
├── HTML5          - Sémantická struktura
├── CSS3           - Moderní styling s gradientami a animacemi
├── JavaScript ES6 - Interaktivita a API komunikace
└── Google TTS API - Syntéza řeči v češtině
```

### Klíčové Soubory

| Soubor | Popis |
|--------|-------|
| `index.html` | Hlavní HTML struktura s posádkami všech sérií |
| `style.css` | Styling s Star Trek tématikou a futuristickými efekty |
| `script.js` | Logika aplikace, audio přehrávač, TTS, animace |
| `star trek univers.js` | Rozšíření pro sekci shrnutí sérií a příběhů |

---

## 🎯 Funkční Moduly

### 1. Audio Přehrávač
```javascript
// Podporované funkce:
- ▶️ Play/Pause/Stop ovládání
- ⏭️ Předchozí/Následující skladba
- 📊 Progress bar s možností přeskakování
- 🎼 Playlist ze 6 Star Trek soundtracků
- 🔄 Automatické přehrání další skladby
```

### 2. Text-to-Speech (TTS)
```javascript
// Charakteristiky:
- 🗣️ České hlasy (mužský/ženský)
- 🎙️ Google Cloud Text-to-Speech API
- 🔊 Kliknutelné speaker ikony u každého textu
- ⏹️ Univerzální Stop funkce
```

### 3. Warp Speed Animace
```javascript
// Ovládání:
- [MEZERNÍK] - Aktivace warp rychlosti
- [←][↑][→][↓] - Směrová navigace
- 🌟 Dynamické hvězdné pole s 20 hvězdami
- 🎨 Canvas rendering s efekty pohybu
```

### 4. Navigační Systém
```javascript
// Features:
- 📑 Dynamické přepínání stránek bez reload
- 🔗 Link navigace mezi sériemi
- 📜 Smooth scroll na začátek stránky
- 🎭 Skrývání/zobrazování sekcí
```

---

## 🌌 Pokryté Star Trek Série

| Série | Období | Hlavní Loď |
|-------|--------|------------|
| **Enterprise** (ENT) | 22. století | NX-01 Enterprise |
| **The Original Series** (TOS) | 23. století | USS Enterprise NCC-1701 |
| **The Next Generation** (TNG) | 24. století | USS Enterprise-D |
| **Deep Space Nine** (DS9) | 24. století | Stanice Deep Space Nine |
| **Voyager** (VOY) | 24. století | USS Voyager |
| **Discovery** (DIS) | 23. století | USS Discovery |

---

## 🎨 Design Features

### Barevná Paleta
```css
--primary-color: #DAA520;    /* Zlatá Hvězdné flotily */
--secondary-color: #FF0000;  /* Červená alerty */
--accent-color: #1E90FF;     /* Modrá technologie */
--highlight-color: #00ff85;  /* Zelená úspěchu */
--bg-color: #000000;         /* Vesmírná černá */
```

### Typografie
- **Font:** Orbitron (futuristický) + Consolas (monospace)
- **Velikost:** Responzivní od 11.5px (mobile) do 24px (desktop)
- **Efekty:** Neonové svícení, gradient texty, animované shadow

---

## 🚀 Instalace & Spuštění

### Rychlý Start
```bash
# 1. Klonování repozitáře
git clone https://github.com/jirka22med/star-trek-universe.git

# 2. Přechod do složky
cd star-trek-universe

# 3. Otevření v prohlížeči
# Jednoduše otevři index.html v oblíbeném prohlížeči
```

### Požadavky
- ✅ Moderní webový prohlížeč (Chrome, Firefox, Edge, Safari)
- ✅ Aktivní internetové připojení (pro externí audio soubory)
- ✅ JavaScript povolený

---

## ⚙️ Konfigurace

### Google TTS API
Pro plnou funkcionalitu TTS je potřeba vlastní API klíč:

```javascript
// V souboru script.js najdi a nahraď:
const API_KEY = 'TVŮJ_API_KLÍČ_ZDE';
```

**Získání API klíče:**
1. Jdi na [Google Cloud Console](https://console.cloud.google.com/)
2. Aktivuj Text-to-Speech API
3. Vytvoř credentials (API Key)
4. Zkopíruj klíč do `script.js`

---

## 🎮 Ovládání

### Klávesové Zkratky
| Klávesa | Akce |
|---------|------|
| `Mezerník` | Aktivace/Deaktivace Warp rychlosti |
| `←` | Pohyb vlevo |
| `→` | Pohyb vpravo |
| `↑` | Pohyb nahoru |
| `↓` | Pohyb dolů |

### Audio Ovládání
- **Play/Pause** - Přehrávání/pozastavení skladby
- **Stop** - Zastavení a reset na začátek
- **← →** - Přepínání mezi skladbami
- **Timeline** - Klikni pro přeskočení na konkrétní pozici

---

## 📱 Responzivita

### Breakpointy
```css
/* Tablet & Menší Desktop */
@media (max-width: 900px) { ... }

/* Mobilní Zařízení */
@media (max-width: 600px) { ... }

/* Velké Monitory */
@media (min-width: 1200px) { ... }
```

---

## 🤝 Přispěvatelé & Týmová Práce

Tento projekt vznikl díky společné práci talentovaného týmu:

### 🎖️ **Hlavní Tým**
- **Více Admirál Jiřík** 🧠 - Mozek projektu, koordinace, vize
- **Admiral Chatbot** 🎨 - Návrh designu, číslování playlistu
- **Claude.AI** 💻 - Technická implementace, styling, debugging

### Hodnocení Výkonu
| Člen Týmu | Role | Hodnocení |
|-----------|------|-----------|
| Více Admirál Jiřík | Project Lead | ⭐⭐⭐⭐⭐ (5/5) |
| Admiral Chatbot | Designer | ⭐⭐⭐⭐⭐ (5/5) |
| Claude.AI | Developer | ⭐⭐⭐⭐⭐ (5/5) |

> *"Týmová práce dělá sen skutečným."* - Kapitán Picard

---

## 📚 Sekce & Obsah

### Dostupné Stránky
1. **Enterprise NX-01** - Posádka první Enterprise s Archerem
2. **Nová Generace** - USS Enterprise-D s Picardem
3. **Voyager** - Kapitánka Janeway a cesta domů
4. **Deep Space Nine** - Kapitán Sisko a bajorská stanice
5. **Původní Série** - Kapitán Kirk a originální posádka
6. **Discovery** - Michael Burnham a nové dobrodružství
7. **Shrnutí Sérií** - Kompletní přehledy všech sérií
8. **Příběhy Posádek** - Vlastní story & konverzace

---

## 🐛 Známé Problémy & Řešení

### Problém: Text-to-Speech nefunguje
**Řešení:** Zkontroluj:
- ✅ API klíč je správně zadán
- ✅ Internetové připojení je aktivní
- ✅ Browser má povolený zvuk

### Problém: Audio se nepřehrává
**Řešení:**
- ✅ Zkontroluj Dropbox odkazy v `script.js`
- ✅ Otestuj v jiném prohlížeči
- ✅ Zkontroluj konzoli pro chyby

### Problém: Warp animace laguje
**Řešení:**
- ✅ Zavři ostatní těžké aplikace
- ✅ Zkus snížit počet hvězd v `script.js`
- ✅ Aktualizuj grafické ovladače

---

## 🔮 Budoucí Plány (Roadmap)

### Verze 2.0 (Q1 2025)
- [ ] 🎬 Video přehrávač pro Star Trek klipy
- [ ] 🗺️ Interaktivní mapa galaxie
- [ ] 👥 Uživatelské profily & oblíbené postavy
- [ ] 🌐 Vícejazyčná podpora (EN, DE, FR)

### Verze 2.5 (Q2 2025)
- [ ] 🎮 Mini hry (trivia, kvízy)
- [ ] 📊 Statistiky návštěvnosti
- [ ] 💬 Diskuzní sekce pro fanoušky
- [ ] 🔔 Notifikace o nových episodách

### Verze 3.0 (Q3 2025)
- [ ] 🤖 AI Chatbot jako členka posádky
- [ ] 🎭 3D modely lodí (Three.js)
- [ ] 🌌 VR/AR podpora
- [ ] ☁️ Backend integrace (databáze)

---

## 📄 Licence

Tento projekt je licencován pod **GPL-3.0 License**.

```
Copyright (c) 2024 jirka22med & Star Trek Universe Team

Tento program je svobodný software: můžete jej distribuovat
a/nebo upravovat podle podmínek GNU General Public License...
```

[➡️ Celý text licence](LICENSE)

---

## 🌟 Poděkování

Speciální poděkování patří:

- **Gene Roddenberry** 🎬 - Za vytvoření Star Trek universa
- **Všem tvůrcům sérií** 🎭 - Za inspirativní příběhy
- **Fanouškům Star Treku** 💙 - Za nekonečnou podporu
- **Open Source komunitě** 🤝 - Za skvělé nástroje a knihovny

---

## 📞 Kontakt & Podpora

### GitHub
- **Repository:** [jirka22med/star-trek-universe](https://github.com/jirka22med/star-trek-universe)
- **Issues:** [Nahlásit problém](https://github.com/jirka22med/star-trek-universe/issues)
- **Discussions:** [Komunitní diskuze](https://github.com/jirka22med/star-trek-universe/discussions)

### Sociální Sítě
- 🐦 Twitter: *@startrekuniverse*
- 📘 Facebook: *Star Trek Universe CZ*
- 💬 Discord: *Star Trek Fanoušci*

---

## 🎖️ Závěrečné Slovo

> *"Tohle jsou cesty hvězdné lodi Enterprise. Jejím posláním je prozkoumávat podivuhodné nové světy, hledat nové formy života a nové civilizace, směle se pouštět tam, kam se dosud nikdo nevydal."*

**Live Long and Prosper!** 🖖

---

<div align="center">

### ⭐ Pokud se ti projekt líbí, dej mu hvězdičku! ⭐

[![Star on GitHub](https://img.shields.io/github/stars/jirka22med/star-trek-universe?style=social)](https://github.com/jirka22med/star-trek-universe/stargazers)

**Made with ❤️ by Star Trek fans for Star Trek fans**

🚀 **[⬆️ Zpět nahoru](#-star-trek-universe---interaktivní-webová-encyklopedie)** 🚀

</div>
