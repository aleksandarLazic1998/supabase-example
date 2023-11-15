import React from 'react'

import './ErrorPage.scss'

interface IProps {
    resetErrorBoundary: () => void
}

function ErrorPage({ resetErrorBoundary }: IProps) {
    return (
        <div className="error-page">
            <div className="oops" aria-hidden="true">
                Oops!
            </div>
            <div className="message">Something went wrong...</div>
            {resetErrorBoundary && (
                <div>
                    <button
                        type="button"
                        className="retry-button"
                        onClick={resetErrorBoundary}
                        aria-label="Retry"
                    >
                        🔄 Try Again!
                    </button>
                </div>
            )}
        </div>
    )
}

export default ErrorPage
