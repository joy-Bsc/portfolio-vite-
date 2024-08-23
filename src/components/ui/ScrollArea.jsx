// src/components/ScrollArea.jsx
import React from 'react';

function ScrollArea({ children, height = '100%', width = '100%' }) {
    return (
        <div style={{ overflowY: 'auto', maxHeight: height, width: width }}>
            {children}
        </div>
    );
}

export { ScrollArea };