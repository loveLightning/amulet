import { createGlobalStyle } from 'styled-components'

import { colors } from 'src/theme'

export const AppTheme = {
  ...colors,
}

export const GlobalStyles = createGlobalStyle`
  /* @font-face {
    font-family: 'Museo Sans Cyrl';
    src: url('../../fonts/museosanscyrl-300.woff2') format('woff2'),
        url('../../fonts/museosanscyrl-300.woff') format('woff'),
        url('../../fonts/museosanscyrl-300.ttf') format('truetype');
    font-style: normal;
    font-weight: 300;
  },

  @font-face {
    font-family: 'Museo Sans Cyrl';
    src: url('../../fonts/museosanscyrl-500.woff2') format('woff2'),
        url('../../fonts/museosanscyrl-500.woff') format('woff'),
        url('../../fonts/museosanscyrl-500.ttf') format('truetype');
    font-style: normal;
    font-weight: 500;
  },

  
  @font-face {
    font-family: 'Museo Sans Cyrl';
    src: url('../../public/fonts/museosanscyrl-700.woff2') format('woff2'),
        url('../../public/fonts/museosanscyrl-700.woff') format('woff'),
        url('../../public/fonts/museosanscyrl-700.ttf') format('truetype');
    font-style: normal;
    font-weight: 700;
  },

  @font-face {
    font-family: 'Museo Sans Cyrl';
    src: url('../../public/fonts/museosanscyrl-900.woff2') format('woff2'),
        url('../../public/fonts/museosanscyrl-900.woff') format('woff'),
        url('../../public/fonts/museosanscyrl-900.ttf') format('truetype');
    font-style: normal;
    font-weight: 900;
  },

  @font-face {
    font-family: 'TrajanPro3';
    src: url('../../public/fonts/TrajanPro3Regular.woff2') format('woff2'),
        url('../../public/fonts/TrajanPro3Regular.woff') format('woff'),
        url('../../public/fonts/TrajanPro3Regular.truetype') format('truetype');
    font-style: normal;
    font-weight: 400;
  }, 

   @font-face {
    font-family: 'Muller';
    src: url('../../public/fonts/MullerRegular.woff2') format('woff2'),
        url('../../public/fonts/MullerRegular.woff') format('woff'),
        url('../../public/fonts/MullerRegular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
  },

  @font-face {
    font-family: 'Muller';
    src: url('../../public/fonts/MullerBold.woff2') format('woff2'),
        url('../../public/fonts/MullerBold.woff') format('woff'),
        url('../../public/fonts/MullerBold.ttf') format('truetype');
    font-style: normal;
    font-weight: 700;
  },  */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Museo Sans Cyrl', sans-serif;
    color: ${colors.white};
  }

  a {
    text-decoration: none;
  }
  .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: #FFC344;
  }
  .form-control {
    border: 1px solid #989898;
    width: 100% !important;
    height: 26.23px !important;
    font-weight: 600;
    font-size: 11px !important;
    line-height: 13px;
    color: black;
    border-radius: 5px;
    padding-left: 11px;
    margin-bottom: 10px;
    border: 1px solid #989898 !important;
    &::placeholder {
      font-weight: 600;
      font-size: 11px;
      line-height: 13px;
      color: #989898 !important;
    }
    &:focus {
    border: 1px solid black !important;
  }
  } 

  .flag-dropdown {
    border: 1px solid #989898 !important;
  }
  .ReactModal__Overlay.ReactModal__Overlay--after-open {
    z-index: 1;
  }

  .form-control.nnn {
    height: 56px !important;
  }
`
