import { Factory, faker } from '@bigtest/mirage';

export default Factory.extend({
  owner: () => faker.name.firstName(),

  status: () => faker.list.cycle('Pending', 'Denied', 'Approved'),

  startDate: () => faker.date.recent(),
  endDate: () => faker.date.future()
});