import React, { FunctionComponent } from "react"
import { KeyboardWithInstrument } from "../Keyboard/WithInstrument" 
import { NoAudioMessage } from "../NoAudioMessage/NoAudioMessage" 
import { useAudioContext } from "../AudioContextProvider/useAudioContext"

export const Main: FunctionComponent = () => {
    const AudioContext = useAudioContext() 
    return !!AudioContext ? (
        <KeyboardWithInstrument />) : (
            <NoAudioMessage />
        )
}