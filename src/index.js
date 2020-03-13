// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component{
//     state={isSignedIn:null}
//     componentDidMount(){
//         window.gapi.load('client:auth2',()=>{
//             window.gapi.client.init({
//                 clientId:'815994806263-scfsp1vluk8v6krfm1rr126pkoflpjjj.apps.googleusercontent.com',
//                 scope:'email'
//             }).then(()=>{
//                 this.auth = window.gapi.auth2.getAuthInstance();
//                 console.log(this.auth)
//                 this.setState({
//                     isSignedIn:this.auth.isSignedIn.get()
//                 })
//                 this.auth.isSignedIn.listen(this.onAuthChange)

//             })
//         })
//     }
//     onAuthChange=()=>{
//         this.setState({isSignedIn:this.auth.isSignedIn.get()})

//     }
//     onSignIn=()=>{
//         this.auth.signIn()
//     }
//     onSignOut=()=>{
//         this.auth.signOut()
//     }
//     renderList(){
//         if(this.state.isSignedIn===null){
//             return 'Loading'
//         }
//         else if( this.state.isSignedIn){
//             return <div>
//                 <button onClick={this.onSignOut}>SignOut</button>
//                 </div>
//         }
//         else {
//             return <div>
//                 <button onClick={this.onSignIn}>SignIn</button>
//             </div>
//         }
//     }
//     render(){
//         return(
//             <div>

//             {this.renderList()}
//             </div>
//         )
//     }
// }


// ReactDOM.render(<App></App>,document.querySelector('#root'))
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
    state={isSignedIn:null}
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:'240167675410-rcion5ls9f3u8rsu4s57mas6tln58k0b.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange=()=>{
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }
    onSignIn=()=>{
        this.auth.signIn()
    }
    onSignOut=()=>{
        this.auth.signOut()
    }
    renderList(){
        if(this.state.isSignedIn===null){
            return 'loading'
        }
        else if(this.state.isSignedIn){
            return <button onClick={this.onSignOut}>SignOut</button>
        }
        else{
            return <button onClick={this.onSignIn}>SignIn</button>
        }
    }
    render(){
        return(
            <div>
{this.renderList()}
            </div>
        )
    }
}
ReactDOM.render(<App></App>,document.querySelector('#root'))