const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const apiRoutes = require("./routes/v1/apiRoutes");

// Para poder hacer post, put o patch
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 

 app.use(cors());
app.use("/api", apiRoutes);

/* app.get("/prueba",(req, res) => { 
  res.send(`Me has mandado un petición a la ruta ${req.url}`)
 }) */

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
