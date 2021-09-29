import { RootState } from './type'
import { Action, UPDATE_STROKE, BEGIN_STROKE, SET_STROKE_COLOR } from './actions'

const initialState: RootState = {
    currentStroke: { points: [], color: "#000" },
    strokes: [],
    historyIndex: 0
}

export const rootReducer = (
    state: RootState = initialState,
    action: Action
) => {
    switch (action.type) {
        case BEGIN_STROKE: {
            return {
                ...state,
                currentStroke: {
                    ...state.currentStroke,
                    points: [action.payload]
                }
            }
        }
        case UPDATE_STROKE: {
            return {
                ...state,
                currentStroke: {
                    ...state.currentStroke,
                    points: [
                        ...state.currentStroke.points,
                        action.payload
                    ]
                }
            }
        }
        case SET_STROKE_COLOR: {
            return {
                ...state,
                currentStroke: {
                    ...state.currentStroke,
                    ...{ color: action.payload }
                }
            }
        }
        default:
            return state
    }
}

