import React from 'react';

const Content = (props) => {
return (
    <div className='hero_text' style={{ textAlign: 'left' }}>
        <h2 className='hero_title'>{props.title}</h2>
        <p className='hero_content_text'>{props.content}</p>
    </div>
);
}
  
export default Content;
