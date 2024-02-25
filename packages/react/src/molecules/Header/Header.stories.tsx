import React from "react"
import Header from "./Header"
import "atomic-design-system-scss/lib/Header.css"

export default {
  title: "Atoms|Header",
}

export const Common = () => <Header leftText="Logo" rightText="Header" />

export const Custom = () => <Header leftText="Custom" rightText="Custom" />
