class MyHashMap {
	constructor() {
		this.map = {};
	}
	/**
	 * @param {number} key
	 * @param {number} value
	 * @return {void}
	 */
	put(key, value) {
		this.map[key] = value;
	}

	/**
	 * @param {number} key
	 * @return {number}
	 */
	get(key) {
		const val = this.map[key];
		return val != undefined ? val : -1;
	}

	/**
	 * @param {number} key
	 * @return {void}
	 */
	remove(key) {
		delete this.map[key];
	}
}
