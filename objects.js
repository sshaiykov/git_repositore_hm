//Task 4
const user = {
    age: 16,
    name: 'Dean Azimbaev'
    }
    user.name = "Roman Zaviyzkin"
    user.age = 25
console.log(user)

//Task 5

const user1 = {};
    const user2 = {
    age: 23
    };
    const user3 = {
    age: 23,
    name: ''
    }
    const user4 = {
    age: '',
    name: ''
    }
    const user5 = {
    age: 23,
    name:'Dean'
    }
    function hasRequiredField(user) {
        if(user.name && user.age) {
            return true
        }
        return false
    }
    console.log(hasRequiredField(user5))
