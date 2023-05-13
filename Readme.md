## TLDR

Interfaces are made of a wild combination of materials. Some [glue](https://github.com/polmoneys/tmk) for you.

### Mental model 

Two primitives made of CSS `flexbox` and `grid`
to craft core layout patterns.

Intrinsic sizes 'grids' kill the need for CSS `media queries`, `grid-template-{*}` and `margin-{*}:auto` makes trivial to avoid wrapper elements for layout. 

Goal is a portable `index.css` file with `[data-{*}=""]` to lay on elements, implemented with React for now. 

🌶 takes like `box-shadow` and `outline` instead of `border`, `grid-stack-areas` instead of `positon:absolute`...

### Inspiration

> Our requirements are more modest but at the same time more responsible:
> buildings, furniture, drinking glasses may well be consumer items that
> we can destroy without regret after they have served for some short or
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic
> enjoyment from observing them in use.

Erik Gunnar Asplund on **Swedish Grace**.
