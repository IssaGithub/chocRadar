import { chocolate } from '../interfaces/chocolate';
import { prices } from '../interfaces/prices';

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

    const cheapestPricePer100g = cheapestPrice(chocolate.prices);
    const  pricePer100g = Math.min(
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

export function cheapestPrice(product:prices[]):number {
  return Math.min(...product.map(price=>price.price))
}
