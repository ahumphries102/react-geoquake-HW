import React from 'react'

const quakeList = (props)=>{
	const newQuakes = props.earthquakes.map((earthquakes, i)=>{
		return <p key={i}>{earthquakes.properties.title}</p>
	})

	return(
		<div>
			<h1>Hey</h1>
			<div class="info">
					{newQuakes}
			</div>
		</div>
	)
}

export default quakeList