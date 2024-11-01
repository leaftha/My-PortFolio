import style from "../style/contact.module.css";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Confetti from "./cofetti";
import { CreateTypes } from "canvas-confetti";

function Contact(props: {
  setEnd: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);
  const animationInstanceRef = useRef<CreateTypes | null>(null);
  const comportent = useRef<HTMLDivElement>(null);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [index, setIndex] = useState(0);
  const isView = useInView(comportent);

  useEffect(() => {
    if (isView) {
      if (index == titleText.length - 1) return;

      setTimeout(
        () => {
          setIndex(index + 1);
        },
        index == 0 ? 1000 : 150
      );
    } else {
      setIndex(0);
    }
  }, [index, isView]);
  function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("message", message);
    if (name.length !== 0 && phone.length !== 0 && message.length !== 0) {
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
      setName("");
      setPhone("");
      setMessage("");
    } else {
      alert("빈칸을 채워주세요");
    }
  }

  const titleText = [
    "Contáctame", // Spanish
    "Свяжитесь со мной", // Russian
    "お問い合わせ", // Japanese
    "Liên hệ với tôi", // Vietnamese
    "Contate-me", // Portuguese
    "연락하기", // Korean
    "联系我们", // Chinese (Simplified)
    "İletişime geçin", // Turkish
    "Kontaktieren Sie mich", // German
    "Επικοινωνήστε μαζί μου", // Greek
    "Contactez-moi", // French
    "Contattami", // Italian
    "Neem contact met mij op", // Dutch
    "Contact Me", // English
  ];

  if (isView) {
    props.setEnd(true);
  } else {
    props.setEnd(false);
  }

  const makeShot = (particleRatio: number, opts: object) => {
    if (animationInstanceRef.current) {
      animationInstanceRef.current({
        ...opts,
        origin: { y: 0.8 },
        particleCount: Math.floor(200 * particleRatio),
      });
    }
  };

  const fire = () => {
    makeShot(0.25, {
      spread: 200,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 50,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handlerFire = () => {
    if (!isAnimationEnabled) {
      setIsAnimationEnabled(true);
    }
    requestAnimationFrame(fire);
    fire();
  };

  const getInstance = (instance: CreateTypes | null) => {
    animationInstanceRef.current = instance;
  };

  return (
    <div className={style.main} ref={comportent}>
      <div className={style.titleContainer}>
        <motion.h1 className={style.title}>{titleText[index]}</motion.h1>
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
          <motion.button
            onClick={handlerFire}
            whileHover={{ scale: 1.2 }}
            type="submit"
            className={style.btn}
          >
            전송
          </motion.button>
        </div>
      </form>
      <Confetti refConfetti={getInstance} className="canvas" />
    </div>
  );
}

export default Contact;
