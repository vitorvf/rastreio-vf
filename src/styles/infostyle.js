import styled from "styled-components"

export const Container = styled.div`
  margin: 15rem auto 10rem;
  max-width: 90rem;
`

export const SectionResults = styled.section`
  margin: 15rem auto 10rem;
  max-width: 55rem;

  button {
    padding: 11px 30px;
    color: white;
    background: var(--rosa);
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    width: 100%;
  }
`
export const Card = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 5rem;
    text-align: center;
    color: black;
  }

  ul {
    margin: 0px auto;
    width: 100%;
    background: var(--full-white);
    border-radius: 8px;
    overflow-y: auto;
    max-height: 45rem;
    box-shadow: var(--primary-shadow);
  }

  li {
    background: white;
    padding: 20px 30px;
    display: grid;
    gap: 20px;
    -webkit-box-align: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    color: var(--gray-light);

    &:nth-child(2n) {
      background-color: rgb(243, 243, 244);
    }
  }

  p {
    margin: 3px 5px 0px 0px;

    font-size: 0.8rem;
    color: var(--gray-light);
  }

  h5 {
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--gray-light);
  }

  .h5-left {
    font-weight: 400;
    font-size: 0.9rem;
    color: var(--gray-light);
  }

  .p-time {
    display: flex;
  }
`
export const HeaderResults = styled.header`
  border-bottom: 1px solid rgb(227, 227, 230);
  padding: 10px 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  background: white;

  h3 {
    font-size: 0.9rem;
    font-weight: 500;
    color: #333333;
  }
`

export const ContornPosition = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 24px;
  max-width: 870px;
  margin: 80px auto;
  max-width: 870px;
  overflow: hidden;
`

export const CardDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 86px;
  position: relative;

  div {
    text-align: center;
  }

  .linha {
    text-align: center;
    background-color: #c8cdda;
    display: block;
    height: 2px;
    left: 115px;
    position: absolute;
    top: 25%;
    transform: translateY(-50%);
    width: 206px;
    z-index: 2;
    background-color: #c8cdda;
  }

  h5 {
    color: #c8cdda;
    font-weight: 600;
  }

  span {
    color: #3b3f51;
    font-size: 14px;
  }

  .imgspan {
    background-image: url("/images/postado-cinza.png");
    display: block;
    height: 40px;
    position: relative;
    width: 40px;
    z-index: 3;
    background-size: contain;
  }

  .imgspan2 {
    background-image: url("/images/encaminhado-cinza.png");
    display: block;
    height: 40px;
    position: relative;
    width: 40px;
    z-index: 3;
    /* background: url(https://i.imgur.com/NnvD3kZ.png) 0 0 no-repeat; */
    background-size: contain;
  }

  .imgspan3 {
    background-image: url("/images/saiu-cinza.png");
    display: block;
    height: 40px;
    position: relative;
    width: 40px;
    z-index: 3;
    /* background: url(https://i.imgur.com/NnvD3kZ.png) 0 0 no-repeat; */
    background-size: contain;
  }

  .imgspan4 {
    background-image: url("/images/entregue-cinza.png");
    display: block;
    height: 40px;
    position: relative;
    width: 40px;
    z-index: 3;
    /* background: url(https://i.imgur.com/NnvD3kZ.png) 0 0 no-repeat; */
    background-size: contain;
  }
`
