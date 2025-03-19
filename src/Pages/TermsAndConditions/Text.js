import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Text() {
    const { language } = useSelector(state => state.translate)
    const [data, setData] = useState()
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/conditions`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            setData(res);
            console.log("save data:", res);
          });
      }, []);
    return (
        <div className="container">
            {data?.map((item)=>{
                return (
                    <div key={item._id}>
                        <h3>{item.title[language]}</h3>
                        <p>{item.description[language]}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Text;
