# JSX++

Missing features for your React JSX templates.

- Inline style prefixing
- Better class name syntax
- Dynamic CSS (work-in-progress)
- Set DOM element props
- Set DOM element attributes
- Add native DOM event listeners
- Micro life-cycles


Simply require this file:

```js
require('jsx-plus-plus/lib/patch');
```

Done!


## Inline Style Prefixing

Auto-prefixes inline styles, uses only required prefixes by your browser.

```jsx
<div style={{hyphens: 'auto'}} />
```

Result:

```html
<div style="-webkit-hyphens: auto">
```


## Better Class Names

Set class names using either `class` or `className` props. Use [`classnames`](https://www.npmjs.com/package/classnames)
syntax.

```jsx
<div class={[null, false, 'bar', undefined, 0, 1, { baz: null }, '']} />
```

Result:

```html
<div class="bar 1">
```


## Set DOM Element Props

Sets props on native DOM elements.

```jsx
<div $dom={{innerHTML: 'foobar'}} />
```

Result:

```html
<div>foobar</div>
```


## Set DOM Element Attributes

Sets attributes of DOM elements.

```jsx
<div $attr={{'aria-hidden': ''}} />
```

Result:

```html
<div aria-hidden=""></div>
```


## Add Native DOM Events

Catch native DOM events.

```jsx
<button $on={{click: () => console.log('CLICKED')}}>Click me!</button>
```


## Micro Life-cycles

Add micro life-cycles for DOM elements.

```jsx
<div
  $attach={(el, props) => console.log('element attached: ', el, props)}
  $update={(el, props, oldProps) => console.log('element updated: ', el, props, oldProps)}
  $detach={(el, oldProps) => console.log('element detached: ', el, oldProps)}
/>
```
