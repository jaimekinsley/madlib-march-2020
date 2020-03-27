console.log('hello world');
// GET A BUNCH OF DOM ELEMENTS

// go get html elements by their ids

// we'll need all the inputs to get the words FROM the user
const noun01Input = document.getElementById('noun01-input');

const noun02Input = document.getElementById('noun02-input');

const verb01Input = document.getElementById('verb01-input');

const verb02Input = document.getElementById('verb02-input');

const noun03Input = document.getElementById('noun03-input');

const verb03Input = document.getElementById('verb03-input');

const noun04Input = document.getElementById('noun04-input');

const verb04Input = document.getElementById('verb04-input');

const verb05Input = document.getElementById('verb05-input');

const noun05Input = document.getElementById('noun05-input');

const adjective01Input = document.getElementById('adjective01-input');

const noun06Input = document.getElementById('noun06-input');

const adjective02Input = document.getElementById('adjective02-input');

const noun07Input = document.getElementById('noun06-input');

const noun08Input = document.getElementById('noun06-input');

// we'll need span to put the WORDS INTO the madlib
const noun01Span = document.getElementById('noun01-span');

const noun02Span = document.getElementById('noun02-span');

const verb01Span = document.getElementById('verb01-span');

const verb02Span = document.getElementById('verb02-span');

const noun03Span = document.getElementById('noun03-span');

const verb03Span = document.getElementById('verb03-span');

const noun04Span = document.getElementById('noun04-span');

const verb04Span = document.getElementById('verb04-span');

const verb05Span = document.getElementById('verb05-span');

const noun05Span = document.getElementById('noun05-span');

const adjective01Span = document.getElementById('adjective01-span');

const noun06Span = document.getElementById('noun06-span');

const adjective02Span = document.getElementById('adjective02-span');

const noun07Span = document.getElementById('noun07-span');

const noun08Span = document.getElementById('noun08-span');

// we'll need the container that holds the madlib
const madlibContainer = document.getElementById('madlib-container');

// we'll need the container that holds all the inputs
const inputContainer = document.getElementById('input-container');

// we'll need the button so we add the event listener

const submitButton = document.getElementById('submit-button');

// ADD EVENT LISTENER

// this even listener should...
// GET the value of the inputs
function putAnswersIn(){
    const noun01InputValue = noun01Input.value;
    const noun02InputValue = noun02Input.value;
    const verb01InputValue = verb01Input.value;
    const verb02InputValue = verb02Input.value;
    const noun03InputValue = noun03Input.value;
    const verb03InputValue = verb03Input.value;
    const noun04InputValue = noun04Input.value;
    const verb04InputValue = verb04Input.value;
    const verb05InputValue = verb05Input.value;
    const noun05InputValue = noun05Input.value;
    const adjective01InputValue = adjective01Input.value;
    const noun06InputValue = noun06Input.value;
    const adjective02InputValue = adjective02Input.value;
    const noun07InputValue = noun07Input.value;
    const noun08InputValue = noun08Input.value;






    // use the input values to SET the value of our spans
    noun01Span.textContent = noun01InputValue;
    noun02Span.textContent = noun02InputValue;
    verb01Span.textContent = verb01InputValue;
    verb02Span.textContent = verb02InputValue;
    noun03Span.textContent = noun03InputValue;
    verb03Span.textContent = verb03InputValue;
    noun04Span.textContent = noun04InputValue;
    verb04Span.textContent = verb04InputValue;
    verb05Span.textContent = verb05InputValue;
    noun05Span.textContent = noun05InputValue;
    adjective01Span.textContent = adjective01InputValue;
    noun06Span.textContent = noun06InputValue;
    adjective02Span.textContent = adjective02InputValue;
    noun07Span.textContent = noun07InputValue;
    noun08Span.textContent = noun08InputValue;






    // hide the input container
    inputContainer.style.display = 'none';
    // reveal the madlib container
    madlibContainer.style.display = 'block';
}
// add event listener to the button on the CLICK event
submitButton.addEventListener('click', putAnswersIn);