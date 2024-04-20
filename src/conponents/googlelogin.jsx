import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
const GoogleSignIn = () => {
  
  
    return (
      <GoogleLogin
        clientId=""
        buttonText="Login with Google"
        onSuccess={(CR)=>{
            const CRD=jwtDecode(CR.credential)
            console.log(CRD)
        }}
        onError={()=>{
            console.log("Login Failed")
        }}
      />
    );
  };


  export default GoogleSignIn