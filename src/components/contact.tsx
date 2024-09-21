import style from "../style/contact.module.css";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("message", message);

    fetch(
      "https://script.google.com/macros/s/AKfycbyBl2GxvvVINsHW_8gZwJweaTHAoc2gp90iEaWxVOc-h88vOamPKgb5CoJujy__VcobxQ/exec",
      {
        method: "POST",
        mode: "cors", // CORS를 허용하는 모드
        body: formData,
      }
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className={style.main}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Contact Me</h1>
      </div>

      <form className={style.forms} onSubmit={formHandler}>
        <div className={style.formContent}>
          <label className={style.formTitle}>이름</label>
          <input
            className={style.inputs}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.formContent}>
          <label className={style.formTitle}>연락처</label>
          <input
            className={style.inputs}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <label className={style.formTitle}>내용</label>
        <textarea
          className={style.text}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className={style.btnContainer}>
          <button type="submit" className={style.btn}>
            전송
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
