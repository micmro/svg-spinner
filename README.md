Themeable and cachable animated SVG loading spinner
===================================================

It is only downloads one version of the SVG, stores in localStorage (when available), and colours it based on the `data-colour` attribute in the holder element. This way the browser only requests the spinner once (the one used here is 2.2kb gzip, including the CSS animation).
It still needs some JS for feature detection, fetch the SVG, inject the colour informantions and for the non-css-transformation fallback. I've used jQuery here, since I use it in most projects, but you can easily switch it to vanilla JavaScript.

```
<div class="load-spinner" data-colour="#fdbc33" data-fallback-class="no-svg-fallback-orange"></div>
```

Browser Support
---------------
Tested in: IE8\*\*, IE9\*, IE10, IE11, FF 33, Chrome 38, Opera 26, Safari 6.1, Safari 8, Android 4, Android 4.4, iOS 8


\* Spinner falls back to JS animation as fallback for [browser, like IE9, that don't support CSS animation](http://caniuse.com/#feat=css-animation) - update this animation if you use a differnt style.

\*\* Spinner falls back to gif in IE8 and other [browsers that don't support SVG](http://caniuse.com/#feat=svg) and/or the object tag.

Changing the colour
-------------------
Change the `data-colour="#fdbc33"` attribute and update `data-fallback-class="no-svg-fallback-orange"` to switch the class IE8 uses as a fallback.

Reason for this approach
-------------------------
An inline `svg` tag is not beeing cached seperatly, an SVG in an `img` tag can only be animated with [SMIL](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL) and that's [not supported in IE yet](http://caniuse.com/#feat=svg-smil).
So I [initially](https://github.com/nurun/svg-spinner/tree/10072e371ad4344f49fc9d38cedbd2cf8abbfdc6) used the `object` tag to load the SVG, which was nice, since it was fully self contained (including CSS and JS), but unfortunatly all browser cache each instance seperatly. Additionally even when the type is defined, IE is first issuing a [`HEAD`](https://ochronus.com/http-head-request-good-uses/) request to determin the content-type, which adds another round trip to this sollution.
