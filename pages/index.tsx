
import type { NextPage } from "next";
import Head from "next/head";
import { Container, Typography, Grid, Paper, Box, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>My Personal Page</title>
        <meta name="description" content="Welcome to my personal page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Xin chào, tôi là <Box component="span" sx={{ color: 'primary.main' }}>Your Name</Box>
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          Web Developer & Designer
        </Typography>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Item>
              <Typography variant="h6" gutterBottom>Về tôi</Typography>
              <Typography>Tôi là một lập trình viên với niềm đam mê công nghệ và sáng tạo.</Typography>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Item>
              <Typography variant="h6" gutterBottom>Kỹ năng</Typography>
              <Typography>React, Next.js, TypeScript, CSS, HTML</Typography>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Item>
              <Typography variant="h6" gutterBottom>Dự án</Typography>
              <Typography>Các dự án cá nhân và đóng góp của tôi.</Typography>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Item>
              <Typography variant="h6" gutterBottom>Liên hệ</Typography>
              <Typography>Email: your.email@example.com</Typography>
            </Item>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            component={Link}
            href="/profile/manage"
            size="large"
          >
            Quản lý Profile
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
