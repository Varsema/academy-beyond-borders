import { useState } from "react";
import TextInput from "../../../components/UI/TextInput";
import styles from "./FeedBack.module.scss";
import Loading from "../../../components/Loading/Loading";
import { useTranslation } from "react-i18next";

function FeedBack() {
  const {t} = useTranslation()
  const [load, setLoad] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')

  function handlClick (e) {
    e.preventDefault()
    setLoad(false)
    fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            description: text
        })
    })
    .then(res => res.json())
    .catch(err => console.error(err)) 
    .finally(() => {
      setLoad(false);
    })
}

  return (
      <div className="row">
        <div className="col-lg-4">
          <div className={styles.inputlist}>
            <TextInput
              type={"text"}
              value={name}
              placeholder={'Enter your name'}
              name={"name"}
              label={t('FeedBackComp.fullname')}
              icon={''}
              onChange={e => setName(e.target.value)}
            />
            <TextInput
              type={"text"}
              value={email}
              placeholder={'Enter your email'}
              name={"email"}
              label={t('FeedBackComp.email')}
              icon={''}
              onChange={e => setEmail(e.target.value)}
            />
            <TextInput
              type={"text"}
              value={subject}
              placeholder={'Enter subject'}
              name={"subject"}
              label={t('FeedBackComp.subject')}
              icon={''}
              onChange={e => setSubject(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-8">
          <div className={styles.inputlist} style={{marginTop: '50px'}}>
            <TextInput
              type={"textarea"}
              value={text}
              placeholder={'Your Message'}
              name={"text"}
              icon={''}
              rows={11}
              onChange={e => setText(e.target.value)}
            />
            {load && <Loading />}
            <button className={styles.submit} onClick={handlClick}>{t('FeedBackComp.submit')}</button>
          </div>
        </div>
      </div>
  );
}

export default FeedBack;
