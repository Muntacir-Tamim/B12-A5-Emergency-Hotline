## 3. What is Event Bubbling and how does it work?

Event Bubbling means when an event happens on an element, it first runs the event on that element, then “bubbles up” to its parent, then grandparent, and so on until document.

Example: If you click a <button> inside a <div> inside <body>:

First: button handler runs.<br>
Then: div handler runs.<br>
Finally: body handler runs.<br>




## 4. What is Event Delegation? Why is it useful?

Definition: 
Event delegation is a technique where we attach an event listener to a parent element instead of multiple child elements, and then use event.target to detect which child triggered the event.

Why useful?
Better performance (fewer event listeners).<br>
Handles dynamically added elements automatically.

<ul id="menu"><br>
  <li>Home</li><br>
  <li>About</li><br>
  <li>Contact</li><br>
</ul><br>



document.getElementById("list").addEventListener("click", function(e) {<br>
  if (e.target.tagName === "LI") {<br>
    alert(" clicked: " + e.target.innerText);<br>
  }<br>
});<br>








## 5. Difference between preventDefault() and stopPropagation()

 preventDefault():<br>
 Stops the default browser action.

 code:<br>
 document.querySelector("form").addEventListener("submit", function(e) {<br>
  e.preventDefault(); <br>
 });<br>

 stopPropagation() :<br>
 Stops the event from bubbling up to parent elements.

 code:<br>
 document.querySelector("button").addEventListener("click", function(e) {<br>
  e.stopPropagation(); <br>
 });<br>

 preventDefault() → prevents default browser behavior.<br>
 stopPropagation() → prevents event from traveling up the DOM.<br>
