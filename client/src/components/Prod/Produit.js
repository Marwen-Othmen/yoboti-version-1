import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../Annoncer/Announcement";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { mobile } from "../Responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding :"0px", flexDirection:"Column" })};
`;
const ImgComtainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  padding: 20px;
  margin: 2px;
  object-fit: cover;
  ${mobile({ height:"40vh" })};
`;
const InfoComtainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding:"10px" })};
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Prix = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.p`
  width: 80%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width:"100%" })};
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  
`;

const FilterType = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterTypeOption = styled.option``;
const  AddContainer =styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width:"100%" })};
`;
const  AmountContainer =styled.div`
display: flex;
align-items: center;
font-weight:600;
`;
const  Amount =styled.span`
width: 40px;
height: 40px;
border-radius: 50px;
border:1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin:5px 15px;

`;

const  Button =styled.button`
padding: 15px ;
border:2px solid teal;
background-color: white;
cursor: pointer;
font-weight:600;
transition:all 0.5s ease; &:hover {
  background-color: red;
  transform: scale(1.1);
}
`;



const Produit = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgComtainer>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tractionfr02.jpg/1200px-Tractionfr02.jpg" />
        </ImgComtainer>
        <InfoComtainer>
          <Title> Citro??n Traction Avant </Title>
          <Description>
            L'automobile est un moyen de transport priv?? parmi les plus utilis??s
            au monde et le plus utilis?? en France4,5. Sa capacit?? est
            g??n??ralement de deux ?? cinq personnes, mais peut varier de une ??
            neuf places. L'usage limite l'emploi du terme automobile aux
            v??hicules poss??dant quatre roues, ou plus rarement trois ou six
            roues, de dimensions inf??rieures ?? celle des autobus et des camions,
            mais englobe parfois les camionnettes. Bien qu'??tant des ?? v??hicules
            automobiles ??, les motocyclettes ne sont pas habituellement class??es
            dans cette cat??gorie.
          </Description>
          <Prix> $200000 </Prix>
          <FilterContainer>
            <Filter>
              <FilterTitle> Color </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="red" />
              <FilterColor color="green" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Model </FilterTitle>
              <FilterType>
                <FilterTypeOption> 4x4 </FilterTypeOption>
                <FilterTypeOption> 4X2 </FilterTypeOption>
              </FilterType>
            </Filter>
          </FilterContainer>
    
        <AddContainer>
          <AmountContainer>
            <Remove />
            <Amount> 1</Amount>
            <Add />
          </AmountContainer>
          <Button> ADD TO CART </Button>
        </AddContainer>
        </InfoComtainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Produit;
