import React, {memo} from 'react'

export const Small = memo( ({value}) => {
    console.log("Small call");
    return (
        <small>
            {value}
        </small>
    )
}
)
 