import { default as  AppRouter } from "./router/AppRouter";

function App() {
  localStorage.setItem("destino", "Cualquier Lugar")
  return (
    <AppRouter/>
  );
}

export default App;
