import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "./Course.css";
import {DateRangePicker} from "react-advance-jalaali-datepicker";
const Course = ({myState, setMyState} ) => {
  const [myData, setMyData] = useState([]); 
  const [nameMoasese, setNameMoasese] = useState("");
  const [azTarikh, setAzTarikh] = useState("");
  const [taTarikh, setTaTarikh] = useState("");
  const [mozo, setMozo] = useState("");
  const [flag, setFlag] = useState(false);

  const saveDatatoState = () => {
    setMyState((prev) => {
      const help = { ...prev };
      const newData = {
        ...help,
        Course: myData,
      };
      return newData;
    });
    setFlag(true);
  };

  const saveData = () => {
    setMyData((prev) => {
      const help = [...prev];
      const newData = [...help, { nameMoasese, taTarikh, azTarikh, mozo }];
      return newData;
    });
    setNameMoasese("");
    setTaTarikh("");
    setAzTarikh("");
    setMozo("");
  };

  const deleteProductHandler = (name) => {
    const products = [...myData];
    const newMyData = products.filter((i) => i.nameMoasese !== name);
    setMyData(newMyData);
  };
  console.log(myData);
  return (
    <div>
      <fieldset>
        <legend>
          <h3> دوره های اموزشی </h3>
        </legend>
        <div className="account-details">
          <div>
            <label>نام موسسه</label>
            <input
              type="text"
              name="name"
              className="input02"
              onChange={(e) => setNameMoasese(e.target.value)}
              value={nameMoasese}
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
            {/* <input
              type="text"
              name="name"
              required
              className="input02"
              onChange={(e) => setreshte(e.target.value)}
              value={reshte}
            /> */}
          </div>
          <div>
            <label> موضوع و مهارت  </label>
            <input
              type="text"
              name="name"
              required
              className="input02"
              onChange={(e) => setMozo(e.target.value)}
              value={mozo}
            />
          </div>
          <div>
            <Button
              disabled={
                nameMoasese && taTarikh && azTarikh && mozo ? false : true
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
                  <p>{i.nameMoasese} </p>
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
                  <p>{i.mozo} </p>
                </div>
                <div className="flex-item">
                  <Button variant="danger"  onClick={() => deleteProductHandler(i.nameMoasese)}>
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

export default Course;
