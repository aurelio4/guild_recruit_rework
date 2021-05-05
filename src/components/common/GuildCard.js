import React, { useState } from 'react'
import { Card } from 'antd';

const GuildCard = () => {
	const [guildNameClassName, setGuildNameClassName] = useState('guild-name')
	const [guildMasterClassName, setGuildMasterClassName] = useState('guild-master')

	return (
		<div className="guild-card-container">
			<Card className="guild-card">
				<h1 className={guildNameClassName}>testing</h1>
				<h2 className={guildMasterClassName}>GM: chelkuhs</h2>
				<h2 className="region-and-server">US-Bigglesworth (PvE)</h2>
				<h2 className="guild-pop">Population: Medium (51-100)</h2>
				<hr className="hr-divider" />
				<p className="guild-bio">Test Description for a Test Guild. I wonder if this text will wrap over or just keep going and going and going and going and going</p>
				<hr className="hr-divider" />
				<button>Apply</button>
    	</Card>
		</div>
	)
}

export default GuildCard