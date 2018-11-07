import { Factory, faker } from '@bigtest/mirage';

export default Factory.extend({
  owner: () => faker.name.findName(),

  status: () => faker.random.arrayElement(['Pending', 'Denied', 'Approved']),

  startDate: () => faker.date.recent(),
  endDate: () => faker.date.future()
});