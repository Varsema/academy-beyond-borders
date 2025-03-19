import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/services`, {
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
    <div style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {data?.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <Link
              to={item.id}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#007bff",
                  marginBottom: "10px",
                }}
              >
                {item.title.en}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  marginBottom: "10px",
                }}
              >
                {item.description.en}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;