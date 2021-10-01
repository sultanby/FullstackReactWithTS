import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit"
import { reducer as historyIndex } from './modules/historyIndex/reducer' 
import { reducer as currentStroke } from './modules/currentStroke/reducer' 
import { reducer as strokes } from './modules/strokes/reducer'
import logger from 'redux-logger'
import { RootState } from "./type"

const middleware = [...getDefaultMiddleware(), logger]

export const store = configureStore({
    reducer: {
        historyIndex,
        currentStroke,
        strokes,
    }, middleware 
})
