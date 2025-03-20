
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

const ProfileManage: NextPage = () => {
  const [profile, setProfile] = useState({
    name: "Your Name",
    title: "Web Developer & Designer",
    about: "Tôi là một lập trình viên với niềm đam mê công nghệ và sáng tạo.",
    skills: "React, Next.js, TypeScript, CSS, HTML",
    email: "your.email@example.com"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add save functionality
    alert("Profile updated!");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Quản lý Profile</title>
        <meta name="description" content="Quản lý thông tin cá nhân" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Quản lý Profile</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Tên:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="title">Chức danh:</label>
            <input
              id="title"
              type="text"
              name="title" 
              value={profile.title}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="about">Giới thiệu:</label>
            <textarea
              id="about"
              name="about"
              value={profile.about}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="skills">Kỹ năng:</label>
            <input
              id="skills"
              type="text"
              name="skills"
              value={profile.skills}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.button}>
            Lưu thay đổi
          </button>
        </form>
      </main>
    </div>
  );
};

export default ProfileManage;
