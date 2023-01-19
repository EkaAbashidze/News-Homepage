import styled from "styled-components"
import LatestNewsItem from "./LatestNewsItem";

export default function LatestNews() {

    return (
        <Container>
            <Headline>New</Headline>
            <LatestNewsItem headline="Hydrogen VS Electric Cars" content="Will hydrogen-fueled cars ever catch up to EVs?"/>
            <Line></Line>
            <LatestNewsItem headline="The Downsides of AI Artistry" content="What are the possible adverse effects of on-demand AI image generation?"/>
            <Line></Line>
            <LatestNewsItem headline="Is VC Funding Drying Up?" content="Private funding by VC firms is down 50% YOY. We take a look at what that means."/>
        </Container>
    );
}

const Container = styled.div`
    background-color: #00001a;
    color: #e9aa52;
    width: 343px;
    height: 489px;
    margin-bottom: 65px;
    padding: 24px 20px;
        @media screen and (min-width: 1440px) {
            width: 350px;
            height: 511px;
            padding: 32px 24px;
    }
`;

const Line = styled.div`
    width: 302px;
    height: 1px;
    background-color: #5e607a;
    margin-top: 29px;
    margin-bottom: 31px;
`;  

const Headline = styled.h1`
    padding-bottom: 35px;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    @media screen and (min-width: 1440px) {
        font-size: 40px;
        line-height: 40px;
    }
`;