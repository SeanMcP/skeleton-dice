import { useLocation } from 'react-router-dom'

function updateRoute(key: string, index: number, style: string) {
    const location = useLocation()

    if (!location) {
        return ''
    }

    const { search } = location
    let newRoute = search
    let keyCount = -1

    for (let i = 0; i < search.length; i++) {
        if (search[i] === key && search[i + 1] === '=') {
            keyCount++

            if (keyCount === index) {
                newRoute = newRoute.slice(0, i + 3) + style + newRoute.slice(i + 4)
                break
            }
        }
    }

    return newRoute
}

export default updateRoute