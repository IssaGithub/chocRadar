import { chocolate } from '../interfaces/chocolate';

export function transformProductData(chocolate: chocolate[]) {
  return chocolate.map((chocolate) => {
    if (!chocolate.prices || chocolate.prices.length === 0) {
      return {
        ...chocolate, //Shallow copy
        cheapestPricePer100g: 0,
        averagePricePer100g: 0,
        link: '',
      };
    }

    const pricePer100g = chocolate.prices.reduce(
      (sum, item) => sum + item.price,
      0,
    );
    const cheapestPricePer100g = Math.min(
      ...chocolate.prices.map((price) => (price.price / price.amount) * 100),
    );
    const chepeastLink = chocolate.prices.reduce((min, current) =>
      (current.price / current.amount) * 100 < (min.price / min.amount) * 100
        ? current
        : min,
    );
    return {
      ...chocolate,
      cheapestPricePer100g: cheapestPricePer100g,
      pricePer100g: pricePer100g,
      link: chepeastLink.link,
    };
  });
}
