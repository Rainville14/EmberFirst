import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [{
			name: 'Matt',
			number: '715-571-6822'
		}]
	}
});
