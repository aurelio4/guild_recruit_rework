import React, { useState } from 'react'
import { Card } from 'antd';

const GuildCard = () => {
	const [guildNameClassName, setGuildNameClassName] = useState('guild-name');

	return (
		<div className="guild-card-container">
			<Card className="guild-card">
				<h1 className={guildNameClassName}>testing</h1>
				<h2 className="region-and-server">US-Bigglesworth</h2>
				<h2 className="guild-master">GM: chelkuhs</h2>
				<hr className="hr-divider" />
				<p className="guild-bio">Card content</p>
    	</Card>
		</div>
	)
}

export default GuildCard