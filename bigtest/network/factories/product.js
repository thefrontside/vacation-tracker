import { Factory, faker } from '@bigtest/mirage';

export default Factory.extend({
  title: () => faker.commerce.productName(),
  date: () => faker.date.recent(),
});