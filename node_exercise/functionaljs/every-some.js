function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		// SOLUTION GOES HERE
		return submittedUsers.every(function(submitted, index, array){
			return goodUsers.some(function(good, index, array){
				return good.id === submitted.id;
			});
		});
	};
}

module.exports = checkUsersValid;