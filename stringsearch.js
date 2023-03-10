var abc="while we were walkin we were watvhing window washers washing washington windows with warm waters";
console.log(abc.indexOf('were'));//this returns the first index of specified item
console.log(abc.lastIndexOf('were'));//this returns the last index of the 'were
console.log(abc.indexOf('tech'));//if this is not found, -1 is returned

//also we can specify the position to start the search

console.log(abc.indexOf('were',18));
//we can also use the search( ) which actually does not require a secong argument
console.log(abc.search('window'));

//we can also use match( ) to return all the elements in ana rray that matches a sarched item.

console.log(abc.match(/wa/g));//this usually return an array containing the searched items in all locations it can be found.

//includes() this is used to check an aarray and return true or false if an element exist
console.log(abc.includes('washington'));//try to note however that this method is case sensitive