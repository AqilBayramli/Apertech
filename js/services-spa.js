(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  function isSameOrigin(url) {
    try {
      var u = new URL(url, window.location.href);
      return window.location.origin === u.origin;
    } catch (e) {
      return false;
    }
  }

  function fetchDocument(url) {
    return fetch(url, { credentials: 'same-origin' })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(function (html) {
        var parser = new DOMParser();
        return parser.parseFromString(html, 'text/html');
      });
  }

  function swapContent(newDoc, newUrl) {
    var newContent = newDoc.querySelector('.content-side');
    var currentContent = document.querySelector('.content-side');
    if (!newContent || !currentContent) return false;

    // Replace main content
    currentContent.replaceWith(newContent);

    // Update sidebar service list (active state and links) if present
    var newServiceList = newDoc.querySelector('.service-list');
    var currentServiceList = document.querySelector('.service-list');
    if (newServiceList && currentServiceList) {
      currentServiceList.replaceWith(newServiceList);
    }

    // Update page header title and breadcrumb
    var newHeader = newDoc.querySelector('.page__header__title .header__image__text');
    var currentHeader = document.querySelector('.page__header__title .header__image__text');
    if (newHeader && currentHeader) {
      currentHeader.replaceWith(newHeader);
    }

    // Optionally swap header nav dropdown active state
    var newMenu = newDoc.querySelector('#nav-menu-container');
    var currentMenu = document.querySelector('#nav-menu-container');
    if (newMenu && currentMenu) {
      var currentServices = currentMenu.querySelector('.menu-has-children');
      var newServices = newMenu.querySelector('.menu-has-children');
      if (currentServices && newServices) {
        currentServices.replaceWith(newServices);
      }
    }

    // Re-run any scripts that rely on DOMContentLoaded if needed
    if (window.WOW) {
      try { new WOW().init(); } catch (e) {}
    }
    
    // Re-apply translations after content swap
    if (window.translationSystem) {
      window.translationSystem.applyTranslations();
    }
    
    return true;
  }

  function handleNavigation(url, push) {
    return fetchDocument(url)
      .then(function (doc) {
        var swapped = swapContent(doc, url);
        if (!swapped) return;
        if (push) {
          window.history.pushState({ url: url }, '', url);
        }
        // Ensure back-to-top or other listeners remain
        window.dispatchEvent(new Event('services:content:swapped'));
        
        // Re-apply translations after navigation
        if (window.translationSystem) {
          window.translationSystem.applyTranslations();
        }
      })
      .catch(function (err) {
        console.error('Navigation error:', err);
        window.location.href = url; // fallback full navigation
      });
  }

  ready(function () {
    var container = document.querySelector('.sidebar-side');
    if (!container) return;

    container.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || href === '#' || href.indexOf('javascript:') === 0) return;

      // Only intercept internal links to our services detail pages
      var url = new URL(href, window.location.href).toString();
      if (!isSameOrigin(url)) return;
      if (!/servicesPages\/services-detail-.*\.html$/i.test(url) && !/services-detail-.*\.html$/i.test(url)) return;

      e.preventDefault();
      handleNavigation(url, true);
    });

    window.addEventListener('popstate', function (ev) {
      var url = (ev.state && ev.state.url) ? ev.state.url : window.location.href;
      handleNavigation(url, false);
    });
    
    // Listen for language changes and re-apply translations to SPA content
    window.addEventListener('language:changed', function() {
      if (window.translationSystem) {
        window.translationSystem.applyTranslations();
      }
    });
  });
})();


