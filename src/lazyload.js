export default function () {

    let lazyHtmlImages = document.querySelectorAll('[data-lazy-src], [data-lazy-srcset]')
    let lazyCssImages  = document.querySelectorAll('.lazy-bg')
    let nativeSupport  = false

    // If the environment natively supports lazy loading
    if ('loading' in HTMLImageElement.prototype) {
      nativeSupport = true
      // Immediately swap the <img>/<picture> elements' attribute(s) as needed
      lazyHtmlImages.forEach(function(el) {
        handleHtmlImg(el)
      })
    }

    // If the environment supports IntersectionObserver
    if ('IntersectionObserver' in window) {
      // Get an intersection observer ready
      let observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(el) {
          if (el.intersectionRatio > 0) {
            handleHtmlImg(el.target)
            handleCssImg(el.target)
            observer.unobserve(el.target)
          }
        })
      })

      // If the environment does not natively support lazy loading
      if (!nativeSupport) {
        // Use the intersection observer on the <img>/<picture> elements
        lazyHtmlImages.forEach(function(el) {
          observer.observe(el)
        })
      }

      // Use the intersection observer on the css background images
      lazyCssImages.forEach(function(el) {
        observer.observe(el)
      })
    }
    // If the environment does not support IntersectionObserver, we're not going
    // to lazy-load anything, so we immediately update everything
    else {
      lazyHtmlImages.forEach(function(el) {
        handleHtmlImg(el)
      })
      lazyCssImages.forEach(function(el) {
        handleCssImg(el)
      })
    }

    // Handle the <img>/<picture> element's attribute(s) swap
    function handleHtmlImg(el) {
      if (el.dataset.lazySrc) {
        el.src = el.dataset.lazySrc
        delete el.dataset.lazySrc
      }
      if (el.dataset.lazySrcset) {
        el.srcset = el.dataset.lazySrcset
        delete el.dataset.lazySrcset
      }
    }

    // Handle the css background image element's class removal
    function handleCssImg(el) {
      if (el.classList.contains('lazy-bg')) {
        el.classList.remove('lazy-bg')
      }
    }

  }