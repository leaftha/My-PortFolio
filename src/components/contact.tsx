import style from "../style/contact.module.css";

function Contact() {
  return (
    <div className={style.main}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Contact Me</h1>
      </div>

      <form className={style.forms}>
        <div className={style.formContent}>
          <label className={style.formTitle}>이름</label>
          <input className={style.inputs} />
        </div>
        <div className={style.formContent}>
          <label className={style.formTitle}>연락처</label>
          <input className={style.inputs} />
        </div>
        <label className={style.formTitle}>내용</label>
        <textarea className={style.text} />
        <div className={style.btnContainer}>
          <button className={style.btn}>전송</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
