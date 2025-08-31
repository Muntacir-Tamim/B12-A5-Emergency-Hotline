5. Difference between preventDefault() and stopPropagation()

 preventDefault() : 

 Stops the default browser action.

 code:
 document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); 
 });

 stopPropagation() :

 Stops the event bubbling (or capturing) so it doesn’t move to parent elements.

 code:
 document.querySelector("button").addEventListener("click", function(e) {
  e.stopPropagation(); 
 });

 preventDefault() → prevents default browser behavior.
 stopPropagation() → prevents event from traveling up the DOM.
