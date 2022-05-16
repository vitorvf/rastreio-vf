import { useState } from "react"
import Header from "../components/header"
import { Container, Card, Errormessage } from "../styles/home"
import { useRouter } from "next/router"

export default function Home() {
  const [input, setInput] = useState("")
  const [error, setError] = useState(null)
  const validSearchOrder = /^[A-Z]{2}\d{9}[A-Z]{2}$/gm

  const router = useRouter()

  const handleSearch = (submitEvent) => {
    submitEvent.preventDefault()
    if (input.trim().length === 0 || !validSearchOrder.test(input)) {
      setError("Digite um código válido.")
    } else router.push(`/rastreio/${input}`)
  }

  return (
    <div>
      <Header />
      <Container>
        <Card>
          <h1>Rastrear Encomenda</h1>
          <p>Informe o código de rastreio abaixo para rastreamento</p>
          <form>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              type="text"
              placeholder="Insira o código de rastreio"
              style={{ border: error ? "1px solid red" : "#22234" }}
            />
            {!!error && <Errormessage>{error}</Errormessage>}

            <button onClick={handleSearch} type="button">
              Rastrear Agora!
            </button>
          </form>
        </Card>
      </Container>
    </div>
  )
}
