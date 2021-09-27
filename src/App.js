import { Container } from "./style";
import UserCard from "./components/UserCard/UserCard";

function App() {
  return (
    <Container>
      <main>
        <h1>Usando Redux</h1>
        <UserCard />
      </main>
    </Container>
  );
}

export default App;
