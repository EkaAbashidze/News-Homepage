
import styled from "styled-components";
import MediaQuery from "react-responsive";
import ImgDesktop from "../images/image-web-3-desktop.jpg"
import ImgMobile from "../images/image-web-3-mobile.jpg";

export default function Main() {

    return (
        <Container>
        <MediaQuery maxWidth={1440}>
            <ImageMobile src={ImgMobile} alt="" />
        </MediaQuery>

        <MediaQuery minWidth={1440}>
            <ImageDesktop src={ImgDesktop} alt="" />
        </MediaQuery>

        <Headline>The Bright Future of Web 3.0?</Headline>

        <Description>
            <Para>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</Para>
            <Button>read more</Button>
        </Description>


        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 64px;
    @media screen and (min-width: 1440px) { 
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 300px 182px;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
        margin-bottom: 72px;
    }

`

const ImageMobile = styled.img`
    height: 300px;
    margin: 0 auto;
`; 

const ImageDesktop = styled.img`
    height: 300px;
    margin: 0 auto;
    @media screen and (min-width: 1440px) {
        grid-area: 1 / 1 / 2 / 3;
    }
`; 

const Description = styled.div`
    display: flex;
    flex-direction: column; 
        @media screen and (min-width: 1440px) {
        grid-area: 2 / 2 / 3 / 3; 
    }
`

const Headline = styled.h3`
    color: #00001a;
    font-weight: 800;
    font-size: 40px;
    line-height: 40px;
    max-width: 343px;
    padding-top: 24px;
    padding-bottom: 16px;
    @media screen and (min-width: 1440px) {
        grid-area: 2 / 1 / 3 / 2;
        padding: 0;
            max-width: 350px;
            font-size: 56px;
            line-height: 56px;
    }
`;

const Para = styled.h3`
    color: #5e607a;
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    max-width: 343px;
    padding-bottom: 24px;
        @media screen and (min-width: 1440px) {
        padding-bottom: 29px;
    }
`;

const Button = styled.button`
    background-color: #f15d51;
    color: #fffdfa;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 4.375px;
    text-transform: uppercase;
    border: 0;
    width: 185px;
    height: 48px;
    cursor: pointer;
`;