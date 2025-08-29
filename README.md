# Emergency Service Directory

Emergency Service Directory — A practice project built with HTML, Tailwind CSS, and JavaScript DOM. Features hotline cards with copy & call actions, coin system, favorites, and dynamic call history. Fully responsive and designed to strengthen my DOM manipulation skills.

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

-  **`getElementById("idName")`** → finds **one element** with that exact ID. IDs are unique, so you usually get a single element.

-  **`getElementsByClassName("className")`** → finds **all elements** with that class. It gives back something like a list, not just one item.

-  **`querySelector("selector")`** → finds the **first element** that matches a CSS selector (like `#id`, `.class`, or `div p`).

-  **`querySelectorAll("selector")`** → finds **all elements** that match a CSS selector.

I think of it like this:
- ID = single thing
- Class = group of things
- Query selectors = more flexible, like CSS rules

----------

2. How do you **create and insert a new element into the DOM**?

-   First, you create an element using `document.createElement("tagName")`.
    
-   Then, you can add text, attributes, or classes to it.
    
-   Finally, you put it inside another element using `appendChild()` or `append()`.

Example:
```js
let newDiv = document.createElement("div");
newDiv.innerText = "Hello!";
document.body.appendChild(newDiv);

```
This will add a new `<div>` with the text "Hello!" at the end of the page.

----------

3. What is **Event Bubbling** and how does it work?

Event bubbling means when you click on a child element, the event also "bubbles up" to its parent, grandparent, and so on.

For example, if you click a button inside a `<div>`, the button’s click runs first, then the `<div>`’s click, and then the body’s click, unless you stop it.

So, the event goes from the **smallest element you clicked** → up to the **largest container**.

----------

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event delegation is when instead of adding a click listener to **every child element**, you add the listener to the **parent element**. Since events bubble up, the parent can “catch” the clicks from the children.

Why it’s useful:
-   You write **less code** (one listener instead of many).
-   It works for elements that are added **later** (dynamic elements).

Example idea: Instead of adding a click event to 100 list items, you add just **one event** to the `<ul>` and check which `<li>` was clicked.

----------

5. What is the difference between **preventDefault() and stopPropagation()** methods?

-   **`preventDefault()`** → stops the **default action** of an element. For example, clicking a link normally goes to another page. If you use `preventDefault()`, the link won’t open.
-   **`stopPropagation()`** → stops the event from **bubbling up** to parent elements. So only the clicked element handles the event, parents don’t get it.

Simple way to remember:
-   `preventDefault()` = “don’t do the normal browser action”
-   `stopPropagation()` = “don’t tell the parents about this event”
    
----------