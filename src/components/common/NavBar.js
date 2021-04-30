import React, { useState } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const NavBar = () => {
	const [current, setCurrent] = useState('home')

	return (
		<Menu onClick={(e) => { setCurrent(e.key) }} selectedKeys={[current]} theme="dark" mode="horizontal">
			<Menu.Item key="home">
				<Link to='/'>Home</Link>
			</Menu.Item>
			<Menu.Item key="profile">
			<Link to='/profile'>Profile</Link>
			</Menu.Item>
			<Menu.Item key="create-guild">
			<Link to='/create-guild'>Create Guild</Link>
			</Menu.Item>
		</Menu>
	)
}

export default NavBar