# Coding Quiz

## Summary
A short 6 question timesd quiz about basic coding. Score is based on the amount of time left, and scores are saved in a high score table.

### HTML & CSS
Used with Bootstrap to create some basic styling. Most of the elements were created using HTML and not JS, CSS was only used to add the 'hide' class to allow switching screens without having to generate all of the elements.

### JS
Used for all the functionality of the quiz. The questions were stored in an object along with the answers. A function would set the text of the html elements to match the question and the answers on the buttons. If the button that was pressed's text matched the correct answer, the question and answers buttons would change text to the next question. There is a user object for the score, that has the user initals as entered at the end of the quiz and the score set to the number of seconds left after finishing. the user object would be saved to the local storage to ensure the scores are saved after reloading the page.

## Challenges
The most challenging part was definitely finding a way to store the scores. I tried several options involving arrays, but an object turned out to be the best way. There was also a lot of bugs after each added function just as a result of being a bigger program, but most were straight foward fixes.
