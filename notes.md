# CSS Positioning

* Inline elements cannot have specified widths.
* Setting an element with fixed positioning does not transform them into inline elements.
  `position: fixed`

* `position:fixed` corresponds to the viewport, not any parent containing unit.

* When dealing with an element in which that elements border is extending beyond the viewport, using `box-sizing: border-box` will force the element to account for any border and padding in the values given for the element's width and height. [Reference: MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

* When attempting to have an element fill the to the edge of its container, use `margin: 0` and `left: 0`.

* In order to use `z-index` to position elements on top of one another, the `position` element must be set.

* `position: fixed` and `position: absolute` both take the element out of the document flow.

