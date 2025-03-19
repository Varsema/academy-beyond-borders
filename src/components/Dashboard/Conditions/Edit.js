import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextInput from "../../UI/TextInput";

const ConditionsEdit = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    const [update, setUpdate] = useState(true);
    const [title, settitle] = useState({en: "", ka: ""});
    const [description, setdescription] = useState({en: "", ka: ""});

    useEffect(() => {
      settitle({
        en: data?.title?.en,
        ka: data?.title?.ka,
      });
      setdescription({
        en: data?.description?.en,
        ka: data?.description?.ka,
      });
      console.log(data)
    }, [data]);

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
                const user = res.find((item) => item._id == id);
                setData(user);
            }).finally(()=>{
              console.log(data)
            })
    }, [update]);

    function handleClick(e) {
      e.preventDefault();
      console.log(title, description)
        fetch(`${process.env.REACT_APP_API_URL}/conditions`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                _id: data._id,
                title: title,
                description: description
            }),
        })
        .then((res) => res.json())
        .finally(() => {
            setUpdate(!update);
        });
    }

    return (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div style={{width: '100%'}}>
                <h3 style={{ color: "#007bff" }}>English</h3>
                <TextInput
                  type="text"
                  value={title.en}
                  placeholder="Enter title"
                  name="title"
                  icon=""
                  onChange={(e) =>
                    settitle({ ...title, en: e.target.value })
                  }
                />
                <TextInput
                  type="textarea"
                  value={description.en}
                  placeholder="Enter description"
                  name="desc"
                  icon=""
                  rows={50}
                  onChange={(e) =>
                    setdescription({ ...description, en: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{width: '100%'}}>
                <h3 style={{ color: "#007bff" }}>Georgian</h3>
                <TextInput
                  type="text"
                  value={title.ka}
                  placeholder="Enter title"
                  name="title"
                  icon=""
                  onChange={(e) =>
                    settitle({ ...title, ka: e.target.value })
                  }
                />
                <TextInput
                  type="textarea"
                  value={description.ka}
                  placeholder="Enter description"
                  name="desc"
                  icon=""
                  rows={50}
                  onChange={(e) =>
                    setdescription({ ...description, ka: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="col-12">
              <button onClick={handleClick}>edit</button>
            </div>
          </div>
        </div>
    );
};

export default ConditionsEdit;