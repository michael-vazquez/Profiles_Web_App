import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  height: 80px;
  background-image: linear-gradient(to left, #47d3f9, #22a7f0);
`;

const Image = styled.img`
  width: 189px;
  height: 43px;
  object-fit: contain;
  margin-left: 40px;
  margin-top: 19px;
`;

export default function Header() {
  return (
    <Bar>
      <Image src="assets/logo.png" alt="logo" />
    </Bar>
  );
}
