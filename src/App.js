import React, { useState } from "react";
import "./App.css";
import { Alert, Container } from "react-bootstrap";

import Footer from "./Comp/footer/footer";
import Header from "./Comp/header/header";
import Personal from "./Comp/Personal/Personal";
import Education from "./Comp/Education/Education";
import Work from "./Comp/Work/Work";
import Course from "./Comp/Course/Course";
import Language from "./Comp/Language/Language";
import Skill from "./Comp/Skill/Skill";

function App() {
  const [myState, setMyState] = useState({});
  const [ghanon1, setGhanon1] = useState(false);
  const [ghanon2, setGhanon2] = useState(false);
  const [flag, setFlag] = useState(false);

  const sendAllDataToBackend = (e) => {
    console.log(e);
    const help = JSON.stringify(myState);
    localStorage.setItem("myAllData", help);
    setFlag(true);
  };

  console.log(myState);

  return (
    <>
      <Header />

      <main className="py-3 mainn">
        <Container>
          {flag ? (
            <Alert variant="success" onClose={() => setFlag(false)} dismissible>
              <Alert.Heading> اطلاعات ارسال شد</Alert.Heading>
            </Alert>
          ) : (
            ""
          )}
          <div className="main-block">
            <form>
              <h1>فرم را پر کنید</h1>
              <Personal myState={myState} setMyState={setMyState} />
              <Education myState={myState} setMyState={setMyState} />
              <Work myState={myState} setMyState={setMyState} />
              <Course myState={myState} setMyState={setMyState} />
              <Language myState={myState} setMyState={setMyState} />
              <Skill myState={myState} setMyState={setMyState} />

              <legend>
                <h3>شرایط </h3>
              </legend>
              <fieldset className="terms-mailing">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="checkbox"
                    onChange={(e) => setGhanon1(e.target.checked)}
                  />{" "}
                  <span style={{ color: "black" }}>
                    {" "}
                    {`اینجانب ${1} تمام اطلاعات فوق را تایید میکنم`}{" "}
                  </span>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="checkbox"
                    onChange={(e) => setGhanon2(e.target.checked)}
                  />{" "}
                  <span style={{ color: "black" }}>قوانین سایت را میپذیرم</span>
                </div>
              </fieldset>
              <button
                onClick={(e) => sendAllDataToBackend(e)}
                disabled={ghanon1 && ghanon2 ? false : true}
                style={{
                  backgroundColor: ghanon1 && ghanon2 ? "#99ff00" : "#8ebf00",
                }}
              >
                ارسال
              </button>
            </form>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default React.memo(App);
