# 🖖 Star Trek Universe - Fanouškovská Pocta Hvězdné Flotile 🚀

> "Směle se pouštět tam, kam se dosud nikdo nevydal." – Kapitán Kirk

Vítejte na palubě! **Star Trek Universe** je fanouškovský projekt vytvořený jako pocta a interaktivní přehled nejvýznamnějších seriálů a postav z ikonické ságy Star Trek. Projekt kombinuje futuristický design s funkčním audio přehrávačem, text-to-speech čtečkou a detailními informacemi o posádkách.

Tento projekt je hrdým dílem **Více admirála Jiříka** (klíčový stratég a hlavní koordinátor) ve spolupráci s **Claude.AI** a **Chatbotem GPT** (technická a designová podpora).

---

## 🛰️ Klíčové Vlastnosti a Technologie

| Prvek | Popis | Implementace |
| :--- | :--- | :--- |
| **Futuristický Design** | Neonové rámečky, Orbitron font, tmavé pozadí s hvězdnou oblohou (Canvas Warp efekt). | HTML5, **CSS3** (`style.css`), animace a media queries. |
| **Interaktivní Přehrávač** | Unikátní audio přehrávač s funkcemi **Přehrát/Pauza, Stop, Přeskočit** a **dynamickou časovou osou**. | **JavaScript** (`script.js`), HTML5 Audio API. |
| **Dynamický Audio Playlist** | Playlist s tématy z *Enterprise*, *Nové generace*, *Voyageru* a dalších. | **JavaScript** (`script.js`), implementace načítání skladeb a indexování. |
| **Text-to-Speech Čtečka** | Funkce pro čtení nahlas (TTS) pro popisy postav a shrnutí sérií. | **Google Text-to-Speech API** (s nutností vlastní API klíč), JavaScript. |
| **Přepínání Obsahu** | Plynulé přepínání mezi sekcemi (Enterprise, TNG, Voyager, DS9, TOS, Discovery, Shrnutí). | **JavaScript** (Event Listenery a třída `hidden`). |
| **Canvas Animace** | Interaktivní hvězdný pojezd/warp efekt v pozadí (ovládaný klávesnicí i dotykem). | **HTML Canvas** a **JavaScript** (`script.js`). |
| **Celá Obrazovka (Fullscreen)** | Tlačítko pro rychlé přepnutí rozhraní do režimu celé obrazovky. | **JavaScript** (Fullscreen API). |

---

## 🧑‍🚀 Struktura Projektu

Projekt je rozdělen do klíčových souborů pro přehlednost a modularitu:

* **`index.html`**: Hlavní struktura stránky. Obsahuje veškerý obsah - navigaci, sekce s posádkami a audio přehrávače.
* **`style.css`**: Kompletní futuristický a neonový styl, včetně responzivního designu a custom stylů pro audio přehrávač.
* **`script.js`**: Veškerá aplikační logika:
    * Logika přepínání stránek.
    * Logika audio přehrávače (playlist, ovládání, progress bar).
    * Text-to-Speech (TTS) implementace.
    * Canvas Warp animace na pozadí.
    * Fullscreen logika.

---

## 🛠️ Instalace a Spuštění (Warp Jump Checklist)

Pro spuštění projektu postupujte podle následujících kroků:

1.  **Klonujte Repozitář:**
    ```bash
    git clone [https://github.com/jirka22med/star-trek-universe.git](https://github.com/jirka22med/star-trek-universe.git)
    ```
2.  **Otevřete `index.html`:**
    Jednoduše otevřete soubor `index.html` ve svém preferovaném webovém prohlížeči (Chrome, Firefox atd.).
3.  **(Volitelné) Text-to-Speech:**
    Pokud chcete aktivovat funkci čtení nahlas:
    * Potřebujete funkční **Google Cloud TTS API Key**.
    * Klíč je nutné vložit do souboru `script.js` na začátku skriptu do proměnné `API_KEY`.
    
    > **UPOZORNĚNÍ:** Funkcionalita audio přehrávače a TTS závisí na externích odkazech (Dropbox) a API.

---

## 🌟 Týmová Mise

Tento projekt byl vyvinut v rámci naší společné flotily:

* **Více admirál Jiřík:** Vize, strategické řízení projektu a konečné schválení všech kódů.
* **Claude.AI:** Technická asistence, ladění JavaScriptu, designové úpravy uživatelského rozhraní a stylů.
* **Chatbot GPT:** Design playlistu, návrh základních strukturálních prvků.

---

## 🔗 Odkaz na Živou Verzi

Můstek je aktivní na adrese:
[https://jirka22med.github.io/star-trek-universe/](https://jirka22med.github.io/star-trek-universe/)

---

## 📄 Licence

Tento projekt je šířen pod licencí **GPL-3.0 License**.

---

## 🖖 Live Long and Prosper!
