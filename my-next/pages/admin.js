import React, {Component} from 'react';
import axios from 'axios';
import Layout from '../components/MyLayout';
// import {Table, Button} from 'react-bootstrap';
import {Button, Table, TableBody, TableCell, TableRow, Paper, TableHead, TextField, Input} from '@material-ui/core';
// import 'bootstrap/dist/css/bootstrap.min.css';


//管理者ページ
//DB変更を行うコンポーネント
//DBの登録、更新、削除できる処理とそれを記入するform作成
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDB: [],
            userId: null,
            name: '',
            item_color: '',
            board_color: '',
            board_width: '',
            my_shape:'',
            your_shape:''
        }
        this.userInfoGet();
        this.userInfoPost = this.userInfoPost.bind(this);
    }
    //DBを非同期でGETしてくる処理
    async  userInfoGet(){
        axios.get('http://localhost:8000/api/user')
        .then(res => {
            const data = res.data;
            this.setState({ userDB : data});
            // console.log('data', data);
        }).catch(err => {
            console.log(err);
        })
    }
    //DBにpostする処理
    async userInfoPost() {
        axios({
            method:'POST',
            url: "http://localhost:3000/api/user",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                item_color: this.stat.item_color,
                board_color: this.state.board_color,
                board_width: this.state.board_width,
                my_shape: this.state.my_shape,
                your_shape:this.state.my_shape
            })
        }).then(res => {
            //ここにpostした結果がくるのでここで処理書く
            const data = res.data;
            console.log('userInfoGet.data',data);
            this.setState
        }).catch(err => {
            console.log(err);
        })
    }
    //DBにユーザー情報をPUTする処理 //IDで更新する
    async userInfoPut(userId){
        axios({
            method:'PUT',
            url: "http://localhost:3000/api/user/" + userId,
            headers:{
                Accept: "application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                item_color: this.stat.item_color,
                board_color: this.state.board_color,
                board_width: this.state.board_width,
                my_shape: this.state.my_shape,
                your_shape:this.state.my_shape
            })
        }).then(res => {
            const data = res.data;
            this.setState({ userDB: data});
        })
        .catch(err => {
            console.log(err);
        })
    }
    //ユーザー情報をDBから削除する処理
    async userInfoDelete(userId) {
        axios({
            method: "DELETE",
            url:"http://locahost:3000/api/user" + userId,
            headers:{
                Accept: "application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({userId})
        }).then(res => {
            const data = res.data;
            console.log('userInfoDelete.data',data);
            this.setState({userDB :data});
        })
        .catch(err => {
            console.log(err);
        })
    }

    updateState(e){
        this.setState({
            name: e.target.value,
            item_color: e.target.value,
            board_color: e.target.board_color,
            board_width: e.target.board_width,
            my_shape: e.target.my_shape,
            your_shape: e.target.my_shape
        })
    }
    componentDidMount() {
        this.userInfoGet();
    }
    changeText = e => {
        const userText = e.target.value;
        this.setState({ })
    }

    handlePostSubmit(){
        this.userInfoPost();
    }
    handlePuttSubmit(){
        this.userInfoPut(userId);
    }

    //formクラスにpropsを渡したいもの
    render() {
        const data = this.state.userDB;
        // console.log('data',data);
        const userTable = data.map((user, i) => {
            return(
                <TableRow key={i}>
                    <TableCell>{i}</TableCell>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.board_width}</TableCell>
                    <TableCell>{user.item_color}</TableCell>
                    <TableCell>{user.background_color}</TableCell>
                    <TableCell>{user.my_shape}</TableCell>
                    <TableCell>{user.your_shape}</TableCell>
                    <TableCell>
                        <div>
                            <Button  variant="contained" color="primary" name="edit" onClick={() => this.userInfoPut(user.id)}>編集</Button>
                            <Button  variant="contained" color="secondary" name="delete" onClick={() => this.userInfoGet(user.id)}>削除</Button>
                        </div>
                    </TableCell>
                </TableRow>
            )
        })
    return (
        <div>
            <Layout/>
            <form name="form">
                <div className="userInfoList">
                    <p>ユーザー情報 一覧</p>
                    <Paper>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>User id</TableCell>
                                    <TableCell>User Name</TableCell>
                                    <TableCell>board width</TableCell>
                                    <TableCell>item color</TableCell>
                                    <TableCell>background color</TableCell>
                                    <TableCell>my shape</TableCell>
                                    <TableCell>your shape</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {userTable}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                <Paper className="postForm">
                    <Table>
                        <TableRow>
                            <TableCell>Name:</TableCell>
                            <TableCell><Input id="standard-basic" label="Standard" margin="normal" name="name" value={this.state.name} placeholder=" name.."/></TableCell>
                        </TableRow>
                        <TableRow>Name:<Input id="standard-basic" label="Standard" margin="normal" name="name" value={this.state.name} placeholder=" name.."/>
                    </TableRow>
                    <TableRow>board_width:
                        <input type="radio" name="board-width" value="3" /> 3
                        <input type="radio" name="board-width" value="5" /> 5
                        <input type="radio" name="board-width" value="7" /> 7
                        <input type="radio" name="board-width" value="9" /> 9
                    </TableRow>
                    <div>
                        <label>item_color: <Input id="standard-basic" label="Standard" margin="normal" name="item_color" value={this.state.item_color} placeholder="item-color..." />
                    </label>
                    </div>
                    <div>
                        <label>background_color: <Input id="standard-basic" label="Standard" margin="normal" value={this.state.background_color} placeholder="background_color..."/>
                    </label>
                    </div>
                    </Table>
                    <br/>
                    <label>
                        <input type="submit" name="ユーザー登録" value="ユーザー登録" onSubmit={this.handlePostSubmit}/>
                    </label>
                </Paper>
                <br/>
                <label>
                    <input type="submit" name="ユーザー情報を更新"value="ユーザー情報を更新" onSubmit={this.handlePuttSubmit}/>
                </label>
                <br/>
                <label>
                    <input type="submit" name="ユーザー情報を削除" value="ユーザー情報を削除" onSubmit={this.handleDeleteSubmit}/>
                </label>
            </form>
            <style jsx>
                {`
                .userInfoList{
                    margin: 15px 10px;
                }
                `}
            </style>
        </div>
        );
    }
}
// Admin exportする処理
export default Admin;