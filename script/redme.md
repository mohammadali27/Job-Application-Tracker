(1) * getElementById for quick single-element access.

    * getElementsByClassName if you need a live collection of class elements.

    * querySelector / querySelectorAll for flexible CSS-like selection.

 (2)* createElement only creates in memory – you must insert it to make it visible. 

    * Attributes can be added via setAttribute or direct properties id, className,src,  
      etc  
           
    * createTextNode can be used for adding plain text nodes explicitly.  
 (3)*When you click, type, or interact with an element, the event first triggers on the
     target element (the element you interacted with).

    *Then, the event bubbles up through its parent elements, all the way to the <html> or      
     <body> element, unless stopped.

    *"Events start at the deepest element you clicked and bubble up to the ancestors."

 (4)*Event delegation relies on event bubbling.

    *Always check event.target to see which child triggered the event.  

    *Often used with if (event.target.matches(selector)) or tagName checks.
 (5)*Stops the default browser action of an element.

    *Stops the event from bubbling up (or capturing down) the DOM tree.