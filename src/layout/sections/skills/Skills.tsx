import sprite from "../../../assets/images/icons-sprite.svg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper direction="column">
                <FlexWrapper justifyContent="space-between">
                    <Pin nameOfId={"vscode"}/>
                    <Pin nameOfId={"js"}/>
                    <Pin nameOfId={"css"}/>
                    <Pin nameOfId={"html"}/>
                    <Pin nameOfId={"cibGreensock"}/>
                    <Pin nameOfId={"vector"}/>
                </FlexWrapper>
                <FlexWrapper justifyContent="space-between">
                    <Pin nameOfId={"github"}/>
                    <Pin nameOfId={"git"}/>
                    <Pin nameOfId={"react"}/>
                    <Pin nameOfId={"sass"}/>
                    <Pin nameOfId={"bootstrap"}/>
                    <Pin nameOfId={"tailwind"}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSkills>
    );
};

type PinsPropsType = {
    nameOfId?: string;
}

const Pin = (props: PinsPropsType) => {
    return (
        <StyledSvg>
            <use xlinkHref={`${sprite}#${props.nameOfId}`}/>
        </StyledSvg>
    )
}

const StyledSvg = styled.svg`
    width: 120px;
    height: 120px;
`

const StyledSkills = styled.div`
    background-color: lightblue;

`