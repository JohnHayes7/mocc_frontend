import React from 'react';
// import ReactDOM from 'react-dom'
import GoogleLogin from 'react-google-login'


class Login extends React.Component{

    render(){
        const responseGoogle = (response) => {
            console.log(response)
        }



        debugger
        return (
            <GoogleLogin 
                clientId="63558733148-jle28klrgeg43np7dh5ug7170m75gc1k.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        )
    }
    
    
}

export default Login

