import React from 'react'

import Menu from './menu/Menu'
import menulinks from '../data/menulinks'

const Layout = (props) => (
    <div>
        <Menu menuLinks={menulinks}/>
        <h1>{props.title}</h1>
    </div>
)

export default Layout