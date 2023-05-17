const findTheOldest = function(people) {
    let personAge = people.map((personAge) => {
        if (personAge.yearOfDeath === undefined) {
            personAge.yearOfDeath = new Date().getFullYear();
        }
        return personAge.yearOfDeath - personAge.yearOfBirth
    });
    const oldest = Math.max(...personAge);
    const index = personAge.indexOf(oldest);
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
