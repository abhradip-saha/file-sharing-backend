import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app=express();

app.use(cors());

app.use('/',router);

const PORT = process.env.PORT || 8000;

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

DBConnection();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
