export default function defaultScenario(server) {
  // Create server data by default
  server.create('request', {
    owner: 'Larry',
    status: 'Approved',
    startDate: new Date(2019, 0, 1),
    endDate: new Date(2019, 11, 31)
  });
  server.createList('request', 3);
}
