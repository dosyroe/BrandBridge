import React from "react";

import './Block.css'

const Block = ({text}) => {
    return (
        <div className="block-del">
            <p className="p-del">{text}</p>
        </div>
    );
};

export default Block;