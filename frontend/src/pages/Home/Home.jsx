import React from 'react'
import styles from './Home.module.css';
import { Link, useNavigate} from 'react-router-dom';
import Card from '../../components/shared/card/Card';
import Button from '../../components/shared/button/Button';
const Home = () => {
  const signInLink ={
    color: '#0077FF',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '8px'
  }

  const history =  useNavigate();

  const startRegister = path =>{
    history(path)
  }

  return (
   <div className={styles.cardWrapper}>
    <Card title="🙏Welcome to Dev talks">
    <p className={styles.text}>
          Welcome Developers!! This is Dev Talks 
          and here you can talk to other developers.
          Do share your experience with others and
          learn and grow together.

    </p>
    <div>
       <Button onClick={()=> startRegister('/authenticate')} text="Let's Go ➡️" />
    </div>
    <div className={styles.signin}>
          <span className={styles.hasInvite}>Have an invite text?</span>

          <Link style={signInLink} to="/login">Sign in</Link>
    </div>
    </Card>
   </div>
  )
}

export default Home







