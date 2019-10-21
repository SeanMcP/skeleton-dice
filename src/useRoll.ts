import React from 'react'

const useRoll = (sides = 6) => {
    const [value, setValue] = React.useState(sides)

    function roll() {
        setValue(Math.floor(Math.random() * sides) + 1)
    }

    return [value, roll]
}

export default useRoll