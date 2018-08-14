import React from 'react';

const baseUrl = 'https://robohash.org/';

const Card = ({ name, email }) => {

    return(
        <div className='tc bg-washed-green br3 pa3 ma2 bw2 dib b--black-102 grow'>
            <img src={`${baseUrl}${name}?size=200x200`} alt='robot' />
            <div className='pa2 bt b--black-20'>
                <span className='tc pv1 db bg-animate bg-dark-blue hover-bg-blue white f5 br1' href='#'>                {name}
                </span>
                <p className='f6 black mv1'>{email}</p>
            </div>
        </div>
    );
};

export default Card;