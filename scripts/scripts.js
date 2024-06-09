const firstButton = document.querySelector("button");
const secondButton = document.getElementById("add-blue-color");
const fisrtParagraph = document.body.children[2].children[1];
const thirdParagraph = document.body.children[2].children[3];
window.console.log(fisrtParagraph);
window.console.log(thirdParagraph);
function firsButtonFunction(event) {
  firstButton.previousElementSibling.remove();
}
function secondButtonFunction(event) {
  fisrtParagraph.classList.add("blue");
}
firstButton.addEventListener("click", firsButtonFunction);
secondButton.addEventListener("click", secondButtonFunction);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
