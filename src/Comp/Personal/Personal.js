import React, { useState } from "react";
import { DatePicker } from "react-advance-jalaali-datepicker";
import { Alert, Button } from "react-bootstrap";
const Personal = ({ myState, setMyState }) => {
  const [name, setName] = useState(myState.name || "");
  const [meli, setMeli] = useState({
    text: "",
    isTouch: false,
    error: "کد ملی شما معتبر نمیباشد",
  });
  const [email, setEmail] = useState({
    text: "",
    isTouch: false,
    error: "ایمیل شما معتبر نمیباشد",
  });
  const [pedar, setPedar] = useState(myState.pedar || "");
  const [gender, setGender] = useState(myState.gender || "");
  const [tel, setTel] = useState(myState.tel || "");
  const [address, setAddress] = useState(myState.address || "");
  const [tahol, setTahol] = useState(myState.tahol || "");
  const [tavalod, setTavalod] = useState(myState.tavalod || "");
  const [city, setCity] = useState(myState.city || "");

  const [flag, setFlag] = useState(false);

  const saveData = () => {
    setMyState((prev) => {
      const help = { ...prev };
      const newData = {
        ...help,
        Personal: {
          name,
          meli,
          email,
          pedar,
          gender,
          tel,
          address,
          tahol,
          tavalod,
          city,
        },
      };
      return newData;
    });
    setFlag(true);
  };
  const toched = (e) => {
    setEmail((last) => {
      let help = { ...last };
      help.isTouch = true;
      return { ...help };
    });
  };
  const focoss = (e) => {
    setEmail((last) => {
      let help = { ...last };
      help.isTouch = false;
      return { ...help };
    });
  };
  const toched2 = (e) => {
    setMeli((last) => {
      let help = { ...last };
      help.isTouch = true;
      return { ...help };
    });
  };
  const focoss2 = (e) => {
    setMeli((last) => {
      let help = { ...last };
      help.isTouch = false;
      return { ...help };
    });
  };

  const emailRegex = /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/;
  const meliRegex = /^[0-9]{10}$/;

  return (
    <div>
      <fieldset>
        <legend>
          <h3>مشخصات فردی</h3>
        </legend>
        <div className="account-details">
          <div>
            <label> نام ونام خانوادگی </label>
            <input
              type="text"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <label>
              {" "}
              کد ملی*{" "}
              {!meliRegex.test(meli.text) && meli.isTouch ? (
                <p style={{ color: "red" }}>{meli.error}</p>
              ) : (
                false
              )}{" "}
            </label>
            <input
              onBlur={toched2}
              onFocus={focoss2}
              type="number"
              name="name"
              required
              onChange={(e) => setMeli((prev)=> {
                const help = {...prev}
                help.text = e.target.value
                return help
              })}
              value={meli.text}
            />
          </div>
          <div>
            <label>
              {" "}
              ایمیل*{" "}
              {!emailRegex.test(email.text) && email.isTouch ? (
                <p style={{ color: "red" }}>{email.error}</p>
              ) : (
                false
              )}{" "}
            </label>
            <input
              onBlur={toched}
              onFocus={focoss}
              type="email"
              name="name"
              required
              onChange={(e) => setEmail((prev)=> {
                const help = {...prev}
                help.text = e.target.value
                return help
              })}
              value={email.text}
            />
          </div>
          <div>
            <label> نام پدر</label>
            <input
              type="text"
              name="name"
              required
              onChange={(e) => setPedar(e.target.value)}
              value={pedar}
            />
          </div>
          <div className="gender">
            <input
              type="radio"
              value={gender}
              id="male"
              name="gender"
              required
              onChange={(e) => setGender("مرد")}
            />
            <label htmlFor="male" className="radio">
              مرد
            </label>
            <input
              type="radio"
              value={gender}
              onChange={(e) => setGender("نا مشخص")}
              id="female"
              name="gender"
              required
            />
            <label htmlFor="female" className="radio">
              نا مشخص
            </label>
            <input
              type="radio"
              value={gender}
              onChange={(e) => setGender("زن")}
              id="female"
              name="gender"
              required
            />
            <label htmlFor="female" className="radio">
              زن
            </label>
          </div>
          <div>
            <label>تلفن</label>
            <input
              type="number"
              name="name"
              required
              onChange={(e) => setTel(e.target.value)}
              value={tel}
            />
          </div>
          <div>
            <label>آدرس</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div>
            <label> شهر </label>
            <input
              type="text"
              name="name"
              required
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div>
            <label> تاهل </label>
            <input
              type="radio"
              value={gender}
              onChange={(e) => setTahol(" مجرد")}
              id="mojarad"
              name="gender"
              required
            />
            <label htmlFor="mojarad" className="radio">
              مجرد
            </label>
            <input
              type="radio"
              value={gender}
              onChange={(e) => setTahol("متاهل")}
              id="motahel"
              name="gender"
              required
            />
            <label htmlFor="motahel" className="radio">
              متاهل
            </label>
          </div>
          <div>
            <label> تولد </label>
            <DatePicker onChange={(e) => setTavalod(e)} preSelected={tavalod} />
          </div>

          <Button
             style={{ width: "20%", height: "50px", margin: "10px" }}
            onClick={saveData}
            disabled={
              name &&
              meli &&
              email &&
              pedar &&
              gender &&
              tel &&
              address &&
              tahol &&
              tavalod &&
              city &&
              emailRegex.test(email.text) &&
              meliRegex.test(meli.text)
                ? false
                : true
            }
          >
            ثبت
          </Button>
        </div>
        {flag ? (
          <Alert variant="success" onClose={() => setFlag(false)} dismissible>
            <Alert.Heading> اطلاعات ثبت شد</Alert.Heading>
            <p>قسمت های بعد را پر کنید</p>
          </Alert>
        ) : (
          ""
        )}
      </fieldset>
    </div>
  );
};

export default Personal;
