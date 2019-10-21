import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface Props {
    query: string
}

const QueryLink: React.FC<Props> = ({ query, ...props }) => {
    const { search } = useLocation()
    return <Link to={search ? `${search}&${query}` : `?${query}`} {...props} />
}

export default QueryLink