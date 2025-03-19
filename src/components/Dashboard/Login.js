import { useState } from "react"
import TextInput from "../UI/TextInput"
import { useDispatch } from "react-redux"
import { userAction } from "../../store/userData"

const Login = () => {
    const [user, setUser] = useState("info@flyinspectors.com")
    const [pass, setPass] = useState("Flyinspectors2017.")
    const dispatch = useDispatch()
    return (
        <div>
            <TextInput
                type={'text'}
                value={user}
                placeholder={"email"}
                name={"user"}
                icon={'https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600392/Form%20icons/ijhlmpfbajgs0ypeymoy.svg'}
                onChange={(e) => setUser(e.target.value)}
            />
            <TextInput
                type={'password'}
                value={pass}
                placeholder={"password"}
                name={"pass"}
                icon={'https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600392/Form%20icons/ijhlmpfbajgs0ypeymoy.svg'}
                onChange={(e) => setPass(e.target.value)}
            />
            <button
                style={{
                    backgroundColor: "#0d6693",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s ease, transform 0.2s ease"
                }}
             
                onClick={() => {
                    if (process.env.REACT_APP_adminUser === user && process.env.REACT_APP_adminPass === pass) {
                        dispatch(userAction.changeLogedIn(true));
                    }
                }}
            >
                Login
            </button>
        </div>
    )
}

export default Login