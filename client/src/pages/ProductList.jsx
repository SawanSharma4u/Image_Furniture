import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState(cat);
  const [sort, setSort] = useState("Newest");


  return (
    <Container>

      <Navbar />
      <Title>{filters}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter :</FilterText>
          <Select>
            <Option disabled>
              Material
            </Option>
            <Option value="Wood">Solid Wood</Option>
          </Select>
          <Select onChange={(event)=>{setFilters(event.target.value)}}>
            <Option disabled>
              Product Type :
            </Option>
            <Option value="Furniture">All</Option>
            <Option value="Bed">Beds</Option>
            <Option value="Sofa">Sofa</Option>
            <Option value="DinningChair">Dining Chairs</Option>
            <Option value="Chair">Chairs</Option>
            <Option value="Table">Tables</Option>
            <Option value="LivingRoom">Living Room</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <Select  onChange={(event)=>{setSort(event.target.value)}}>
            <Option value ="Newest">Newest</Option>
            <Option value="Asc">Price: Low to High</Option>
            <Option value="Desc">Price: High to Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
