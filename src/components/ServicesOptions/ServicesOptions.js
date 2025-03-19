import styles from "./ServicesOptions.module.scss";
import Item from "./Item";
import cover from './../../assetss/images/rb_63991.png'
import { useEffect, useState } from "react";

const ServicesOptions = () => {
  const [data,setData] = useState()
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}/services`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then((res) => res.json())
    .then(res => {
        setData(res)
    })
  }, [])
  // const data = [
  //   {
  //     title: "SUBMIT CLAIM",
  //     desc: "When having problems with your flight all you need to do is fill the compensation claim form on our website, you can even get compensation for up to 6 years prior. From there our experts will do all the necessary paper and routine works and present the complaint to the airline company.",
  //   },
  //   {
  //     title: "SIT BACK AND RELAX",
  //     desc: "After Flyinspectors engagement you do not have to do anything, except to wait for your flight compensation calmly.Yes, it's as easy as it sounds!",
  //   },
  //   {
  //     title: "RECEIVE COMPENSATION",
  //     desc: "After airlines transfer the compensation, we immediately transfer it to you, with the success fee of 25% deducted. If by any chance we are not successful you pay nothing.",
  //   },
  // ];
  return (
    <div className={styles.mainContainer}>
      <img src={cover} alt="cover" className={styles.mainContainer__cover}/>
      <div className="container"> 
        <div className={styles.services}>
          <h3>
            <span>FLYINSPECTORS</span> HELPED MANY PASSENGERS
          </h3>
          <h3>WE CAN HELP YOU TOO</h3>
        </div>
        <div className="row">
          {data?.map((item) => {
            console.log(item)
            return (
              <div className="col-lg-4" key={item.id}>
                <Item title={item.title} desc={item.description} icon={item.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesOptions;
