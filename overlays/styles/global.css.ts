import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  "boxSizing": "border-box"
})
globalStyle('body', {
  "all": "unset",
  "height": "1080px",
  "width": "1920px",
})
globalStyle('main', {
  "minHeight": "940px",
});
globalStyle('footer', {
  "minHeight": "140px"
})