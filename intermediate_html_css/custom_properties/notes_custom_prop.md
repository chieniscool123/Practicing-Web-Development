
# Defintion : Custome Properties
### Custom properties are essentially CSS variables that you define yourself, and they allow you to store values that can be reused throughout your styles. 
### Most common way to put them is in :root so they are globally available 

# Syntax for Custome Properties
### We declare it with a double hyphen (--) followed by a case-sensitive, hyphen-separated property name (color-error-text wouldn’t be the same as Color-Error-Text) 

# var (variable)
### To use or access a custom property, we use the var function as the value of of a CSS property and then place our custom property inside of the parenthesis


### Example: 
```css
.error-modal {
  --color-error-text: red;
  --modal-border: 1px solid black;
  --modal-font-size: calc(2rem + 5vw);

  color: var(--color-error-text);
  border: var(--modal-border);
  font-size: var(--modal-font-size);
}


```

# var fall back value
### var() function accept two parameters, second one is the fall back value incase the first option is invalid

```css var fall back
.fallback {
  --color-text: white;

  background-color: var(--undeclared-property, black);
  color: var(--undeclared-again, var(--color-text, yellow));
}


``` 

# Scope 
### 1. When you define a custom property in CSS, its scope determines where it can be accessed and used. 
### 2. The scope of a custom property is tied to the CSS selector where the property is declared.

## Scope rules
#### The custom property is available to the element where it's declared.
#### The custom property is also available to descendants (child elements) of that element.
#### The custom property is not available to elements outside of the scope (like unrelated elements).

``` cs scope example

//  --main-bg: red is only avaiable for cool div and its descendant (cool paragraph)
<div class="cool-div"> 
  <p class="cool-paragraph">Check out my cool, red background!</p>
</div>

<p class="boring-paragraph">I'm not in scope so I'm not cool.</p>

.cool-div {
  --main-bg: red;
}

.cool-paragraph {
  background-color: var(--main-bg);
}

.boring-paragraph {
  background-color: var(--main-bg);
}

```

# Media queries 
## Syntax 
#### @media (prefers-color-scheme: dark) means the styles inside this block will be applied only if the user has set their system preference to dark mode.
#### :after often used to add decorative elements or content without needing to modify the HTML.


# Inheritance control
## Syntax
#### The @property at-rule lets you explicitly state whether the property inherits or not.
#### The syntax: "<color>"; part defines what type of value the custom property (--box-color in your case) can accept. It will ignore anything that is not a color 
### You can also use initial-value as a fall back value for @property



``` css @property example

@property --box-color {
    syntax: "<color>";
    inherits: false;
    initial-value: cornflowerblue;
}

.parent {
    --box-color: green;  /* valid color */
    background-color: var(--box-color);
}

.child {
    width: 80%;
    height: 40%;
    background-color: var(--box-color);  /* inherits the value of --box-color from .parent */
}


