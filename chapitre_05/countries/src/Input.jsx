import React from 'react';

class Input extends React.Component {
    render(e) {
        console.log(this.props)
        return
        <div className= "offset-6 text-center">
            <input type= "text" className="form-control" onInput= {(e) =>this.props.inputValid(e)}/>
        </div>
    }

}

export default Input;