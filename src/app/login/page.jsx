"use client";

import styles from './loginPage.module.css'
import {useSession, signIn} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import {useEffect} from 'react'
 


const LoginPage = () => {

  const {data, status} = useSession();
  const router = useRouter();

  useEffect(() => {

    if (status === "loading") {
      return <div className={styles.loading}>Loading....</div>
    }

    if (status === 'authenticated') {
      router.push('/');
    }

  }, [status]);


  console.log(data, status);


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={()=>signIn('google')}>Sign with Google</div>
        <div className={styles.socialButton}>Sign with GitHub</div>
        <div className={styles.socialButton}>Sign with Facebook</div>
      </div>
    </div>
  );
}

export default LoginPage
