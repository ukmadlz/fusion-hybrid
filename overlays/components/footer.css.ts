import { style } from '@vanilla-extract/css'
import { vars } from '../styles/var.css'

export const footer = style({
    "background": vars.color.white,
})
export const colourBar = style({
    "height": "1em",
    "width": "100%",
    "backgroundColor": vars.color.event,
})
export const footerContainer = style({
    "padding": "1em",
})
export const logoContainer = style({
})
export const logo = style({
    "height": "6em",
})