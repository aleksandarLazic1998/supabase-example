import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../pages/404/404'
import Dashboard from '../pages/Dashboard/Dashboard'
import PrivateLayout from '../layout/PrivateLayout/PrivateLayout'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Private */}
                <Route
                    path="/"
                    element={
                        <PrivateLayout>
                            <Dashboard />
                        </PrivateLayout>
                    }
                />
                {/* Public */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp
