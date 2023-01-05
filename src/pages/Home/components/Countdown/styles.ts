import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 8rem;
    line-height: 6rem;
    gap: 0.5rem;

    span {
      padding: 2rem 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 4rem;
    line-height: 1.25rem;
    gap: 0.5rem;

    span {
      padding: 2rem 0.5rem;
    }
  }
`;
export const Separator = styled.div`
  color: ${(props) => props.theme["green-500"]};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 2rem;
  }

  @media screen and (max-width: 768px) {
    width: 1rem;

    span {
      padding: 1.85rem 0.925rem;
    }
  }
`;
