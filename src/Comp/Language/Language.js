import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "./Language.css"; 
const Language = ({myState, setMyState} ) => {
  const [myData, setMyData] = useState([]);
  const [zaban, setZaban] = useState("");

  const [mizan, setMizan] = useState("");
  const [flag, setFlag] = useState(false);

  const saveDatatoState = () => {
    setMyState((prev) => {
      const help = { ...prev };
      const newData = {
        ...help,
        Language: myData,
      };
      return newData;
    });
    setFlag(true);
  };

  const saveData = () => {
    setMyData((prev) => {
      const help = [...prev];
      const newData = [...help, { zaban, mizan }];
      return newData;
    });
    setZaban("");
    setMizan("");
  };

  const deleteProductHandler = (name) => {
    const products = [...myData];
    const newMyData = products.filter((i) => i.zaban !== name);
    setMyData(newMyData);
  };
  console.log(myData);
  return (
    <div>
      <fieldset>
        <legend>
          <h3>زبان های محاوره ای</h3>
        </legend>
        <div className="account-details">
          <div>
            <label>نوع زبان </label>
            <input
              type="text"
              name="name"
              className="input02"
              onChange={(e) => setZaban(e.target.value)}
              value={zaban}
              required
            />{" "}
          </div>

          <div>
            <label> میزان تسلط  </label>
            <input
              type="text"
              name="name"
              required
              className="input02"
              onChange={(e) => setMizan(e.target.value)}
              value={mizan}
            />
          </div>
          <div>
            <Button
              disabled={
                zaban && mizan ? false : true
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
                  <p>نوع زبان </p>
                  <p>{i.zaban} </p>
                </div>
                <div className="flex-item">
                  <p> میزان تسلط  </p>
                  <p>{i.mizan} </p>
                </div>
                <div className="flex-item">
                  <Button variant="danger"  onClick={() => deleteProductHandler(i.zaban)}>
                  <i className="fa fa-trash " aria-hidden="true"></i>
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

export default Language;
