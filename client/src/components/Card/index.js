import React from "react";
import "./style.css";

const Card = props => {
    return (
        <div className="container" id="mainDisplaySection">
            <div className="row align-items-center">
                <div className="col-12 col-md-3">
                    <h4 className="title">{props.title}</h4>
                    <h6 className="author">Author  -  {props.authors}</h6>

                </div>
                <div className="col-12 col-md-9">
                    <a href={props.link}>
                        <button className="btn btn-primary" id="bookPreviewBt">View Book</button>
                    </a>
                    <button {...props} className="btn btn-primary" id="bookPreviewBt">{props.children}</button>



                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-md-3">
                    <img src={props.imageLink} alt="not found" id="bookImage" />
                </div>
                <div className="col-12 col-md-9">
                    <p>{props.summary}</p>
                </div>
            </div>
        </div>

    )
}

export default Card;