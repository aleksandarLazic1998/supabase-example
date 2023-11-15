import React, { ReactNode } from 'react'
import Message from '../../components/Message/Message'

import './AppLayout.scss'

interface IProps {
    children: ReactNode
}

const AppLayout = ({ children }: IProps) => {
    return (
        <div className="app-layout">
            <Message />
            <div className="main-component">
                <main>{children} </main>
            </div>
        </div>
    )
}

export default AppLayout
