import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";

function Login() {
  const navigate = useNavigate();

  function SignInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error during sign-in", error);
      });
  }
  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <div className="flex items-center justify-center cursor-pointer">
        <img
          src={google}
          alt="google sign in"
          onClick={SignInWithGoogle}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default Login;
