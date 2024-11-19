import React, {useEffect, useState} from 'react'

export const DISPLAY_CHART = {
	'q' : "Heater 1",
	'w' : "Heater 2",
	'e' : "Heater 3",
	'a' : "Heater 4",
	's' : "Clap",
	'd' : "Open-HH",
	'z' : "Kick-n'-Hat",
	'x' : "Kick",
	'c' : "Closed-HH"
}

function DrumMachine() {
	const [displayString, setDisplayString] = useState("")
	useEffect(() => {
	  document.addEventListener("keypress", handlePlay)
	
	  return () => {
		document.removeEventListener("keypress", handlePlay)
	  }
	}, [])

	function handlePlay(e) {
		const audio = document.getElementById(e.key.toUpperCase())
		const display = DISPLAY_CHART[e.key.toLowerCase()]
		if(audio && display) {
			audio.play()
			setDisplayString(display)
		}
	}

	function buttonClick(val, elemId) {
		const audio = document.getElementById(val)
		const display = DISPLAY_CHART[elemId]
		if(audio) {
			audio.play()
			setDisplayString(display)
			
		}
	}
	
	return (
		<div id='drum-machine' className='container container-fluid'>
			<div id="display">
				<p>{displayString}</p>
			</div>
			<button className="drum-pad" id='q' onClick={e => buttonClick(e.target.value, e.target.id)} value={"Q"}>
				Q
				<audio className="clip" id="Q" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
			</button>
			<button className="drum-pad" id='w' onClick={e => buttonClick(e.target.value, e.target.id)} value={"W"}>
				W
				<audio className="clip" id="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
			</button>
			<button className="drum-pad" id='e' onClick={e => buttonClick(e.target.value, e.target.id)} value={"E"}>
				E
				<audio className="clip" id="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
			</button>
			<button className="drum-pad" id='a' onClick={e => buttonClick(e.target.value, e.target.id)} value={"A"}>
				A
				<audio className="clip" id="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
			</button>
			<button className="drum-pad" id='s' onClick={e => buttonClick(e.target.value, e.target.id)} value={"S"}>
				S
				<audio className="clip" id="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
			</button>
			<button className="drum-pad" id='d' onClick={e => buttonClick(e.target.value, e.target.id)} value={"D"}>
				D
				<audio className="clip" id="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
			</button>
			<button className="drum-pad" id='z' onClick={e => buttonClick(e.target.value, e.target.id)} value={"Z"}>
				Z
				<audio className="clip" id="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
			</button>
			<button className="drum-pad" id='x' onClick={e => buttonClick(e.target.value, e.target.id)} value={"X"}>
				X
				<audio className="clip" id="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
			</button>
			<button className="drum-pad" id='c' onClick={e => buttonClick(e.target.value, e.target.id)} value={"C"}>
				C
				<audio className="clip" id="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
			</button>
		</div>
	)
}

export default DrumMachine