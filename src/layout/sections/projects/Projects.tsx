import {Proj} from "./Proj/Proj.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Proj />
            <Proj/>
            <Proj/>
        </StyledProjects>
    )
};

const StyledProjects = styled.div`
    background: #c5acca;
`

