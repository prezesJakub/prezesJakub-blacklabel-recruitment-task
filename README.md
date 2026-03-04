# Data Visualization - Dashboard danych e-commerce

## Opis projektu

Projekt przedstawia analizę danych zamówień pochodzących z platformy e-commerce (plik `data.json`).  
Celem zadania było:

- zrozumienie struktury danych,
- wybór kluczowych informacji,
- ich sensowna agregacja,
- przygotowanie maksymalnie 3 czytelnych wizualizacji.

Priorytetem była selekcja istotnych danych oraz przejrzystość prezentacji, a nie pokazanie wszystkich dostępnych informacji.

---

## Wybór danych i sposób agregacji

Po analizie struktury pliku zdecydowałem się skupić na metrykach związanych z przychodem, ponieważ:

- przychód bezpośrednio odzwierciedla kondycję biznesową,
- umożliwia porównanie wyników w czasie,
- pozwala analizować rynki (kraje) oraz strukturę sprzedaży (kategorie).

Wykorzystane pola:

- `timestamp`
- `country`
- `category`
- `quantity`
- `unitPrice`

Na ich podstawie wyliczono:

- **Przychód dla pojedynczego zamówienia** → `quantity × unitPrice`
- Zagregowany przychód:
  - według daty
  - według kraju
  - według kategorii produktów

Dodatkowo obliczono podstawowe wskaźniki KPI:
- całkowity przychód,
- liczba zamówień,
- średnia wartość zamówienia.

---

## Przygotowane wizualizacje

Zgodnie z wymaganiami przygotowano maksymalnie 3 wykresy.

### Przychód w czasie (wykres liniowy)

**Cel:**  
Identyfikacja trendów sprzedażowych oraz zmian w czasie.

**Dlaczego wykres liniowy?**  
Najlepiej sprawdza się przy danych typu time-series i umożliwia intuicyjne śledzenie trendów.

---

### Przychód według kraju (wykres słupkowy)

**Cel:**  
Porównanie efektywności sprzedaży między rynkami.

**Dlaczego wykres słupkowy?**  
Pozwala łatwo porównać wartości pomiędzy kategoriami oraz uporządkować je malejąco.

---

### Przychód według kategorii produktów (wykres słupkowy)

**Cel:**  
Analiza struktury sprzedaży oraz identyfikacja działów z najlepszymi wynikami sprzedaży.

**Dlaczego wykres słupkowy?**  
Zapewnia czytelne porównanie między kategoriami i umożliwia szybkie wychwycenie liderów sprzedaży.

---

## Decyzje projektowe

Aby poprawić czytelność i odbiór wizualny:

- dodano sekcję KPI z kluczowymi wskaźnikami na górze,
- zastosowano przełączane zakładki (tabs) zamiast wyświetlania wszystkich wykresów jeden pod drugim,
- zastosowano formatowanie walutowe dla lepszej czytelności danych,
- ograniczono interfejs do wersji desktopowej (zgodnie z wymaganiami),
- zachowano minimalistyczny, czytelny układ inspirowany dashboardami analitycznymi.

Projekt koncentruje się na prostocie i przejrzystości zamiast nadmiernej liczby funkcji.

## Zastosowana technologia

- React (Vite)
- Recharts (wizualizacja danych)
- JavaScript
- CSS (własne style)

---

## Uruchomienie projektu

### Wymagania

- Node.js (zalecana wersja 18+)
- npm

### Kroki

1. Zainstaluj zależności

```bash
npm install
```

2. Uruchom serwer deweloperski

```bash
npm run dev
```

3. Otwórz w przeglądarce

```
http://localhost:5173
```