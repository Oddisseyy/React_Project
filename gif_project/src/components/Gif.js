import React from "react";

export default function Gif({title, url, id})
{
    return (
        <div>
            <h4>{title}</h4>
            <small>{id}</small>
            <img alt={title} src={url} />
        </div>
    );
}