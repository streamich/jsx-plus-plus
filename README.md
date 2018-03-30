# JSX++

Missing features for your React JSX templates.

- Inline style prefixing
- Better class name syntax
- Dynamic CSS &mdash; [*demo!*](https://codesandbox.io/s/ryoy53q4mn)
- Set DOM element props
- Set DOM element attributes
- Add native DOM event listeners
- Micro life-cycles


Usage:

```js
require('jsx-plus-plus');
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
<div className={{a: true, b: false}}>
```

Result:

```html
<div class="bar 1">
<div class="a">
```


## Dynamic CSS

JSX++ will dynamically generate scoped CSS for your nodes.

```jsx
<div $css={{
    color: 'red', 
    '&:hover': {
        color: 'blue'
    }
}}>Hover me!</div>
```

Result:

```css
[data-css-123] {
    color: red;
}
[data-css-123]:hover {
    color: blue;
}
```

```html
<div data-css-123>Hover me!</div>
```


## DOM Element Props

Sets props on native DOM elements.

```jsx
<div $dom={{innerHTML: 'foobar'}} />
```

Result:

```html
<div>foobar</div>
```


## DOM Element Attributes

Sets attributes of DOM elements.

```jsx
<div $attr={{'aria-hidden': ''}} />
```

Result:

```html
<div aria-hidden=""></div>
```


## Native DOM Events

Add listeners to native DOM events.

```jsx
<button $on={{click: (event) => console.log('CLICKED')}}>Click me!</button>
```


## Micro Life-cycles

Add micro life-cycles to React DOM string elements.

```jsx
<div
  $attach={(el, props) => console.log('element attached: ', el, props)}
  $update={(el, props, oldProps) => console.log('element updated: ', el, props, oldProps)}
  $detach={(el, oldProps) => console.log('element detached: ', el, oldProps)}
/>
```
