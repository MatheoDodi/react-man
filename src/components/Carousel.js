import React from "react";
import styled from "styled-components";

const Carousel = () => {
  return (
    <ComicSection>
      <Comic>
        <Cover src="https://via.placeholder.com/225x340" />
      </Comic>
    </ComicSection>
  );
};

export default Carousel;

const ComicSection = styled.div`
  padding: 4rem 0 2rem 0;
`;

const Comic = styled.div``;

const Cover = styled.img`
  height: 340px;
  width: 225px;
`;
