import React, { ReactNode } from 'react'

import AppLayout from '../AppLayout/AppLayout'

interface IProps {
    children: ReactNode
}

const PrivateLayout = ({ children }: IProps) => {
    return <AppLayout>{children}</AppLayout>
}
export default PrivateLayout
