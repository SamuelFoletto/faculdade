import React, {Component} from 'react';
import "./App.css"
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            retorno: ''
        }
        
        
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
        this.login = this.login.bind(this);
    }
    
    setEmail(e) {
        this.setState({email: e.target.value});
    }
    
    setSenha(e) {
        this.setState({senha: e.target.value});
    }
    
    login() {
        const { email, senha } = this.state;
        // Usuário e senha para teste
        if (email === "samuel.feo@pucpr.edu.br" && senha === "123456") {
            this.setState({retorno: "Acessado com sucesso!"})
        } else {
            this.setState({retorno: "Usuário ou senha incorretos!"})
        }
        
    }



    render() {
        return(
            <div className="estilo">
                <h1>Login</h1>
                <div className="estilo">
                    <input type="email"  name="email" placeholder="Email" value={this.state.email} onChange={this.setEmail} />
                    <input type="password" size="20" name="Senha" placeholder="Senha" value={this.state.senha} onChange={this.setSenha} />
                    <button onClick={this.login}>Acessar</button>
                </div>
                <label >{this.state.retorno}</label>
            </div>
        )
    }

}

export default App;