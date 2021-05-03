import React from 'react';

class Button extends React.Component {


render() {
return (
    <button style={{
        backgroundColor: '#007bff', borderStyle: 'solid',
        borderRadius: '5px',
        height: '50px',
        textAlign:'center',
        color:'white',
        width: '85px',
        margin: '30px 40px',
    }} className="btn btn-outline-primary" onClick={()=>this.props.onClick(this.props.children)}>{this.props.children}</button>
)}
}


export default Button