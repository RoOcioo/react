import React from 'react';


class Films extends React.Component {
    render() {
        return (
            <div>
                
                <h2>{this.props.title}</h2>
                <span>Director : {this.props.director}</span>
                <span>Stars : {this.props.stars}</span>
                <p>Description : {this.props.description}</p>
                <img src={this.props.image}></img>
            </div>
        )
    }
}
  
export default Films