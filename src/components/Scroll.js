import React from 'react';

// props have props.children - this case 'Cards'
const Scroll = (props) => {
    return (
        <div className='pa2 mh4 mv0' style={ { overflow: 'scroll', height: '700px' } }>
            {props.children}
        </div>
    );
};

export default Scroll;