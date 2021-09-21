import React, { FunctionComponent, useEffect } from "react"
import { useAudioContext } from "../AudioContextProvider/useAudioContext"
//import { useSoundfont } from "../../adapters/Soundfont/useSoundfont"
import { Keyboard } from "../Keyboard/Keyboard"
import "./style.css"
import { useInstrument } from "../../state/Instrument/Context"
//import { SoundfontProvider } from "../../adapters/Soundfont/SoundfontProviderClass"
import { withInstrument } from "../../adapters/Soundfont/withInstrument"

const WrappedKeyboard = withInstrument(Keyboard)

export const KeyboardWithInstrument: FunctionComponent = () => {
    const AudioContext = useAudioContext()!
    const { instrument } = useInstrument()

    return (
        <WrappedKeyboard AudioContext={AudioContext} instrument={instrument} />
    )
    /*
    const { loading, current, play, stop, load } = useSoundfont({
        AudioContext
    })
    useEffect(() => {
        if (!loading && instrument !== current) load(instrument)
    }, [load, loading, current, instrument])
    return <Keyboard loading={loading} play={play} stop={stop} />
    //Provider using
    
    return (
        <SoundfontProvider
            AudioContext={AudioContext} instrument={instrument}
            render={(props) => <Keyboard {...props} />}
        />)
    //render props
    */
    
}