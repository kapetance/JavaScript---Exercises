/*Write a JavaScript function to sort the following array of objects by title value. 
Sample object :

var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];
Expected result :

[[object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]*/

"use strict";
(function () {
    function sorter(a, b) {
        return a.title > b.title;
    }

    var library = [
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            libraryID: 1254
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            libraryID: 4264
        },
        {
            author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            libraryID: 3245
        }
   ];

    library = library.sort(sorter);
    console.log(library);
})();
