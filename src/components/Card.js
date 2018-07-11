import React from 'react';

const baseUrl = 'https://robohash.org/';

const Card = (props) => {

    return(
        <article className='ma1 mw5 bg-washed-green br3 pa3 pa4-ns mv3 ba b--black-102 grow'>
            <div className='tc'>
                <img src={`${baseUrl}${props.name}`} alt='robot' />
                <div className='pa2 bt b--black-20'>
                    <span className='tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f5 br1' href='#'>                {props.name}
                    </span>
                    <p className='f6 gray mv1'>{props.email}</p>
                </div>
            </div>
        </article>

    );
};

export default Card;