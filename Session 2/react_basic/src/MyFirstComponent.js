import React from "react";

const MyFirstComponent = props => {
    const name = props.name;
    const children = props.children;
    return (<div>
        <div>Hello MindX. I'm {name}</div>
        {children}
        <div>NodeJS</div>
    </div>
    );
}
export default MyFirstComponent;