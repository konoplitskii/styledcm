import styled from 'styled-components'
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";


const AppWrapper = styled.div`
width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`


function App() {
  return (
    <AppWrapper className="App">
        <Flex justify={"center"}>
            <Title color={'green'}>Hello I am Console</Title>
        </Flex>
        <Flex direction={"column"}>
            <Console color={"green"} margin={"10px 0"}/>
            <Button outlined color={"green"}  align={"flex-end"}>Отправить</Button>
        </Flex>
    </AppWrapper>
  );
}

export default App;
