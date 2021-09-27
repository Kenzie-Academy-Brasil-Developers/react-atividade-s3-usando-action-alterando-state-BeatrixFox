import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { Container, Content } from "./style";

const UserCard = () => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <Container>
      <h3>User Name: {user.name} </h3>
      <Content>
        <input
          type="text"
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Digite um nome"
        />
        <button onClick={handleClick}>Change</button>
      </Content>
    </Container>
  );
};

export default UserCard;
