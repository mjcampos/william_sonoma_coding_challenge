import data from '../utils/data.json';

function items(state = data.groups, action) {
	switch(action.type) {
		default:
			return state;
	}
}

export default items;