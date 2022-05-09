import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`
export const Card = styled.div`
  padding: 30px;
  background: white;
  max-width: 400px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 50px;
  transition: all 0.3s ease 0s;
  border-radius: 6px;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
  }

  input {
    margin: 20px auto;
    width: 100%;
    padding: 10px;
    border: 1px solid black;
    border-radius: 4px;
  }

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
export const Errormessage = styled.p`
  font-size: 1.3rem;
  color: red;
  margin-bottom: 15px;
`
