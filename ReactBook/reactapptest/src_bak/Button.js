import React from 'react';

function Button(props) {
    const {onClick, classname='', text} = props;
    return (
        <button onClick={onClick} className={classname}>{text}</button>
    )
}

export default Button;