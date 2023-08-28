const courseCatalogMetadata = [
 { title : 'Alegbra',
  description : 'All about Algebra',
  texts: [{
    author : 'James',
    price : 120,
    ISBN: '989-343-32342-432'
  }]


 }
];
const [course] = courseCatalogMetadata;
console.log("Output -->");
console.log(course);
const [{texts : textbooks }]=courseCatalogMetadata;
console.log(textbooks);
const [{title: details}] = courseCatalogMetadata;
console.log(details);
const [{texts:[textbook]}] = courseCatalogMetadata;
console.log(textbook);
const [{texts:[{ISBN}]}] = courseCatalogMetadata;
console.log(ISBN);