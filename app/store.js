
// Tranquility.Store = DS.Store.extend({
//   revision: 12,
//   adapter: DS.FixtureAdapter.create()
// });

Tranquility.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://localhost:3000',
	namespace: 'api'
});