Themeable, cachable and CSS animated SVG loading spinner
========================================================

Takes the fill colour as parameter in the hash of the URL - so it is still only downloading and caching one version (stored in localStorage when available) when using different colours.

```
<div class="load-spinner" data-colour="#fdbc33" data-fallback-class="no-svg-fallback-orange"></div>
```

Browser Support
---------------
Tested in: IE8\*\*, IE9\*, IE10, IE11, FF 33, Chrome 38, Opera 26, Safari 6.1, Safari 8, Android 4, Android 4.4, iOS 8


\* Spinner falls back to JS animation as fallback for [browser that don't support CSS animation](http://caniuse.com/#feat=css-animation) - update this animation if you use a differnt style.

\*\* Spinner falls back to gif in IE8 and other [browsers that don't support SVG](http://caniuse.com/#feat=svg) and/or the object tag.

Changing the colour
-------------------
Change the `data-colour="#fdbc33"` tag and update `data-fallback-class="no-svg-fallback-orange"` to switch the IE8 fallback.