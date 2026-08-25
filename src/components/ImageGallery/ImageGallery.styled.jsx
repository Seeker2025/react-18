import styled from "styled-components";

export const GalleryUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px 45px 25px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px dashed red; */
`;