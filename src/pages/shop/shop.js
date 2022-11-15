import Header from "../../components/Header/header";
import styled from "styled-components";

const Money = styled.h1`
    font-size: 100px;
    margin-top: 200px;
`

export default function Shop(){
    return(
        <div>
            <Header></Header>

            <Money> find me and throw all ur money at me. (not coin money tho those hurt just the paper kind :) you wont get a cookie in return. </Money>
            
        </div>
    )
}
