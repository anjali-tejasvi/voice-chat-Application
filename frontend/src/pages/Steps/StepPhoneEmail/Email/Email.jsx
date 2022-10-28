import React, { useState } from 'react'
import Card from '../../../../components/shared/card/Card';
import Button from '../../../../components/shared/button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';



const Email = () => {

  const [email, setEmail] = useState('');


  return (
    <Card title="📧 Enter your Email Id" >
   <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />

    <div>
    <div className={styles.actionButtonWrap}>
        <Button text="Next ➡️" />
        </div>
        <p className={styles.bottomParagraph}>
          By entring your number, you're agreeing to our 
          Terms of Service and Privacy Policy.
        </p>
    </div>
  </Card>
  )
}

export default Email