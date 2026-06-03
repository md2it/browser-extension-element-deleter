# AGENT

## Всегда
- Не коммитить без запроса
- Сборка после каждой итерации кода
   - Из корня `browser-extensions/`: `cd element-deleter && npm run build` → stdout: `build ok`
- Рабочее расширение для загрузки в браузер лежит в `element-deleter/extension/`
   - `src/` — исходники разработки
   - `extension/app/` — собранный код приложения

## Если нет lib/node_modules
Из корня `browser-extensions/`: `cd lib && npm install`

## Сборка прод строго по запросу
Из корня `browser-extensions/`: `./lib/scripts/pack-extension.zsh element-deleter` → `dist/` и `.zip` в `PUBLICATION/`
