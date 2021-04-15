import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
 
    

      constructor() {
        super()

        this.state = {
            eMail: '',
            motdePasse: '',
            submit: false
        }
   
    this.funcEmail = this.funcEmail.bind(this);
    this.funcmotdePasse = this.funcmotdePasse.bind(this);
    this.funcSubmit = this.funcSubmit.bind(this);
  }


    funcEmail(e) {
      this.setState({
        eMail: e.target.value
      })
    }
    funcmotdePasse(e) {
      this.setState({
        motdePasse: e.target.value
      })
    }
    funcSubmit() {
      this.setState({
        submit: true
      })
    }




      rendereMail() {
        if ( /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm (this.state.eMail))
           {
              return (
                <div className="form-floating mb-3">
                    <label for= "exampleEmail" class="form-label">Email adress</label>
                    <input placeholder= "Enter email" onInput= {(e) => this.funcEmail(e)} className= "form-control is-valid" id= "floatingInput"/>
                </div>
            )
        } else { 
            return (
              <div class= "form-floating mb-3">
                <label for= "exampleEmail" class="form-label">Email adress</label>
                <input placeholder= "Enter email" onInput= {(e) => this.funcEmail(e)} className= "form-control is-invalid" id= "floatingInput"/>

                </div>
            ) 
        }
    }
      rendermotdePasse() {
        if ( /^(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/gm(this.state.motdePasse)) {
          return (
            <div class="form-floating">
            <label for="floatingPassword">Password</label>
          <input placeholder="Password" onInput= {(e) => this.funcmotdePasse(e) } className="form-control is-valid" id="floatingPassword" />
          
        </div>
          )
        } else {
          return (
            <div class="form-floating">
            <label for="floatingPassword">Password</label>
          <input placeholder="Password" onInput= {(e) => this.funcmotdePasse(e)} className="form-control is-invalid" id="floatingPassword" />
          </div>
          )
        }

      }
    renderSubmit() {
      if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm(this.state.eMail) && /^(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/gm (this.state.motdePasse))
       {
        return <button onClick={this.funcSubmit} type= "submit" class= "btn btn-primary">Submit</button>
      } else {
        return <button type = "submit" class= "btn btn-primary" disabled>Submit</button>
      }
    }


    render() {
      if (this.state.submit === false) {

    return (       
    
      <div className="d-flex flex-column align-items-center">
      
         <h1 className="h3 mb-3 fw-normal">Login</h1>

         {this.rendereMail()}
         {this.rendermotdePasse()}

        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>

        {this.renderSubmit()}


    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

        
      </div>
    )



  }
}
}


export default App;
