import { useEffect, useState } from 'react'

/**
 * A custom hook that allows you to track whether a media query matches the current viewport.
 * @param query - The media query string to be evaluated.
 * @returns `true` if the media query matches the viewport, `false` otherwise.
 * @example
 * // Usage in a React functional component
 * function MyComponent() {
 *   const isSmallScreen = useMediaQuery('(max-width: 768px)');
 *
 *   return (
 *     <div>
 *       {isSmallScreen ? 'This is a small screen' : 'This is not a small screen'}
 *     </div>
 *   );
 * }
 */

const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(false)

    useEffect(() => {
        const matchMediaQuery = window.matchMedia(query)

        // Define a function to update matches
        const updateMatches = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }

        // Initial match status
        setMatches(matchMediaQuery.matches)

        // Listen for changes
        matchMediaQuery.addEventListener('change', updateMatches)

        // Clean up listener
        return () => {
            matchMediaQuery.removeEventListener('change', updateMatches)
        }
    }, [query])

    return matches
}

export default useMediaQuery
