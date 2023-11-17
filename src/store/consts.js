export const consts = {
  //Mutations
  SET_VALUE: 'setValue',
  SET_NAME_TITLE: 'setNameTitle',
  SET_COST: 'setCost',
  SET_DESCRIPTION: 'setDescription',
  SET_COUNT: 'setCount',
  SET_DATE: 'setDate',
  SET_PRODUCT: 'setProduct',
  SET_PRODUCTS_LIST: 'setProductsList',
  SET_LOADING: 'setLoading',
  SET_ALERT: 'setAlert',
  LOADING_PRODUCTS_LIST: 'loadingProductsList',
  CROSS_OUT: 'crossOut',
  SORT_PRODUCTS_LIST: 'sortProductsList',
  REMOVE_LOCAL_PRODUCT: 'removelocalProduct',
  ALERT_CHANGE: 'alertChange',
  //Actions
  CREATE_PRODUCT: 'createProduct',
  LOAD_PRODUCTS: 'loadProducts',
  GET_CROSS_OUT_PRODUCT: 'getCrossOutProduct',
  REMOVE_PRODUCT: 'removeProduct',
  GET_ALERT: 'getAlert',
  //Data states
  ARR_PRIVATE_PERSON: [
    [
      { type: 'subheader', title: 'Карты и вклады' },
      {
        title: 'Кредитные карты',
        value: 1,
      },
      {
        title: 'Дебетовые карты',
        value: 2,
      },
      {
        title: 'Вклады',
        value: 3,
      },
      {
        title: 'Кэшбек',
        value: 4,
      },
    ],
    [
      { type: 'subheader', title: 'Потребительские кредиты' },
      {
        title: 'Зарплатные клиенты',
        value: 1,
      },
      {
        title: 'Действующая ипотека',
        value: 2,
      },
      {
        title: 'Программа «Под залог»',
        value: 3,
      },
      {
        title: 'Образование / мед услуги',
        value: 4,
      },
    ],
    [
      { type: 'subheader', title: 'Ипотечные программы' },
      {
        title: '«Ключевой процент»',
        value: 1,
      },
      {
        title: '«Дом мечты»',
        value: 2,
      },
      {
        title: '«В залоге»',
        value: 3,
      },
      {
        title: 'Господдержка',
        value: 4,
      },
      {
        title: 'Коммерческая недвижимость',
        value: 5,
      },
      {
        title: 'ООО «МегаЛайн»',
        value: 6,
      },
      {
        title: 'ООО «Корнер»',
        value: 7,
      },
      {
        title: 'ООО «Сабурбери»',
        value: 8,
      },
    ],
    [
      { type: 'subheader', title: 'Автокредиты' },
      {
        title: 'Программа «Корпоративная»',
        value: 1,
      },
      {
        title: 'Программа «Счастливая дорога»',
        value: 2,
      },
      { type: 'subheader', title: 'Рефинансирование' },
      {
        title: 'Потребительский кредит',
        value: 1,
      },
      {
        title: 'Ипотека',
        value: 2,
      },
      {
        title: 'Автокредит',
        value: 3,
      },
    ],
    [
      { type: 'subheader', title: 'Полезное' },
      {
        title: 'Мобильное приложение',
        value: 1,
      },
      {
        title: 'Банкоматы и офисы',
        value: 2,
      },
      {
        title: 'РКО',
        value: 3,
      },
      {
        title: 'Льготы',
        value: 4,
      },
      {
        title: 'Аренда сейфов',
        value: 5,
      },
      {
        title: 'Драгоценные металлы',
        value: 6,
      },
    ],
  ],
  ARR_BUSINESS: [
    [
      { type: 'subheader', title: 'Малому и среднему бизнессу' },
      {
        title: 'Кредиты',
        value: 1,
      },
      {
        title: 'Банковские карты',
        value: 2,
      },
      {
        title: 'Депозиты',
        value: 3,
      },
      {
        title: 'Лизинг',
        value: 4,
      },
      {
        title: 'Эквайринг',
        value: 5,
      },
      {
        title: 'РКО',
        value: 6,
      },
    ],
    [
      { type: 'subheader', title: 'Финансовым корпорациям' },
      {
        title: 'Межбанковские операции',
        value: 1,
      },
      {
        title: 'Инкассация',
        value: 2,
      },
      {
        title: 'ЛОРО счет',
        value: 3,
      },
    ],
    [
      { type: 'subheader', title: 'Полезное' },
      {
        title: 'Банковские гарантии',
        value: 1,
      },
      {
        title: 'Инкассация',
        value: 2,
      },
      {
        title: 'ВЭД и валютный контроль',
        value: 3,
      },
      {
        title: 'Аренда сейфов',
        value: 4,
      },
    ],
  ],
  ARR_BANK: [
    [
      { type: 'subheader', title: 'О банке' },
      {
        title: 'Открытая информация',
        value: 1,
      },
      {
        title: 'Общая информация',
        value: 2,
      },
      {
        title: 'Контакты и реквизиты',
        value: 3,
      },
      {
        title: 'Рейтинг',
        value: 4,
      },
      {
        title: 'Пресс-центр',
        value: 5,
      },
    ],
  ],
  //Mutations
  SET_VALUE_SEARCH: 'setValueSearch',
  SET_STATE_SEARCH: 'setStateSearch',
}
