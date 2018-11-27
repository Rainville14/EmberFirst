import DS from 'ember-data';

export default DS.Store.extend({
	contacts: [
		{
			name: 'Matt',
			number: '715-571-6822'
		}
	]
})