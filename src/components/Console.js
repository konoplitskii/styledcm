import styled from 'styled-components'
import Flex from "./Flex";
import {useState} from "react";
import Line from "./Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: #000;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${(props)=> props.color || props.theme.color.primary};
  &:focus {
    outline: none;
  }
  @media${props => props.theme.media.phone} {
    //border: 1px solid red;
  }
`


const Console = ({color,...props})=> {

    const [lines,setLines] = useState(['C/user/konoplitskii>'])

    const onKeyPress = e => {
        if(e.charCode === 13) {
            setLines([...lines,'C/user/konoplitskii>'])
        }
    }

    return (
        <Flex>
            <Flex direction={"column"} margin={"0 10px"}>
                {
                    lines.map(item => (
                        <Line color={color}>{item}</Line>
                    ))
                }
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    )
}

export  default  Console;