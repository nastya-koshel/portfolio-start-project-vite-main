import styled from "styled-components";
import projImg from "../../../../assets/images/proj-1.webp"
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

export const Proj = () => {
    return (
        <FlexWrapper justifyContent="center">
            <Card>
                <FlexWrapper direction={"column"}>
                    <ProjName>Project</ProjName>
                    <ProjText>Lsfmcvlksmvmlsmfkdbm;mzxdmblmf</ProjText>
                    <ProjBtn>View Project</ProjBtn>
                </FlexWrapper>
                <FlexWrapper>
                    <ProjImage src={projImg}></ProjImage>
                </FlexWrapper>
            </Card>
        </FlexWrapper>
    );
};

const ProjName = styled.h3`

`
const ProjText = styled.p`

`
const ProjBtn = styled.button`

`

const ProjImage = styled.img`
    width: 100px;
`

const Card = styled.div`
    background-color: lavender;
    display: flex;
`
