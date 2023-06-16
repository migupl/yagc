# yagc

Yet Another GitHub Corner as a Web Component.

Inspired by [GitHUb Corner](https://github.com/tholman/github-corners)

Good luck and I hope you enjoy it.

## Install

Copy the directory */components/yagc/* to any directory in your project.

## Getting started

To get started you need to import the Web Component

```html
<head>
    <script type="module" src="./components/yagc/yagc.js"></script>
</head>
<body>
    <ya-gc></ya-gc>
</body>
```

The _index.html_ file in the proyect looks as the following

![On the top-right corner](./docs/yagc-right-sample.webp)

## Attributes

Web Component *yagc* allows the following attributes:
- *hexFillColor*: the hexadecimal code color to fill. Default, '#151513',
- *hexColor*: the hexadecimal code color for the saluting cat. Default, '#fff',
- *leftCorner*: include to put on the left. Default, it is on the right.
- *url*: URL to be linked. Default, 'https://github.com/'

## An example with the GitHub corner on the left

The following HTML code

```html
<head>
    <script type="module" src="./components/yagc/yagc.js"></script>
</head>
<body>
    <ya-gc></ya-gc>
</body>
```

shows

![On the top-left corner](./docs/yagc-left-sample.webp)


## Helpers

A [container is used for hot reloading](https://github.com/migupl/hot-reloading-container) during development.

[Enter a color and generate nice Color Palettes](https://mycolor.space/)

## License

[MIT license](http://www.opensource.org/licenses/mit-license.php)
