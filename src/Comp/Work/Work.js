import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "./Work.css";
import {DateRangePicker} from "react-advance-jalaali-datepicker";
const Work = ({myState, setMyState} ) => {
  const [myData, setMyData] = useState([]); 
  const [nameSherkat, setNameSherkat] = useState("");
  const [azTarikh, setAzTarikh] = useState("");
  const [taTarikh, setTaTarikh] = useState("");
  const [shomare, setShomare] = useState("");

  const [flag, setFlag] = useState(false);


  const saveData = () => {
    setMyData((prev) => {
      const help = [...prev];
      const newData = [...help, { nameSherkat, taTarikh, azTarikh, shomare }];
      return newData;
    });
    setNameSherkat("");
    setTaTarikh("");
    setAzTarikh("");
    setShomare("");
  };

  const deleteProductHandler = (name) => {
    const products = [...myData];
    const newMyData = products.filter((i) => i.nameSherkat !== name);
    setMyData(newMyData);
  };
  const saveDatatoState = () => {
    setMyState((prev) => {
      const help = { ...prev };
      const newData = {
        ...help,
        Work: myData,
      };
      return newData;
    });
    setFlag(true);
  };
  
  return (
    <div>
      <fieldset>
        <legend>
          <h3> سوابق شغلی</h3>
        </legend>
        <div className="account-details">
          <div>
            <label>نام شرکت</label>
            <input
              type="text"
              name="name"
              className="input02"
              onChange={(e) => setNameSherkat(e.target.value)}
              value={nameSherkat}
              required
            />{" "}
          </div>
          <div>
            <label> تاریخ </label>

            <DateRangePicker 
            onChangeStart={(e,i) => setAzTarikh(i)}
            onChangeEnd={(e,i) => setTaTarikh(i)}
            placeholderStart="تاریخ شروع"
            placeholderEnd="تاریخ پایان"
            />
          </div>
          <div>
            <label> شماره تماس و نام مسئول </label>
            <input
              type="text"
              name="name"
              required
              className="input02"
              onChange={(e) => setShomare(e.target.value)}
              value={shomare}
            />
          </div>
          <div>
            <Button
              disabled={
                nameSherkat && taTarikh && azTarikh && shomare ? false : true
              }
              onClick={saveData}
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      </fieldset>

      {myData.length
        ? myData.map((i) => {
            return (
              <div className="flex-container">
                <div className="flex-item">
                  <p>نام شرکت</p>
                  <p>{i.nameSherkat} </p>
                </div>
                <div className="flex-item">
                  <p>از تاریخ</p>
                  <p>{i.azTarikh} </p>
                </div>
                <div className="flex-item">
                  <p>تا تاریخ</p>
                  <p>{i.taTarikh} </p>
                </div>
                <div className="flex-item">
                  <p>شماره و نام مسئول</p>
                  <p>{i.shomare} </p>
                </div>
                <div className="flex-item">
                  <Button variant="danger"  onClick={() => deleteProductHandler(i.nameSherkat)}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            );
          })
        : ""}
        {flag ? (
        <Alert variant="success" onClose={() => setFlag(false)} dismissible>
          <Alert.Heading> اطلاعات ثبت شد</Alert.Heading>
          <p>قسمت های بعد را پر کنید</p>
        </Alert>
      ) : (
        ""
      )}
      <Button
        style={{ width: "20%", height: "50px", margin: "10px" }}
        onClick={saveDatatoState}
      >
        ثبت
      </Button>
    </div>
  );
};

export default Work;
