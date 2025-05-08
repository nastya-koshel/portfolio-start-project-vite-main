import myPhoto from "../../../assets/images/main-image-attempt.webp";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction="row" justifyContent="space-between">
                <FlexWrapper direction="column">
                    <h1>Software Developer</h1>
                    <span>Hello,  my name is Vahid Navazan</span>
                    <span>Short text with details about you, what you do or your professional career. You can add more information on the about page.</span>
                    <FlexWrapper direction="row">
                        <button>Projects</button>
                        <button>LinkedIn</button>
                    </FlexWrapper>
                </FlexWrapper>
                <Photo src={myPhoto}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    background-color: beige;
`

const Photo = styled.img`
    object-fit: cover;
    width: 500px;
`

