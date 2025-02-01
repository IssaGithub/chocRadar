export const mockChock = {
  id: '1',
  name: 'Sesam',
  brand: 'Ritter-Sport',
  currency: 'EUR',
  prices: [
    {
      price: 2.09,
      shop: 'Ritter-Sport',
      link: 'https://example.com/rs-sesam-rs',
      unit: 'g',
      amount: 100,
    },
    {
      price: 1.99,
      shop: 'Amazon',
      link: 'https://example.com/rs-sesam-am',
      unit: 'g',
      amount: 100,
    },
    {
      price: 3.49,
      shop: 'REWE',
      link: 'https://example.com/rs-sesam-re',
      unit: 'g',
      amount: 200,
    },
  ],
  nutrition: {
    fat: {
      total: 38,
      saturated: 19,
    },
    carbohydrates: {
      total: 42,
      sugar: 40,
    },
    protein: 11,
    salt: 1,
  },
};
