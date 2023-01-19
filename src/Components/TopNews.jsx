import styled from "styled-components";

import TopNewsItem from "./TopNewsItem";
import firstImage from "../images/image-retro-pcs.jpg";
import secondImage from "../images/image-top-laptops.jpg";
import thirdImage from "../images/image-gaming-growth.jpg";


export default function TopNews() {

    return (
        <Container>
            <TopNewsItem
                newsImage = {firstImage}
                number = "01"
                headline = "Reviving Retro PCs"
                description = "What happens when old PCs are given modern upgrades?"
            />
            <TopNewsItem
                newsImage = {secondImage}
                number = "02"
                headline = "Top 10 Laptops of 2022"
                description = "Our best picks for various needs and budgets."
            />
            <TopNewsItem
                newsImage = {thirdImage}
                number = "03"
                headline = "The Growth of Gaming"
                description = "How the pandemic has sparked fresh opportunities."
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 33px;
    margin-bottom: 81px;
    @media screen and (min-width: 1440px) {
        flex-direction: row;
        column-gap: 30px;
        margin-bottom: 127px;
    }
`;