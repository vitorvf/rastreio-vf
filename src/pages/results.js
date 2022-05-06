import Header from "../components/Header"
import Link from "next/link"
// import Rastreio from "../../pages/rastreio/[codigo]"

import {
  HeaderResults,
  Container,
  Card,
  SectionResults,
} from "../styles/infostyle"

export default function Resultado({ data }) {
  // if (data?.success == true) {
  // }

  return (
    <div>
      <Header />
      <Container>
        <SectionResults>
          <Card>
            <h2>Informações do rastreio</h2>
            <HeaderResults>
              <h3>Status</h3>
              <h3>Movimentação</h3>
            </HeaderResults>

            {/* {data?.success === false && <h1>ERRO</h1>} */}

            <ul>
              {data?.data.events.map((status) => (
                <li>
                  <div>
                    <h5>{status.events}</h5>
                    <div className="p-time">
                      <p>{status.date}</p>
                      <p>{status.company?.name}</p>
                    </div>
                  </div>
                  <div>
                    <h5>
                      {" "}
                      Em trânsito para {status.destination_local}{" "}
                      {status.destination_city} - {status.uf}
                    </h5>
                    <p>
                      {status.local} - {status.city}/{status.uf}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Link href="/">
            <button type="button">Nova Consulta</button>
          </Link>
        </SectionResults>
      </Container>
    </div>
  )
}
