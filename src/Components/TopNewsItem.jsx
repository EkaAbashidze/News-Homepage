import styled from "styled-components"

export default function TopNewsItem({newsImage, number, headline, description}) {

    return (
        <Container>
            <Image src={newsImage} alt="" />
            <div>
                <Number>{number}</Number>
                <Headline>{headline}</Headline>
                <Para>{description}</Para>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    column-gap: 24px;
`

const Image = styled.img`
    width: 100px;
    height: 129px;
`

const Number = styled.h2`
    color: #c5c6ce;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
`;

const Headline = styled.h3`
    color: #00001a;
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    padding-top: 12px;
    padding-bottom: 9px;
    cursor: pointer;
    transitiongit : color .3s ease;
    &:hover {
        color: #f15d51;
    }
`;

const Para = styled.p`
    color: #5e607a;
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    max-width: 220px; 
`;