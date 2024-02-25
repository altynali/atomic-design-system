import React from "react"
import Footer from "./Footer"
import "atomic-design-system-scss/lib/Footer.css"

export default {
  title: "Atoms|Footer",
}

export const Common = () => <Footer />

export const Custom = () => <Footer leftText="Custom" rightText="Custom" />
