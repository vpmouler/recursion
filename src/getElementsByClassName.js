// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var documentBody = document.body;
  var arrayOfElements = [];
  var recursion = function(node) {
  	if ( node.classList.contains(className) ) {
  		arrayOfElements.push(node);
  	}
  	node.childNodes.forEach(function(ele) {
  		recursion(ele);
  	});
  }
  recursion(documentBody);
  return arrayOfElements;
};

// var array = ['seva','bert',1];
// var object = {name: 'seva', age: 23};

// var elements = document.getElementsByClassName('seva')