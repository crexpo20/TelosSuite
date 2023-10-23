import { default as  AppRouter } from "./router/AppRouter";

function App() {
  localStorage.setItem("destino", "Cualquier Lugar")
  localStorage.setItem("huespedes", 1)
  localStorage.setItem("niños",0)
  localStorage.setItem("mascotas",0)
  localStorage.setItem("tipo","cualquiera")
  return (
    <AppRouter/>
  );
}

export default App;
