import { useLocation } from 'react-router-dom'

interface Query {
    [key: string]: string[]
}

function useQuery() {
    const location = useLocation()
    if (!location) {
        throw Error('`useQuery` must be called within React Router\'s `BrowserRouter`')
    }

    const { search } = location
    const query: Query = {}
    if (!search) {
        return query
    }

    // Skip the `?`, the split on `&`
    search.slice(1).split('&').forEach(param => {
        const [key, value] = param.split('=')
        if (query[key]) {
            query[key].push(value)
        } else {
            query[key] = [value]
        }
    })

    return query
}

export default useQuery