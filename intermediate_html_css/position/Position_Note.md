
# Link: https://developer.mozilla.org/en-US/docs/Web/CSS/position


# Normal Flow 
#### 1. element is positioned based on the default rules of the web page layout, which follow a top-to-bottom, left-to-right order.

# Static Position
#### 1. The default position. No need to specify it
#### 2. It ignores any position-related properties like top, left, right, and bottom.


# Relative Position
#### 1.By default, an element is in the "normal flow" of the page, meaning it sits exactly where it would naturally appear.
#### 2.The element is still part of the flow. Other elements around it are not affected by its new position, and they will not move to fill the space.
#### 3.You’re only moving it VISUALLy; the space it originally occupied remains in the document.


# Absolute Position
#### 1.In contrast to relative position, an element that is absolutely positioned is taken out of the flow; thus, other elements are positioned as if it did not exist.
#### 2. The absolutely positioned element is positioned relative to its nearest positioned ancestor 
#### 3. If a positioned ancestor doesn't exist, it is positioned relative to the containing block of the document's root element.

# Fixed Position (https://www.youtube.com/watch?v=8fQWx-d5qc8) (2:00 mark)
#### 1. Good for keeping links at the top of your page
#### 2. Fixed position refers to an element on a webpage or screen that stays in the same place even when you scroll. 
#### 3. Positioned relative to VIEWPORT (the visible part of the webpage)

# Sticky Position (https://www.youtube.com/watch?v=pYegv7O21Lo)
#### 1.Sticky elements "stick" in place as the user scrolls down the page, but only after they've reached a certain point in the scrolling.
#### 2.  The sticky element will remain fixed until it reaches the end of its parent container or the nearest scrollable ancestor. Once this boundary is reached, the sticky element will stop sticking and scroll away with the rest of the content.