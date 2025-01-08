const express = require("express");
const app = express();

app.use(express.json());

var users = [
  { id: 1, name: 'Paul' },
  { id: 2, name: 'David' },
  { id: 3, name: 'Mateo' }
];

app.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userId = users.findIndex(user => user.id === id);

  if (userId !== -1) {
    users.splice(userId, 1);
    res.send("Usuario Eliminado");
  } else {
    res.send("Usuario no encontrado");
  }
});

app.listen(4000, () => {
  console.log("Servicio corriendo...");
});
