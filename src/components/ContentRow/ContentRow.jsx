import React from 'react'
import './ContentRow.css'

//Spring
import { useSpring, animated } from "@react-spring/web";


const ContentRow = ({ left, t, p, img, alt }) => {

    const [rollInExtraSmall] = useSpring(
        () => ({
            from: {
                opacity: 0,
                transform: 'perspective(600px) rotateX(15deg)'
            },
            to: {
                opacity: 1,
                transform: 'perspective(600px) rotateX(0deg)'
            },
            config: { duration: 1000 }
        }),
        []
    )
    
    //Render image
    const renderImage = (
        <div className="col-md-5 content-row-image">
            <img src={img} alt={alt} className="img-fluid"></img>
        </div>
    )
    
    //Render text
    const renderText = (
        <div className="col-md-6 content-row-text">
            <h2>{t}</h2>
            <p className="content-row-p">{p}</p>
        </div>
    )

    //If left is true, render image section on the left side, and if false render it on the right side
    const renderContent = left ? (<div className="row content-row">{renderImage}{renderText}</div>)
        : (<div className="row content-row">{renderText}{renderImage}</div>)

    return (

        <animated.div style={rollInExtraSmall} className="container">
            {renderContent}
        </animated.div>
    )
}

export default ContentRow