import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../UI/TextInput";
import Loading from "../../Loading/Loading";
import Item from "./Item";
import { downloadExcel } from "react-export-table-to-excel";

const UserList = () => {
    var newDate = new Date()
    var month = newDate.getMonth()
    var day = newDate.getDate()
    var year = newDate.getFullYear()
    month = month + 1
    if(month < 10){
        month = 0 + '' +month
    }

    if(day < 10){
        day = 0 + '' +day
    }
    const fullDate = year + '-'+ month + '-' + day

    const excelHeader = [
        'firstName',
        'lastName'
    ];
    const [excelBody, setExcelBody] = useState([])
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [resetData, setResetData] = useState(true)
    const [load, setLoad] = useState(true)
    const [startDate, setStartDate] = useState(fullDate)
    const [endDate, setEndDate] = useState(fullDate)
    console.log()
    
    useEffect(() => {
        setLoad(true)
        setData([])
        setSearchText('')
        setStartDate(fullDate)
        setEndDate(fullDate)

        fetch(`${process.env.REACT_APP_API_URL}/client`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then((res) => res.json())
        .then((res) => {
            setData(res);
        }).finally(() => {
            setLoad(false)
        });
    }, [resetData]);

    useEffect(()=>{
        setExcelBody(data)
    }, [data])

    function handleDownloadExcel() {
        console.log(excelBody)
        downloadExcel({
          fileName: new Date().getTime(),
          sheet: "client",
          tablePayload: {
            header: excelHeader,
            // accept two different data structures
            // body: excelBody || excelBody2,
            // body: testbody || testbody2,
            body: excelBody
          },
        });
    }


    // Search filter
    function clickSearchText() {
        const newSearch = data.filter((item) => item.userId.toString().includes(searchText) || item.email?.toLowerCase().includes(searchText));
        setData(newSearch);
    }

    function clickSearchDate(){
        const newFilter = data.filter((item) => 
            ( new Date(startDate).getTime() <= new Date(item.createDate).getTime() && new Date(endDate).getTime() >= new Date(item.createDate).getTime() ) ||
            new Date(startDate).getTime() <= new Date(item.createDate).getTime()
        )
        setData(newFilter);
    }


    // Delete user
    const handleDelete = (user) => {
        setLoad(true)
        fetch(`${process.env.REACT_APP_API_URL}/delete`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                userId: user.userId,
            }),
        })
            .then((res) => res.json())
            .finally(() => {
                setResetData(!resetData);
                setLoad(false)
            });
    };


    return (
        <div className="container" style={{ marginBottom: "20px" }}>
            <div className="row">
                <div className="col-12">
                    <div>
                        <button onClick={() => setResetData(!resetData)}>clear</button>
                        <button onClick={handleDownloadExcel}>download excel</button>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <TextInput
                            type={"date"}
                            value={startDate}
                            placeholder={"start date"}
                            name={"startdate"}
                            icon={""}
                            label={"start date"}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <button onClick={clickSearchDate}>filter</button>
                    </div>
                </div>
                <div className="col-5">
                    <div>
                        <TextInput
                            type={"date"}
                            value={endDate}
                            placeholder={"end date"}
                            name={"enddate"}
                            icon={""}
                            label={"end date"}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <TextInput
                            type={"text"}
                            value={searchText}
                            label={"search user id or email"}
                            placeholder={"Enter User ID or Email"}
                            name={"search"}
                            icon={""}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button onClick={clickSearchText}>
                            search
                        </button>
                    </div>
                </div>
                <div className="col-12">
                    {load && <Loading />}
                </div>
                {data?.reverse().map((item, index) => (
                    <Item key={item._id} item={item} handleDelete={handleDelete} load={load}/>
                ))}
            </div>
        </div>
    );
};

export default UserList;