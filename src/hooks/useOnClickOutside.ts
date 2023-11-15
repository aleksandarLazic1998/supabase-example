import { useCallback, useEffect, useRef } from 'react'

/**
 * A custom hook that listens for clicks/touches outside a specified container element.
 * @param callback - A function to be executed when a click/touch occurs outside the container.
 * @returns An object containing the reference to the container element.
 * @example
 * // Usage in a React functional component
 * function MyComponent() {
 *   const containerRef = useRef<HTMLDivElement | null>(null);
 *
 *   const handleOutsideClick = () => {
 *     // Handle the click/touch outside the container
 *   };
 *
 *   useOnClickOutside(handleOutsideClick);
 *
 *   return (
 *     <div>
 *       <div ref={containerRef}>
 *        // Content inside the container
 *       </div>
 *     </div>
 *   );
 * }
 */

const useOnClickOutside = <T extends Element>(callback: () => void) => {
    const containerRef = useRef<T | null>(null)

    const handleClickOutside = useCallback(
        (event: MouseEvent | TouchEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                callback()
            }
        },
        [callback]
    )

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, {
            capture: true,
        })
        document.addEventListener('touchstart', handleClickOutside, {
            capture: true,
        })

        return () => {
            document.removeEventListener('mousedown', handleClickOutside, {
                capture: true,
            })
            document.removeEventListener('touchstart', handleClickOutside, {
                capture: true,
            })
        }
    }, [callback, handleClickOutside])

    return { containerRef }
}

export default useOnClickOutside
