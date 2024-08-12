import Accordion from "./Accordion";
const faqs = [
  {
    title: "What is JavaScript?",
    text: "JavaScript is a programming language commonly used in web development to create interactive effects within web browsers.",
  },
  {
    title: "What is an array?",
    text: "An array is a data structure that can hold multiple values at once. These values can be accessed by their index.",
  },
  {
    title: "How do you declare a variable in JavaScript?",
    text: "You can declare a variable in JavaScript using `var`, `let`, or `const` depending on the scope and mutability you want.",
  },
  {
    title: "What is a function?",
    text: "A function is a block of code designed to perform a particular task. It is executed when it is invoked.",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion faqs={faqs} />
    </div>
  );
}

export default App;
