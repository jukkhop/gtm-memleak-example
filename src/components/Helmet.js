import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

// Google Tag Manager is loaded here

/* eslint-disable */
const Helmet = () => (
  <ReactHelmet>
    <script>
      {(function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js',
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-57BQDRS')}
    </script>
  </ReactHelmet>
);

export default Helmet;
