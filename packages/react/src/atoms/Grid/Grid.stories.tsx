import React from "react"
import Grid from "./Grid"
import "atomic-design-system-scss/lib/Grid.css"
import "atomic-design-system-scss/lib/Utilities.css"
import { Color } from "../Color"
import { Spacing } from "atomic-design-system-foundation"

export default {
  title: "Atoms|Grid",
}

export const Common = () => (
  <Grid>
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />

    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
  </Grid>
)


export const ColumnGrid = () => (
  <Grid columns={3}>
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />

    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
    <Color hexCode="#000" width={Spacing.xxxl} height={Spacing.xxxl} />
  </Grid>
)
