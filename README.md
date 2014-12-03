Themeable, cachable SVG loading spinner
=======================================


SVG loading spinner using CSS animation (and JS animation as fallback for browser that don't support CSS animation).

Takes the fill colour as parameter in the hash of the URL - so it is still only downloading and caching one version when using different colours.

```
<object type="image/svg+xml" data="/assets/loader.svg#color=%23f00" role="progressbar">
	<img src="/assets/fallback.gif" alt="loading" />
</object>
```

_Spinner falls back to gif in IE8_

Changing the colour
-------------------
Change the `#color=%23f00` (red = `f00`) part of the url to pass in different colours by hex (3 or 6) or name.