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
        if (/^[^@]+@[^@]+\.[^@]+$/igm.test (this.state.eMail))
           {
              return (
                <div className="form-floating mb-3">
                    <label for= "exampleEmail" class="form-label">Email adress</label>
                    <input placeholder= "Enter email..." onInput= {(e) => this.funcEmail(e)} className= "form-control is-valid" id= "floatingInput"/>
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
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm.test(this.state.motdePasse)) {
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
      if (/^[^@]+@[^@]+\.[^@]+$/igm.test(this.state.eMail) && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm.test  (this.state.motdePasse))
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
        <form style= {{


          width: 500
        }}>
         {this.rendereMail()}
         {this.rendermotdePasse()}

      
        <div className="form-check mb-3">
      
        <input type="checkbox" class="form-check-input"></input>
      <label class= "form-check-label" for="exampleCheck">Remember me</label>
    </div>

        {this.renderSubmit()}

        </form>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

        
      </div>
    )
  } else {
    return ( 
      <div className="d-flex flex-column align-items-center">
        <p className= "h1 mt-2 mb-4" style={{
           fontSize: 40, fontWeight: "initial"
          }}>Login</p>
          <div className= "d-flex justify-content-center align-items-center" style= {{
            width: 450, height: 200
          }}>
          <h2 style= {{
            fontSize: 40, color: 'black'
          }}>Form submitted</h2>
          </div>
      </div>

    )
  }
}
}


export default App;
