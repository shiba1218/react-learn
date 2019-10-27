// 従来の関数宣言
function plusOne(n) {
    return n + 1;
}

// アロー関数の宣言 1
const plusOne = (m) => { return  m + 1; };

//アロー関数宣言　２
const plusOne = l => l + 1;


// 非同期処理
const wakeUp = ms => {
    setTimeout(() => { console.log('朝,起きました！');}, ms)
};

const greet = () => {
    console.log('おyすみ');
    wakeUp(2000);
    console.log('oyasumi');
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const greet = async() => {
    console.log('おやすみ');

    try{
        await　sleep(2000);
        console.log('起きた');
        console.log('おはよう');
    }catch(err){
        console.log('睡眠例外です。')
    }
}

async function getStatusCode(){
    try{
        console.log('started');
        const response = await axios.get('https');
        console.log('success', response.status);
    }catch(error){
        console.log('error', error.response.status);
    }finally{
        console.log('finished');
    }
}

const f3 = (a, b) => a + b;



export default class Root extends Component {
    constructor(props){
        super(props);
        this.state = {
            showBox: false,
        };
    }

    handleClick(){
        this.setState({showBox: !this.state.showBox});
    }

    render()
    {
        const btnName = this.state.showBox? 'Box非表示': 'Box表示';
        const boxComponent = this.state.showBox? (
            <Box>Sample Box</Box>
        ):null;
        return(
        <div className="contanier">
            <h1>{this.props.title}</h1>
            {Box.component}
            <button className = "btn btn-promary" onClick={() => this.handleClick()}>
                {btnName}
            </button>
            <div>
                {this.props.children}
            </div>
        </div>
    )}
}

Root.propsTypes = {
    title: PropTypes.string.isReqired,
    children: propsTypes.any.isReqired,
}



import React, {Component, propsTypes} from 'react';


export default class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            bocTitle: '',
        };
    }

    componentWillMount(){
        this.setState({
            boxTitle: Number.parseInt(Date.now(), 10)
        });
    }

    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.state.boxTitle}
                </div>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}




class Bar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    onClick(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        let foo = [];
        for(let i = 0; i < this.state.count; i++)
            foo.push(<li><Foo key = {i}/></li>);

            return (<div onClick={() => this.onClick()}>
                Bar! <ul>{foos}</ul>
            </div>);
    }

}


class FlavorForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { value: 'count'};
        this.handleChange = this.handleClick.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        console.log('an easy was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Eassy:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

///<button onclick = (e) => this.handleClick(e)}>
// this.handleClick = this.handleClick.bind(this);
// render(){
//     <button onClick = {(e) => this.handleClick(e)}>
//     }
// }


class Clock extends React.component {
    constructor(props){
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterVal(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    handleChange(e){
        let name = e.target.value;
        this.setState({[name]:e.target.value})
    }

    render(){
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}


class SomeForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {title: '', content: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        let name = e.target.name;
        this.setState({[name] : e.target.value})
    }

    render(){
        return(
            <div>
                <p>titleの値: {this.state.value}</p>
                <p>textの値: {this.state.text}</p>
                <input name="title" value={this.state.title} onChange={this.handleChange}/>
                <textarea name="text" onChange={this.handleChange}>{this.state.text}</textarea>
            </div>
        )
    }
}

ReactDOM.render(
    <InputForm/>,
    document.getElementById('root')
)



class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { value: ''};
        this.handlechange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputchange = this.handleInputchange.bind(this);
    }
    handleInputchange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked: target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        this.setStat({value: event.target.value}); //引数: eventを引き渡す eでも可
    }

    handleSubmit(event){
        console.log('a name was submitted' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange = {
                        this.handleChange}/>
                </label>
                <label>
                    <input
                    name="isgoing"
                    type="checkbox"
                    checked={this.state.isgoing}
                    onchange= {this.handleInputchange}></input>
                </label>
            </form>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return:{
//         doLogin: () => {
//             let provider = new firebase.auth().signInWithPopup(provider)
//         },
//         refLogin: () => {
//             firebase.auth().onAuthStateChanged(user => {
//                 if(!user){
//                     return
//                 }
//                 dispatch(loginOk(user))
//             })
//         }
//     }
// }
// const AuthContainer = connect(
//     mapStateTopProps,
//     mapDispatchToProps
// )



class App extends React.component{
    constructor(){
        super();
        this.fetchTasks = this.fetchTasks.bind(this);
        this.changeText = this.changeText.bind(this);
        this.addMemo = this.addMemo.bind(this);
        this.deleteMemo = this.deleteMemo.bind(this);
        this.editMemo = this.editMemo.bind(this);
        this.state = {
            showInput: false,
            balck : true,
            clor:null,
            task: []
        };
    }

    componentDidMount(){
        this.fetchTasks();
    }
    async fetchTasks(){
        await fetch(url){
            try{
                response.json();
            }catch(error){
                return
            }
        }
    }

    changeText = (e) => {
        console.log("changeText")
    }
    addMemo = () => {
        this.setState({ showInput: false});
        fetch(url, {
            method:"Post",
            headers: {
                Accept:"application/json",
                "Content-Type":"application"
            },
            body:JSON.stringify({
                content:this.state.inputText,
                color:this.state.color
            })
        }).then(this.fetchtask);
    }


    deleteMemo(taskId){
        this.setState({ showInput:false});
        fetch("url" + taskId,  {
            method: "DELETE"
        }).then(this.fetchTasks);
    }
    editMemo(taskId){
        this.setState({ showInput:true});
        let input = ReactDOM.findDOMNode(this.refs["text-cell"]);
        input & input.focus();
    }
    saveMemo = (taskId,  content, color) => {
        fetch("url"+ taskId)
    }
}
class Forom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: ""
        };
    }

    render() {
        return(
            <div className="form" style={{ backgroundColor:this.props.color }} >
                <div className = "form-top">
                    <input className="input_box" placeholder = "メモを入力"
                    onChange = {{this.props.changeText}}
                    style={{background: this.props.color}}
                    />
                </div>
                <div className="form-bottom">
                    <button onClick={() => this.props.changeFormColor()}>
                        <i className="material_icons">color_lens</i>
                    </button>
                    <button onclick={() => this.props.changeFormColor("#f28b82")}>
                        <i className="material-icons pink">color_lens</i>
                    </button>
                    <button className="input-close"
                    type="submit"
                    onClick={this.props.addMemo}>
                        作成
                    </button>
                </div>
            </div>
        )
    }
}


export default Form;



class Card extends React.component {
    stae = {
        iseditMode: false,
        contetn: this.props.task.content,
        color: this.props.tasks,
        task:this.props.task
    }
    toggleEditMode = () => {
        this.setState({
            isEditMode: !this.state.isEditMode
        })
    }

    handleEditDone = () => {
        this.setState({
            isEditMode:false,
        })
        this.props.saveMemo(this.props.task.id, this.state.content, this.state.color);
    }
    changeText = (e) => {
        this.setState({
            content: !e.target.value
        });
    }

    changeColor = (color = "#fffff") => {
        this.setState({
            ccolor: color
        });
        this.props.saveMemo(this.props.task.id)
    }

    render(){
        return(
            <i className="list" key={this.props.task.id} style="background:color">
                {this.state.isEditMode ?
                <input classNma
                }
            </i>
        )
    }
}