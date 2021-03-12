
// You should implement your task here.

module.exports = function towelSort(matrix) {
	return typeof matrix !== 'undefined' && matrix.length > 0 ? sort(matrix) : []
};
function sort(matrix) {
	return matrix.reduce((arr, iteration, index) => index % 2 == 0 ? arr.concat(iteration) : arr.concat(iteration.reverse()), [])

};
