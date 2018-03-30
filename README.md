# JSX++

Missing features for your React JSX templates.

- Inline style prefixing
- Better class name syntax
- Dynamic CSS
- Set DOM element props
- Set DOM element attributes
- Add native DOM event listeners


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

