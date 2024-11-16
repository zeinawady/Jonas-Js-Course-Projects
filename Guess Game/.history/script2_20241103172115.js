'use strict';

const zeina={
    age:20,
    country:"Egypt",
    faculty:"CS",
    friends:['a','s','d']
};
zeina.age;
zeina['religion']="Islam";
zeina['school name']="ola";
console.log(zeina['school name']);
const word1='school';
const word2='name';
console.log(zeina[word1 +' '+ 'name'] );

const info=prompt("choose");
console.log (`zeina has ${zeina.friends.length} friends and best is ${zeina.friends[0]}`);
