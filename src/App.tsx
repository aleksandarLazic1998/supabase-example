import React from 'react'
import RoutesApp from './Routes/Routes'
import ReactErrorBoundary from './components/ErrorBoundaries/ReactErrorBoundary'

function App() {
    return (
        <ReactErrorBoundary>
            <RoutesApp />
        </ReactErrorBoundary>
    )
}

export default App
