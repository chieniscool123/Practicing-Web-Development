# What I learned

## CSS Parent-Child Relationship: Inherited vs Non-Inherited Styles
In CSS, certain properties **inherit** from parent elements to their child elements, while others do not. Understanding this distinction is essential for effectively styling HTML elements.

Some CSS properties **automatically inherit** from a parent element to its children. These are typically properties related to text and layout that are consistent throughout a document.

## Example: https://flukeout.github.io/

```css
.table {
  color: red;  /* Inherited by all child elements and the parent*/
}



.table * {
  color: red;  
  /* only inherited by the children */
}


 /* Self closing tage */
<a /> 

/* Universal */
*{

}

/* Adjacent Sibling Selector: Select all element B that directly follows element A */
A + B {

}

/* General Sibling Selector: This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one. */
/*  Does not count if one B is within another parent element  */
A ` B {

}

/* Child Selector: Select direct children of an element */
A > B {

}


/*  First Child Pseudo-selector: Select a first child element inside of another element */
:first-child  /* selects all first child elements. */
p:first-child /* selects all first child of <p> elements. */
div p:first-child  /* selects all first child of p elements that are inside a div. */



/* Only Child Pseudo-selector: Select an element that are the only element inside of another one. */
:only-child /* You can select any element that is the only element inside of another one. */ 
 span:only-child /*selects the span elements that are the only child of some other element. */
ul li:only-child /*selects the only li element that are in a ul. */


/* Nth Child Pseudo-selector: Select an nth element by its order in another element */
:nth-child(A)
 :nth-child(8) /*selects every element that is the 8th child of another element. */
 div p:nth-child(2) /*selects the second p in every div */


/* Nth Last Child Selector: Select an element by its order in another element, counting from the back */
:nth-last-child(A)
:nth-last-child(2) /* selects all second-to-last child elements. */


/* First of Type Selector */
:first-of-type

/* Nth of Type Selector */
:nth-of-type(A)
div:nth-of-type(2) /* selects the second instance of a div. */
.example:nth-of-type(odd) /* selects all odd instances of a the example class. */

/* Nth-of-type Selector with Formula:  */
/* The nth-of-type formula selects every nth element, starting the count at a specific instance of that element. */

:nth-of-type(An+B)
span:nth-of-type(6n+2) /* selects every 6th instance of a span, starting from (and including) the second instance. */

/* Only of Type Selector */
:only-of-type
p span:only-of-type /* selects a <span> within any <p> if it is the only span in there. */

/* Last of Type Selector */
:last-of-type

/* Empty Selector: Selects elements that don't have any other elements inside of them. */
:empty

/* Negation Pseudo-class: Select all elements that don't match the negation selector (x) */
:not(X)
:not(#fancy) /* selects all elements that do not have id="fancy". */
div:not(:first-child) /* selects every div that is not a first child. */
:not(.big, .medium) /* selects all elements that do not have class="big" or class="medium". */ 

/* Attribute Selector: An attribute does not always have a value, it can be blank! */
[attribute]  /*<span attribute="value">  */
a[href] /* selects all a elements that have a href="anything" attribute. */
[type] /* selects all elements that have a type="anything". attribute */
input[type="checkbox"] /* selects all checkbox input elements. */
[attribute^="value"] /* Select all elements with an attribute value that starts with specific characters */
[attribute$="value"] /* Select all elements with an attribute value that ends with specific characters */
[attribute*="value"] /* Select all elements with an attribute value that contains specific characters anywhere */

``` 


