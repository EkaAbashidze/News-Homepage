import styled from "styled-components"

export default function LatestNewsItem({headline, content}) {

    return (
        <>
            <Headline>{headline}</Headline>
            <Para>{content}</Para>
        </>
    )
}

const Headline = styled.h3`
    color: #fffdfa;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
`;

const Para = styled.h3`
    color: #c5c6ce;
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    padding-top: 8px;
`;