//JQuery
//Code JS
var listItems = document.querySelectorAll('li');
var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'starred';
}
//Et voici à présent un morceau de jQuery qui fait la même chose :

$("li").addClass("starred");