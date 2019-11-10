import React from  'react';
import ReactDOM from 'React-dom';
import './app.css';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
    }

    handelChange(e){
        this.setState({ value: e.target.value});
    }
    handelSubmit(e){
        alert('あなたが選んだのは'　+ this.state.value);
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handelSubmit}>
                <label>
                    Name:
                </label>
                <input type="text" value={this.state.value} onChange={this.handelChange}
                />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}





//
ReactDOM.render(
    <App />,
    document.getElementById('root')
);