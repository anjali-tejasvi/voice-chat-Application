import React from 'react'
import Card from '../../../components/shared/card/Card';
import Button from '../../../components/shared/button/Button';
import TextInput from '../../../components/shared/TextInput/TextInput';
import styles from './StepOtp.module.css';
import { useState } from 'react';

const StepOtp = ({onNext}) => {

  const [otp,setOtp] = useState('');
  function Next(){}

  return (
   <>
      <div className={styles.cardWrapper}>
        <Card 
          title="🔒Enter the code we just texted you" >

            <TextInput value={otp}
            onChange= {(e) => setOtp(e.target.value)} />

            <div className={styles.actionButtonWrap}>
              <Button onClick={Next} text="Next ➡️" />
            </div>
            <p className={styles.bottomParagraph}>
             By entring your number, you're agreeing to our 
             Terms of Service and Privacy Policy.
           </p>
          </Card>
      </div>
   </>
  )
}

export default StepOtp