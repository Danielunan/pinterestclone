Meteor.startup(function() {
  if(Books.find().count() === 0) {
    // Books
      Books.insert({title:'Beign Mortal', url:'http://ecx.images-amazon.com/images/I/91E6exaOufL.jpg', format: 'Ebook',catName:'Psychology'});
      Books.insert({title:'Eloquent JavaScript', url:'https://yuq.me/users/41/792/YO81mXVMpK.png', format: 'AudioBook',catName:'Tech'});
      Books.insert({title:'Principles Of Web Design', url:'https://yuq.me/users/27/445/MXtELWFw17.jpg', format: 'Ebook',catName:'Design'});
      Books.insert({title:'Book Business: Publishing Past, Present, and Future', url:'http://t1.gstatic.com/images?q=tbn:ANd9GcQVFPY3ootwhbkgJhly_AjvzM7QwHCCUzRSqvP7R0w1t7YXOD7F', format: 'Ebook',catName:'Business'});
      Books.insert({title:'Beign Mortal', url:'http://ecx.images-amazon.com/images/I/91E6exaOufL.jpg', format: 'Ebook',catName:'Psychology'});
      Books.insert({title:'Eloquent JavaScript', url:'https://yuq.me/users/41/792/YO81mXVMpK.png', format: 'AudioBook',catName:'Tech'});
      Books.insert({title:'Principles Of Web Design', url:'https://yuq.me/users/27/445/MXtELWFw17.jpg', format: 'Ebook',catName:'Design'});
  }
  if(Categories.find().count() === 0) {
    // Categories
    Categories.insert({name:'Tech'});
    Categories.insert({name:'Design'});
    Categories.insert({name:'Business'});
    Categories.insert({name:'Science'});
    Categories.insert({name:'Scifi'});
    Categories.insert({name:'Psychology'});
  }
});