# lazyload
lazyload is a little bit of JavaScript (826 bytes) that tries to polyfill lazy loading support for <code>&lt;img&gt;</code> elements, <code>&lt;picture&gt;</code> elements, and CSS background images.

If lazy loading is [natively supported already](https://caniuse.com/loading-lazy-attr), lazyload will know and get out of the way.

## Demo
https://theoutfit-lazyload.netlify.app/

## How to Implement
1. Install it: <kbd>npm i @theoutfit/lazyload --save</kbd>
2. Call it: <code>lazyload()</code>
3. Adjust your code:
   * change every <code>src</code> attribute to <code>data-lazy-src</code>
   * change every <code>srcset</code> attribute to <code>data-lazy-srcset</code>
   * add a <code>loading="lazy"</code> attribute to every <code>img</code> element
   * add a <code>lazy-bg</code> class to every element with a background-image
   * add this rule to your CSS:
     ```css
     .lazy-bg {
       background-image: none !important;
      }
     ```

## License
Fadable is available under the [MIT license](https://github.com/fromtheoutfit/lazy-load/blob/master/LICENSE).