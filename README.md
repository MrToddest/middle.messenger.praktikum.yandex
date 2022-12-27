# Проект Chat
# Я не многословен

Node 14+

git clone git@github.com:MrToddest/middle.messenger.praktikum.yandex.git
npm i
npm start

Макет - src/ui/макет.jpg

Деплой - https://tiny-beignet-8258be.netlify.app

Heroku - (wait)
# Тесты Mocha
    - Для прохождения тестов в package.json должен быть указан type=module
    - Для запуска приложения в package.json должен быть указан type=commonjs 

## Блок общения с ревьюером
C Heroku проблемы - для того что бы там выкатить образ, он требует верификацию, причем для нее нужно привязать номер карты

### P.S.
Тесты не могут пройти до конца, т.к. происходит ошибка при проверке 3000 порта. При локальном запуске - открывается 3000 порт. Подозрения на неправильно написанный тест. 