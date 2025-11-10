# Sito "Assistenza Medico Legale Integrata"

Starter statico (HTML/CSS/JS) pronto per GitHub Pages.

## Struttura
- `index.html`: landing page con sezioni Servizi, Chi sono, Contatti
- `css/styles.css`: stile responsive con palette e componenti riutilizzabili
- `js/main.js`: script per menu e footer
- `assets/logos/`: varianti logo in formato SVG

## Aggiornare i loghi
- Posiziona i file forniti (es. `logo-primario.svg`, `logo-simbolo.svg`) nella cartella `assets/logos/`.
- Mantieni gli stessi nomi usati nel markup (`log-01.svg`, `log-02.svg`, `log-04.svg`) oppure aggiorna gli attributi `src`/`href` nei file HTML alla variante corretta.
- Per la favicon e per l'immagine di anteprima social modifica rispettivamente `link rel="icon"` e `meta property="og:image"` presenti in ogni pagina.
- Verifica il risultato aprendo le pagine in locale o tramite l'anteprima di GitHub Pages per assicurarti che tutti i riferimenti puntino ai nuovi file.

## Pubblicazione su GitHub

**Opzione A – Repository dedicato Pages**
1. Crea un repo chiamato `baldas1992-bot.github.io` (oppure un nome a scelta).
2. Carica tutti i file della cartella del progetto nella root del repo.
3. In **Settings → Pages**, seleziona `Deploy from branch` e branch `main` (o `master`).
4. Il sito sarà raggiungibile all'URL indicato da GitHub Pages.

**Opzione B – Repo qualsiasi**
1. Crea un repo, es. `amli-site`.
2. Carica i file.
3. Vai in **Settings → Pages** e scegli come sorgente `main` (o la cartella `/root`).
4. Oppure usa un branch `gh-pages`.

## Personalizzazioni rapide
- In `index.html` sostituisci l'attributo `action` del form con la tua email o integra un servizio (es. Formspree).
- Aggiorna i contenuti testuali (servizi, bio, contatti).
- Per favicon, sostituisci `assets/logos/log-02.svg` con l'icona preferita.

## Prossimi step suggeriti
1. Pagine dedicate: `servizi.html`, `privacy.html`, `cookie.html`.
2. Modulo contatti con backend/servizio.
3. SEO base (title/description per pagina, OpenGraph).
4. Tracciamento consenso cookie (GDPR) se necessario.


## Contatti del sito
- Email: medicoinac@cia.it
- Cellulare: +39 351 373 3210

## Sitemap / Robots
Se usi un **project page** (es. `amli-site`), aggiorna gli URL in `sitemap.xml` e `robots.txt` a:
`https://baldas1992-bot.github.io/amli-site/`.
Se usi un **user page** (repo `baldas1992-bot.github.io`), lasciali come `https://baldas1992-bot.github.io/`.
