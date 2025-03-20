
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Login: NextPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login functionality will be implemented!");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Đăng nhập</title>
      </Head>

      <main className={styles.main}>
        <Typography variant="h4" className={styles.title}>
          Đăng nhập
        </Typography>

        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            id="email"
            label="Email"
            type="email"
            name="email"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            label="Mật khẩu"
            type="password"
            name="password"
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" className={styles.button} fullWidth>
            Đăng nhập
          </Button>

          <Typography variant="body2" className={styles.link} marginTop={2} >
            Chưa có tài khoản? <Link href="/auth/register">Đăng ký</Link>
          </Typography>
        </form>
      </main>
    </div>
  );
};

export default Login;
