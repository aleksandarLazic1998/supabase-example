import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * A custom hook to extract and manage query parameters from the current URL.
 * @returns An instance of URLSearchParams containing the query parameters.
 * @example
 * // Usage in a React functional component
 * function MyComponent() {
 *   const queryParams = useQueryParams();
 *
 *   const value = queryParams.get('key');
 *
 *   return (
 *     <div>
 *       Query param value: {value}
 *     </div>
 *   );
 * }
 */
function useQueryParams() {
    const { search } = useLocation()
    const memoParams = useMemo(() => new URLSearchParams(search), [search])

    return memoParams
}

export default useQueryParams
