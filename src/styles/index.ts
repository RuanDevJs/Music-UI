import styled, { keyframes } from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: minmax(calc(100vw * 0.18), auto) 2fr;
  gap: 1rem;

  background-color: #fff;
  height: 100vh;

  video {
    display: none;
  }

  position: relative;
`;

export const Sidenav = styled.div`
  padding: 1rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border-right: 1px solid #f2f2f2;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-weight: ${({ theme }) => theme["font-weight"].bold};
    font-size: 18px;
    color: ${({ theme }) => theme["colors"].dark};
  }
`;

export const Navigation = styled.div`
  h2 {
    font-weight: ${({ theme }) => theme["font-weight"].medium};
    font-size: 1rem;
    color: ${({ theme }) => theme["colors"].grey};
  }

  .navigation-link {
    display: flex;
    justify-content: space-between;

    padding: 8px 12px;
    margin-top: 1rem;

    border-radius: 50px;
    background-color: #f2f2f2;

    a {
      font-weight: ${({ theme }) => theme["font-weight"].regular};
      font-size: ${({ theme }) => theme["font-size"].md};
      color: ${({ theme }) => theme["colors"].dark};
    }

    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #f9f9f9;
    }
  }

  .active-link {
    background-color: ${({ theme }) => theme.colors.dark};

    a {
      font-weight: ${({ theme }) => theme["font-weight"].regular};
      font-size: ${({ theme }) => theme["font-size"].md};
      color: ${({ theme }) => theme["colors"].white};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const Content = styled.div``;

export const Header = styled.header`
  padding: 1rem;
  display: grid;

  grid-template-columns: 1fr 220px;
  gap: 1rem;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;

  background-color: #f2f2f2;
  border-radius: 50px;

  height: 50px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px;
    cursor: pointer;

    background-color: transparent;
    cursor: pointer;

    border: 0;
    color: #c2c2c2;

    transition: 0.3s ease-in-out;

    &:hover {
      color: #000;
      opacity: 0.7;
    }
  }

  input {
    width: 100%;
    height: 100%;

    background-color: transparent;
    color: ${({ theme }) => theme.colors.dark};

    border: 0;
    outline: 0;
  }
`;

export const Account = styled.div`
  display: flex;
  align-items: center;

  background-color: #f2f2f2;
  border-radius: 50px;

  gap: 1rem;

  img {
    object-fit: cover;
    border-radius: 50px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    cursor: pointer;

    p {
      font-weight: ${({ theme }) => theme["font-weight"].light};
      font-size: ${({ theme }) => theme["font-size"].md};
      color: ${({ theme }) => theme["colors"].dark};
    }
  }
`;

export const Discover = styled.div`
  margin-top: 2rem;
  padding: 1rem;

  h1 {
    font-weight: ${({ theme }) => theme["font-weight"].light};
    font-size: 24px;
    color: ${({ theme }) => theme["colors"].dark};
  }
`;

export const DiscoverContainer = styled.div`
  margin-top: 1rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const DiscoverCard = styled.div`
  &:nth-child(1) {
    background: linear-gradient(80deg, #c33759, #e96faa);
  }

  &:nth-child(2) {
    background: linear-gradient(80deg, #37b3c3, #6f8ae9);
  }

  &:nth-child(3) {
    background: linear-gradient(80deg, #4bb148, #99f3ad);
  }

  &:nth-child(4) {
    background: linear-gradient(80deg, #fd9536, #e9c76f);
  }

  height: calc(100vw * 0.1);

  padding: 12px;
  border-radius: 8px;

  h2 {
    font-weight: ${({ theme }) => theme["font-weight"].bold};
    font-size: 20px;
    color: ${({ theme }) => theme["colors"].white};
  }

  p {
    font-weight: ${({ theme }) => theme["font-weight"].light};
    font-size: 12px;
    color: ${({ theme }) => theme["colors"].white};

    margin-top: 8px;
    line-height: 1.5rem;
  }

  transition: 0.32s ease-in-out;

  &:hover {
    opacity: 0.82;
    filter: brightness(1.12);
    cursor: pointer;
  }
`;

export const Playslist = styled.div`
  margin-top: 2rem;
  padding: 1rem;

  h1 {
    font-weight: ${({ theme }) => theme["font-weight"].light};
    font-size: 24px;
    color: ${({ theme }) => theme["colors"].dark};
  }
`;

export const PlayslistContainer = styled.div`
  margin-top: 1rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const PlayslistCard = styled.div`
  border-radius: 4px;
  display: flex;

  align-items: flex-start;
  gap: 1rem;

  position: relative;
  background-color: #f9f9f9;

  .info-play {
    margin-top: 1rem;
  }

  .play-section {
    position: absolute;
    bottom: 10px;

    right: 20px;
    display: flex;

    align-items: center;
    gap: 10px;

    color: ${({ theme }) => theme.colors.dark};
    cursor: pointer;

    svg {
      transition: 0.32s ease-in-out;
    }

    svg:hover {
      opacity: 0.42;
    }
  }

  img {
    width: calc(100vw * 0.18);
    height: calc(100vw * 0.2);

    object-fit: cover;
    border-radius: 16px 0 0 16px;
  }

  h3 {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme["font-weight"].bold};
    color: ${({ theme }) => theme.colors.dark};
  }

  p {
    font-size: 12px;
    line-height: 1.5rem;
    color: #c2c2c2;
  }
`;

const AnimatePoster = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
`;

export const Playing = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 80px;

  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 72px 72px 0 0;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  animation: ${AnimatePoster} 0.32s forwards;

  span {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme["font-weight"].medium};
    color: #f9f9f9;
  }

  img {
    width: 50px;
    height: 50px;

    border-radius: 4px;
    object-fit: cover;
  }
`;
