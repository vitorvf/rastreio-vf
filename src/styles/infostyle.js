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
// export const InfoResults = styled.div`
//   ul {
//     margin: 0px auto;
//     width: 100%;
//     background: white;
//     border-radius: 8px;
//     overflow-y: auto;
//     max-height: 45rem;
//     box-shadow: 0px 18px 41px rgba(0, 0, 0, 0.05);
//   }

//   li {
//     background: red;
//     padding: 20px 30px;
//     display: grid;
//     gap: 20px;
//     -webkit-box-align: center;
//     align-items: center;
//     grid-template-columns: 1fr 1fr;
//     color: #333333;
//   }

//   div {
//     display: flex;
//   }

//   h5 {
//     font-weight: 400;
//     font-size: 1.5rem;
//     color: #333333;
//   }

//   p {
//     margin: 3px 5px 0px 0px;
//     font-size: 1rem;
//     color: #333333;
//   }
// `
