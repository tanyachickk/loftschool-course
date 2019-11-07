import './styles/main.pcss';
if (process.env.NODE_ENV === 'development') {
  require('file-loader!./index.pug');
}

import './scripts/preloader';
import './scripts/focus';
import './scripts/scroll';
import './scripts/menu';
import './scripts/skills';
import './scripts/works';
import './scripts/reviews';
import './scripts/parallax';
import './scripts/feedback-form';
