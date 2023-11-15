/* eslint-disable no-console */
import React, { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from './ErrorPage'

interface IProps {
    children: ReactNode
}

export default function ReactErrorBoundary({ children }: IProps) {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorPage}
            onError={(error, errorInfo) => {
                // Log the error
                console.log('Error caught!')
                console.error(error)
                console.error(errorInfo)
            }}
            onReset={() => {
                // Reloading the page to restore the initial state of the current page
                console.log('reloading the page...')
                window.location.reload()
            }}
        >
            {children}
        </ErrorBoundary>
    )
}
