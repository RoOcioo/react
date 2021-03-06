import React from "react";

 
class Box extends React.Component {

  render() {
    if (this.props.unit === "L") {
      return (
        <div className= "box col-sm-3 col-6">
        <span className="material-icons"
        style= {{
          fontSize: '100px',
          color: this.props.color,
        }}
        >{this.props.icon}
</span>
<p>{this.props.value}{this.props.unit}</p>
      </div>
      )} else {
      
    return (

        <div className= "box col-sm-3 col-6">
        <span className="material-icons"
        style= {{
          fontSize: '100px',
          color: this.props.color,
        }}
        >{this.props.icon}
</span>
<p>{this.props.value}{this.props.unit}</p>

<input type="range" min={this.props.min} 
        max={this.props.max} value={this.props.value} onInput= {this.props.onChange}/>






        </div>
      	
			
		);
  }
  }
}

export default Box;