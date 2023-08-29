import React from 'react';
import "./style.css";

const Caption = ({ children }) => {
    return (
        <caption className="article__caption">porównanie liczby przebiegniętych
            {children}
        </caption>
    )
};

export default Caption;