import React from 'react';

const style = {
    tbody: {
        display: "block",
        width: "100%"
    }
}
const Tbody = ({ children }) => {
    return (
        <tbody style={style.tbody} children={children} />
    )
}
export default Tbody;