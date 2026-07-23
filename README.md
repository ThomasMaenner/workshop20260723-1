# Meine Vibe-Coding-Website

Diese Website wurde im Vibe-Coding-Kurs mit VS Code, Continue und GitHub Pages erstellt.

## Die drei Dateien

- **index.html** – der Inhalt (Texte, Überschriften, Struktur)
- **styles.css** – das Design (Farben, Schrift, Abstände, Layout)
- **script.js** – das Verhalten (Mobile-Menü, sanftes Scrollen)

## Bevor du der KI einen Prompt gibst

Überlege dir kurz drei Dinge:

1. **Was** soll sich ändern? (ein Text, eine Farbe, eine neue Sektion …)
2. **Wo** ist das im Code? (siehe Tabelle unten)
3. **Wie** soll das Ergebnis wirken? (ein Beispiel, Vorbild oder Stimmung hilft der KI)

Je genauer diese drei Punkte sind, desto genauer wird das Ergebnis. Ein Beispiel-Prompt:

> "Ändere die Hero-Section in index.html so, dass sie für ein Café wirbt.
> Behalte Struktur und CSS-Klassen bei, ändere nur die Texte."

## Wo ändere ich was?

| Ich möchte …                        | Datei      | Wo genau |
| ------------------------------------ | ---------- | -------- |
| Texte/Überschriften ändern           | index.html | zwischen den `<h1>`, `<h2>`, `<p>` Tags |
| Farben oder Schriftart ändern        | styles.css | ganz oben im Block `:root { ... }` |
| Eine Karte hinzufügen/entfernen      | index.html | `<article>`-Block in `.cards` kopieren/löschen |
| Einen Menüpunkt hinzufügen           | index.html | neuen `<a href="#id">` in `.nav-links` + passende `<section id="id">` |
| Rundungen/Abstände ändern            | styles.css | `--radius` in `:root`, bzw. `padding`-Werte |
