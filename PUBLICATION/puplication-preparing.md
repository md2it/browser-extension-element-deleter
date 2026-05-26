# План публикации

Для публикации в https://chrome.google.com/webstore/ нужно подготовить Single purpose, Permission justification, скриншоты, описания.
Документ связан с [SHARED/PUBLICATION.md](../../SHARED/PUBLICATION.md)

---

## СКРИПТЫ

Общие скрипты — в [SHARED/scripts/](../../SHARED/scripts/). Запуск из корня проекта (`element-deleter/`).

| Задача | npm (в `package.json` проекта) | Скрипт |
|--------|--------------------------------|--------|
| Скрин «страницы» (welcome + settings + about) | `npm run screenshots:pages -- ru` | `capture-pages.mjs` |
| Обрезка живых скринов | `npm run screenshots:live` | `crop-live-screenshots.mjs` |

Для `capture-pages` в проекте нужен свой `PUBLICATION/scripts/welcome-seed-entry.ts` (данные welcome под расширение).

Пример в `package.json`:

```json
"screenshots:pages": "node ../SHARED/scripts/capture-pages.mjs",
"screenshots:live": "node ../SHARED/scripts/crop-live-screenshots.mjs"
```

---

## КАТАЛОГ PUBLICATION

- Создаётся в каталоге проекта перед публикацией
- Актуализируется перед повторной публикацией

Содержит:
- **uncut-live-screenshots/** -- необработанные скриншоты (обрезка: `npm run screenshots:live`)
- **[lang]/** -- каталоги под каждый язык
   - Набор языков для element-deleter: RU, EN, ES, FR, DE, ZN, AR
   - Для каждого языка создаётся отдельный каталог
   - В каждом:
      - description.txt -- файл без разметки, чтобы копировать текст целиком
      - массив скриншотов
- **complience.md** ответы на вопросы:
   1. Single purpose
   2-n. "Permission justification" Про каждое разрешение
- **public-key.pem** -- копирует человек из интерфейса магазина

---

## ПОДГОТОВКА СКРИНШОТОВ

Это базовый план подготовки скриншотов. *Для конкретного проекта план может быть изменён*.

По 2 скрина на каждый поддерживаемый язык:
1. Страницы
2. Живой скриншот 1
3. Живой скриншот 2

### Страницы
- 24-bit PNG (no alpha)
- Единый холст 1280×800
- На холсте наших страницы:
   - Приветственная
   - Настройки
   - About
- Вёрстка:
   - Между страницами и между краями справа-слева одинаковое пространство
   - Вертикальное выравнивание по середине холста
- Состояние дефолтное для всех страницами
- Для "Приветственной" только основной блок, без стрелочки
- Язык интерфейса показывать соответсвенно языку итогового изображения
- Итоговый результат назвать {lang}-pages.png

### Живой скриншот
- Взять скриншоты из **uncut-live-screenshots/**
- Обрезать до 1280×800 (24-bit PNG (no alpha))
- Обрезка для element-deleter:
   - Обрезать слева и сверху
   - Снизу не обрезать
- Назвать
   - live-1.png
   - live-2.png
   - ...
- Положить в каталог соответствующего языка
- Если не ясно, к какому языку относятся скриншоты, то нужно уточнить

---

## ЧЕКЛИСТ

Если готово, то заменить 🔲 на ✅

- 🔲 Каталог PUBLICATION/ создан и заполнен шаблонами и каталогами
- 🔲 public-key.pem
- 🔲 complience.md
- 🔲 RU
   - 🔲 description.txt
   - 🔲 скриншоты
- 🔲 EN
   - 🔲 description.txt
   - 🔲 скриншоты
- 🔲 ES
   - 🔲 description.txt
   - 🔲 скриншоты
- 🔲 FR
   - 🔲 description.txt
   - 🔲 скриншоты
- 🔲 DE
   - 🔲 description.txt
   - 🔲 скриншоты
- 🔲 ZN
   - 🔲 description.txt
   - 🔲 скриншоты
- 🔲 AR
   - 🔲 description.txt
   - 🔲 скриншоты
