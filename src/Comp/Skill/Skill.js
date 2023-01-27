import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "./Skill.css";
const Skill = ( {myState, setMyState} ) => {
  const [myData, setMyData] = useState([]); 
  const [skill, setSkill] = useState("");

  const [mizan, setMizan] = useState("");
  const [flag, setFlag] = useState(false);

  const saveDatatoState = () => {
    setMyState((prev) => {
      const help = { ...prev };
      const newData = {
        ...help,
        Skill: myData,
      };
      return newData;
    });
    setFlag(true);
  };

  const saveData = () => {
    setMyData((prev) => {
      const help = [...prev];
      const newData = [...help, { skill, mizan }];
      return newData;
    });
    setSkill("");
    setMizan("");
  };

  const deleteProductHandler = (name) => {
    const products = [...myData];
    const newMyData = products.filter((i) => i.skill !== name);
    setMyData(newMyData);
  };
  console.log(myData);
  return (
    <div>
      <fieldset>
        <legend>
          <h3> مهارت ها  </h3>
        </legend>
        <div className="account-details">
          <div>
            <label>نوع مهارت </label>
            <input
              type="text"
              name="name"
              className="input02"
              onChange={(e) => setSkill(e.target.value)}
              value={skill}
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
                skill && mizan ? false : true
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
                  <p>{i.skill} </p>
                </div>
                <div className="flex-item">
                  <p> میزان تسلط  </p>
                  <p>{i.mizan} </p>
                </div>
                <div className="flex-item">
                  <Button variant="danger" style={{height:'100%'}} onClick={() => deleteProductHandler(i.skill)}>
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

export default Skill;
