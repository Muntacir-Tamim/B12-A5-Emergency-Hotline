4. What is Event Delegation? Why is it useful?

Definition: 
Event delegation is a technique where we attach an event listener to a parent element instead of multiple child elements, and then use event.target to detect which child triggered the event.

Why useful?
Better performance (fewer event listeners).
Handles dynamically added elements automatically.

<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>



document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    alert(" clicked: " + e.target.innerText);
  }
});








5. Difference between preventDefault() and stopPropagation()

 preventDefault() : 

 Stops the default browser action.

 code:
 document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); 
 });

 stopPropagation() :

 Stops the event from bubbling up to parent elements.

 code:
 document.querySelector("button").addEventListener("click", function(e) {
  e.stopPropagation(); 
 });

 preventDefault() → prevents default browser behavior.
 stopPropagation() → prevents event from traveling up the DOM.
