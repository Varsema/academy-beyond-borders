//import { useEffect, useState } from "react"
import Login from "./Login"
//import UserList from "./User/List"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Dashboard = () => {
    const user = useSelector(state => state.userData)
    return (
        <div className="container" style={{marginTop:"100px"}} >
            {user.logedIn ? (
                <ul
                    style={{
                        listStyleType: "none",
                      
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "15px",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        padding: "20px"
                    }}
                >
                    <li>
                        <Link
                            to={'userlist'}
                            style={{
                                textDecoration: "none",
                                color: "#007BFF",
                                fontSize: "18px",
                                fontWeight: "bold",
                                transition: "color 0.3s"
                            }}
                            onMouseOver={(e) => (e.target.style.color = "#0056b3")}
                            onMouseOut={(e) => (e.target.style.color = "#007BFF")}
                        >
                            User List
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'services'}
                            style={{
                                textDecoration: "none",
                                color: "#007BFF",
                                fontSize: "18px",
                                fontWeight: "bold",
                                transition: "color 0.3s"
                            }}
                            onMouseOver={(e) => (e.target.style.color = "#0056b3")}
                            onMouseOut={(e) => (e.target.style.color = "#007BFF")}
                        >
                            Services List
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'rate'}
                            style={{
                                textDecoration: "none",
                                color: "#007BFF",
                                fontSize: "18px",
                                fontWeight: "bold",
                                transition: "color 0.3s"
                            }}
                            onMouseOver={(e) => (e.target.style.color = "#0056b3")}
                            onMouseOut={(e) => (e.target.style.color = "#007BFF")}
                        >
                            Rate List
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'contact'}
                            style={{
                                textDecoration: "none",
                                color: "#007BFF",
                                fontSize: "18px",
                                fontWeight: "bold",
                                transition: "color 0.3s"
                            }}
                            onMouseOver={(e) => (e.target.style.color = "#0056b3")}
                            onMouseOut={(e) => (e.target.style.color = "#007BFF")}
                        >
                            contact List
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'condition'}
                            style={{
                                textDecoration: "none",
                                color: "#007BFF",
                                fontSize: "18px",
                                fontWeight: "bold",
                                transition: "color 0.3s"
                            }}
                            onMouseOver={(e) => (e.target.style.color = "#0056b3")}
                            onMouseOut={(e) => (e.target.style.color = "#007BFF")}
                        >
                            Condition List
                        </Link>
                    </li>
                </ul>
            ) : (
                <div
                    style={{
                        textAlign: "center",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        padding: "20px"
                    }}
                >
                    <Login />
                </div>
            )}
        </div>
    )
}

export default Dashboard