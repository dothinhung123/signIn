import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions/index'
class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'683233447411-6m6sno6a6cvrvoqd4esshlmpv3ign17s.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)

            })
        })
    }
    onAuthChange=(isSignedIn)=>{
    if(isSignedIn){
        this.props.signIn()
    }
    else {
        console.log(this.props.signOut())
    }

    }
    onSignIn=()=>{
        this.auth.signIn()
    }
    onSignOut=()=>{
        this.auth.signOut()
    }
    renderList(){
        if(this.props.isSignedIn===null){
            return null
        }
        else if(this.props.isSignedIn){
            return <button onClick={this.onSignOut}>signOut</button>
        }
        else {
            return <button onClick={this.onSignIn}>signIn</button>
        }
    }
    render(){
        console.log(this.props.isSignedIn)
        return(
            <div>
                {this.renderList()}

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        isSignedIn:state.auth.isSignedIn
    }
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth)