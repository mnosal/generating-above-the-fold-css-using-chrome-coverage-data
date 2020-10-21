# Generowanie CriticalPath w Chrome / generating-coverage-css
Autor skryptu: https://www.daviddarke.dev/


Przygotowane na bazie https://www.daviddarke.dev/blog/generating-above-the-fold-css-using-chrome-coverage-data/

1. Uchruchomić stronę w Chrome
2. Włączyć Debugowanie kodu
3. Uruchomić zakładkę COVERAGE
4. Wczytać dane
5. Odfiltrować wg. kodu CSS
6. Zapisać plik JSON z kodem (wydzielone niezbędne sekcje)
7. Uruchomić okno konsoli i wpisać komendę:
~ node ./coverage-css.js path/to/coverage/file absolute/link/to/target/stylesheet

# path/to/coverage/file - URL do zapisanego pliku JSON na dysku
# absolute/link/to/target/stylesheet - link do pliku css tylko znajdującego się na WWW

przykład:
~ node ./coverage-css.js Coverage.json https://www.mywebsite.com/style.css

mnosal
