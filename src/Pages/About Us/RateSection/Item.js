import styles from "./RateSection.module.scss";
import image from "../../../components/Images/casesCompleted.png";
import emotions from "../../../components/Images/emotionsPic.png";
import rate from "../../../components/Images/ratePic.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Item = () => {
  const { language } = useSelector(state => state.translate)
  const [data,setData] = useState()
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}/rate`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then((res) => res.json())
    .then(res => {
        setData(res)
        console.log("save data:", res);
    })
  }, [])
  
  return (

      <div className={`row ${styles.rowContainer} `}>
        {data?.map((item) => {
            return (
              <div className="col-lg-4" key={item.id}>
                <div className="card mb-3">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                      <img
                        src={item.icon}
                        className={styles.image}
                        alt="Card Image"
                      />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                      <div className="card-body ms-3">
                        <h4 className={`card-title ${styles.cardNumber}`}>{item.title[language]}</h4>
                        <div className={`card-title ${styles.description}`}>
                          {item.description[language]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            );
          })}
      </div>
  );
};

export default Item;
