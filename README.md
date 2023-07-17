# Домашнее задание к лекции «Unit-тестирование»

# ajs-Unit-tests-Mocking
[![Build status](https://ci.appveyor.com/api/projects/status/knqp8fbysjsu4275/branch/master?svg=true)](https://ci.appveyor.com/project/marinaustinovich/ajs-unit-tests-mocking/branch/master)

### **Важные моменты**

1. ESLint не должен выдавать ошибок.
2. Jest должен обеспечивать 100-процентное покрытие по строкам для тестируемых функций.
3. Ко всем задачам должен быть подключён AppVeyor и выставлен бейджик статуса.
4. Используйте `import`/`export`, а не `require`.

В качестве шаблона можете использовать [готовый проект](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе добавьте ссылки на ваши GitHub-проекты.

## Описание установки

```shell
npm init
# При инициалиализации в качестве тестовой команды указать:
# test command: jest --coverage
npm install --save-dev jest babel-jest @babel/core @babel/cli @babel/preset-env
npm install core-js@3
```

Не забудьте про `.babelrc` и `.browserslistrc`.

В `.babelrc`:
```json
{
  "presets": [["@babel/preset-env", {
    "useBuiltIns": "usage",
    "corejs": 3
  }]]
}
```

Запуск тестов:
```shell
npm test
```

## Mocking * (задача со звёздочкой)

**Важно: это необязательная задача.**

### Легенда

Вы написали функцию, которая взаимодействует с функцией `fetchData`. Она достаточно тяжёлая, т. к. взаимодействует с удалённым веб-сервером. Вы хотите протестировать свою функцию, в том числе как она обрабатывает ошибки. Чтобы «отвязаться» от этой тяжёлой зависимости, решили использовать механизм mocking.

### Описание

```javascript
// Демо-реализация функции fetchData (модуль http):
export default function fetchData(url) {
  throw new Error('Mock this!');
}
```

```javascript
// Ваша функция:
import fetchData from './http';

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);
  
  // TODO: логика обработки
  if (response.status === 'ok') {
     return `Ваш текущий уровень: ${response.level}`; 
  }
  
  return `Информация об уровне временно недоступна`;
}
```

Сделайте моки для функции `fetchData` и напишите тесты так, чтобы обеспечить 100-процентное покрытие тестами функции `getLevel` по строкам.

**Обратите внимание**: вам нужно писать тесты для функции `getLevel`.
