import { Stroke } from "../../type"
import { createAction } from "@reduxjs/toolkit"

export const endStroke = createAction<{
    stroke: Stroke
    historyIndex: number
}>("endStroke")

export const undo = createAction<number>("UNDO") 

export const redo = createAction("REDO")