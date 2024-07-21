import React, { useContext } from 'react';
import Con from '../_context';

const ContextChild = () => {
    const msg = useContext(Con);
    return (
        <div>
          ContextChild -- {msg}
        </div>
    );
};

export default ContextChild;