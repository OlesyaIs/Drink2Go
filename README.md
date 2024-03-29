Выпускной проект профессии "Фронтенд-разработчик"

Студент: [Olesia Isichenko](isichenko.ok@gmail.com).
Затрачено времени: 39 часов 40 минут

— Техническое задание

**Макет:**

[Фронтенд Грейдирование - Drink2Go](https://www.figma.com/file/Sqn34c39hU24T2emXvQihC/Фронтенд-Грейдирование---Drink2Go?type=design&node-id=86:11851&mode=design&t=9ir4vgkBQZr1Gn47-1)

**Сборка:**

https://github.com/htmlacademy/html2-basic-template

Less https://github.com/htmlacademy/html2-basic-template/tree/less

Sass https://github.com/htmlacademy/html2-basic-template/tree/sass

**Критерии качества:**

[Грейдирование: Критерии  Фронтенд-разработчик ](https://www.notion.so/ef52c937c3c54e15bdd88020f9e679ea?pvs=21)

### **1. Общие технические требования**

- Адаптивность сетки: мобильная, планшетная и десктопная версии («фикс»).
- Адаптивность графики: ретинизация, векторные изображения.
- Используемая методология: БЭМ.
- Используемый препроцессор: Less или Sass.
- Используемые библиотеки: указаны в техническом задании.
- Кроссбраузерность: Chrome, Firefox, Safari.
- Используемый шрифт: Montserrat.

### **2. Пояснения для учащихся**

- Обязательными к вёрстке является первая страница — главная страница.
- Макеты верстаются постепенно: сначала мобильная версия, далее от мобильной версии к планшетной, а затем и к десктопной.
- Рекомендованные сборки и инструкции вы можете найти по ссылке выше.

### **3. Требования к поведению блоков**

- Между версиями (мобильная, планшетная, десктопная) сетка может быть как резиновой, так и фиксированной.
- При фиксированной сетке контентная область центрируется и не может быть уже макетной ширины. Фоны, которые упираются в края макета должны тянуться на всю страницу.
- Логотип и текст HTML Academy в футере являются ссылкой на [лендинг интенсива «HTML и CSS. Адаптивная вёрстка и автоматизация»](https://htmlacademy.ru/intensive/adaptive).
- Мобильное меню должно быть реализовано с использованием JS. Главное меню в мобильной версии должно открываться при нажатии на иконку «гамбургера». Когда меню открыто, иконка «гамбургера» заменяется на крестик. При нажатии на иконку с крестиком меню закрывается.
- Промо блок — это слайдер. Сверстать и оживить слайдер. Для оживления слайдера использовать [swiper.js](https://www.notion.so/d3b66d3e70d44fe2b5750a2e5e95079a?pvs=21). Смена слайда должна происходить менее, чем за 300ms.
- Изображение и название товара в каталоге — ссылки на страницу с описанием товара. Страницу с описанием товара реализовывать не нужно.
- Блок карты — интерактивная карта, ширина подстраивается под ширину вьюпорта (но не уже контентной ширины макета). На карте размещён маркер, центр карты соответствует центру блока в макете. Карта реализуется сторонней библиотекой Leaflet. Библиотеку можно подключить с помощью приложенного архива.

    [leaflet.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/07313867-a3ec-4449-a337-6d37172d67b7/leaflet.zip)

    Если при подключении карт возникнут проблемы отображения, вы можете использовать тайл 2Gis, вместо OpenStreetMap. Для этого достаточно поставить новый адрес тайла: [http://tile2.maps.2gis.com/tiles?x={x}& y={y}& z={z}](http://tile2.maps.2gis.com/tiles?x=%7Bx%7D&y=%7By%7D&z=%7Bz%7D).
