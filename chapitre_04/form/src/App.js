import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    

      constructor() {
        super()

        this.state = {
            userName: 
            motdePasse: 
        }
    }

      renderContent() {
        if (this.state.userName) { 
            return (
                <div>
                    <input>
                    <input>
                </div>
            );
        } else { 
            return (
                <input>
                   
                <input>
            );
        }
    }
    
    render() {
        return (
            <div>
                {this.renderNavigation()}
                {this.renderContent()}
            </div>
        );
    
      <div className="text-center">
      
         <h1 className="h3 mb-3 fw-normal">Login</h1>

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
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

        
      </div>
    )



  }
}

export default App;
