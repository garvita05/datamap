import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
// import SearchIcon from "@mui/icons-material/Search";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const Container = styled.div`
  height: 75px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:center
  justify-content: space-between;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 5px;
`;

const Navbar = () => {
  const Navigate = useNavigate();
  // const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          <Button onClick={() => Navigate("/choroplethMap")}>
            <MenuItem>HeatMap </MenuItem>
          </Button>
          {/* <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Center>
          <Button onClick={() => Navigate("/")}>
            <Logo>Khoj: for the future</Logo>
          </Button>
        </Center>
        <Right>
          <Button onClick={() => Navigate("/")}>
            <MenuItem>About Us </MenuItem>
          </Button>
          <Button onClick={() => Navigate("/")}>
            <MenuItem>Our Team</MenuItem>
          </Button>

          <Link to="/cart">
            <MenuItem>
              <Badge color="primary">
                <Search />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
