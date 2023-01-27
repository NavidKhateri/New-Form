import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "./Education.css";
const Education = ({ myState, setMyState }) => {
  const [myData, setMyData] = useState(myState.Education || []);

  const [maghta, setMaghta] = useState("");
  const [reshte, setreshte] = useState("");
  const [moadel, setMoadel] = useState("");
  const [sal, setSal] = useState("");
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(false);

  const saveDatatoState = () => {
    setMyState((prev) => {
      const help = { ...prev };
      const newData = {
        ...help,
        Education: myData,
      };
      return newData;
    });
    setFlag(true);
  };

  const saveData = () => {
    setMyData((prev) => {
      const help = [...prev];
      const newData = [...help, { maghta, reshte, moadel, sal, name }];
      return newData;
    });

    setMaghta("");
    setreshte("");
    setMoadel("");
    setSal("");
    setName("");
  };

  const deleteProductHandler = (name) => {
    const products = [...myData];
    const newMyData = products.filter((i) => i.maghta !== name);
    setMyData(newMyData);
  };
  return (
    <div>
      <fieldset>
        <legend>
          <h3> سوابق تحصیلاتی</h3>
        </legend>
        <div className="account-details">
          <div>
            <label>مقطع</label>
            <input
              type="text"
              name="name"
              className="input02"
              onChange={(e) => setMaghta(e.target.value)}
              value={maghta}
              required
            />{" "}
          </div>
          <div>
            <label> رشته </label>
            <input
              type="text"
              name="name"
              required
              className="input02"
              onChange={(e) => setreshte(e.target.value)}
              value={reshte}
            />
          </div>
          <div>
            <label> معدل </label>
            <input
              type="text"
              name="name"
              required
              className="input02"
              onChange={(e) => setMoadel(e.target.value)}
              value={moadel}
            />
          </div>
          <div>
            <label>سال</label>
            <input
              type="number"
              name="name"
              required
              className="input02"
              onChange={(e) => setSal(e.target.value)}
              value={sal}
            />
          </div>
          <div>
            <label> نام دانشگاه</label>
            <input
              type="text"
              name="name"
              required
              className="input02"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <Button
              disabled={
                maghta && reshte && moadel && sal && name ? false : true
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
              <div className="flex-container" key={i.maghta}>
                <div className="flex-item">
                  <p>مقطع</p>
                  <p>{i.maghta} </p>
                </div>
                <div className="flex-item">
                  <p>رشته</p>
                  <p>{i.reshte} </p>
                </div>
                <div className="flex-item">
                  <p>معدل</p>
                  <p>{i.moadel} </p>
                </div>
                <div className="flex-item">
                  <p>سال</p>
                  <p>{i.sal} </p>
                </div>
                <div className="flex-item">
                  <p>نام دانشگاه</p>
                  <p>{i.name} </p>
                </div>
                <div className="flex-item">
                  <Button
                    variant="danger"
                    style={{ height: "100%" }}
                    onClick={() => deleteProductHandler(i.maghta)}
                  >
                    <i className="fa fa-trash  fa-2x" aria-hidden="true"></i>
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

export default Education;
