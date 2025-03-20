
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Register: NextPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add registration logic
    alert("Registration functionality will be implemented!");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Đăng ký</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Đăng ký</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Họ tên:</label>
            <input
              id="name"
              type="text"
              name="name"
              required
            />
          </div>

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

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Đăng ký
          </button>

          <p className={styles.link}>
            Đã có tài khoản? <Link href="/auth/login">Đăng nhập</Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Register;
