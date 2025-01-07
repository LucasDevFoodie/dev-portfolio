import '../styles/normalize.css' /* least important cascading priority */
import '../styles/style.css'
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/about.css'
import '../styles/components/featured.css'
import '../styles/components/work.css'
import '../styles/components/contact.css'
import '../styles/components/footer.css'
import '../styles/components/mobile.css'
import '../styles/utils.css' /* highest priority required */

import mobileNav from './utils/mobile-navs';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading'

mobileNav();
darkMode();
lazyLoading();