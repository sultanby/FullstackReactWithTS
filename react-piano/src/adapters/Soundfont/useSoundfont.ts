import { useRef, useState } from "react";
import { InstrumentName, Player } from "soundfont-player";
import { MidiValue } from "../../domain/note";
import { AudioNodesRegistry } from "../../domain/sound";
import { Optional } from "../../domain/types";

interface Settings {
    AudioContext: AudioContextType
}

interface Adapted {
    loading: boolean
    current: Optional<InstrumentName>

    load(instrument?: InstrumentName): Promise<void>
    play(note: MidiValue): Promise<void>
    stop(note: MidiValue): Promise<void>
}

export function useSoundfont({AudioContext}: Settings): Adapted {
    let activeNodes: AudioNodesRegistry = {}
    const [current, setCurrent] = useState<Optional<InstrumentName>> (
        null
    )
    const [loading, setLoading] = useState<boolean>(false)
    const [player, setPlayer] = useState<Optional<Player>>(null)
    const audio = useRef(new AudioContext())
    
}