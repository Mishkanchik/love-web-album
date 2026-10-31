# 📸 Як додати фото в альбом

Поклади фото у відповідну папку, потім вкажи назву файлу в `js/app.js`.

## Структура папок

```
images/
  little-moments/   → сторінка "The little moments"   (4 слоти)
  sunny-days/       → сторінка "Sunny days"            (4 слоти)
  postcards/        → сторінка "Postcards"             (4 слоти)
  golden-hour/      → сторінка "Golden hour"           (4 слоти)
  little-details/   → сторінка "Little details"        (4 слоти)
  until-next-summer/→ сторінка "Until next summer"     (4 слоти)
  cover/            → зображення на обкладинці (необов'язково)
```

## Підтримувані формати
`.jpg` `.jpeg` `.png` `.webp` `.gif` `.avif`

## Як вказати фото в коді

Відкрий `js/app.js` і знайди масив `PAGES`. Для кожної сторінки є поле `photos`:

```js
{
  title: "The little moments",
  photos: [
    "photo1.jpg",   // слот 1 (верхній лівий)
    "photo2.jpg",   // слот 2 (верхній правий)
    null,           // слот 3 → порожній (можна завантажити кліком)
    "photo4.jpg",   // слот 4 (нижній правий)
  ],
}
```

- Вкажи `null` або просто пропусти — слот залишиться порожнім для ручного завантаження
- Можна вказати повний шлях: `"images/sunny-days/my-photo.jpg"` — або просто назву файлу, якщо фото у відповідній папці
