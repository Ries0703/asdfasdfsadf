
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Login: NextPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add login logic
    alert("Login functionality will be implemented!");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Đăng nhập</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Đăng nhập</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Mật khẩu:</label>
            <input
              id="password"
              type="password"
              name="password"
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Đăng nhập
          </button>

          <p className={styles.link}>
            Chưa có tài khoản? <Link href="/auth/register">Đăng ký</Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
