import React from 'react'
import useRoll from './useRoll'

interface Props {
    sides: number
    style: string
}

const Die: React.FC<Props> = ({ sides, style }) => {
    const [value, roll] = useRoll(sides)
    return <span style={{ border: '1px solid gray' }}>
        <span>d{sides} ({style})</span>
        <button onClick={roll}>{value}</button>
    </span>
}

export default Die