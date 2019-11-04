// Question 1
var user = {};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;


// Question 2
var fruit = {
apple: 20,
pear: 20,
peach: 10
};
var num_fruit = 0;
for (var key in fruit) {
    num_fruit += parseInt(fruit[key]);
}
console.log(num_fruit);