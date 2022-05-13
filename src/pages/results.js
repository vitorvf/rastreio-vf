import Header from "../components/Header"
import Link from "next/link"
// import Rastreio from "../../pages/rastreio/[codigo]"
import {
  HeaderResults,
  Container,
  Card,
  SectionResults,
  ContornPosition,
  CardDiv,
} from "../styles/infostyle"

export default function Resultado({ data }) {
  // if (data?.data?.events[0].tag === "posted") {
  //   console.log("POSTADO")
  // }

  return (
    <div>
      <Header />

      <Container>
        <SectionResults>
          <Card>
            <h2>Informações do rastreio</h2>
            <div>
              <ContornPosition>
                <CardDiv>
                  <span
                    style={{
                      backgroundImage:
                        data?.data?.events?.[0]?.tag === "posted"
                          ? `url("/images/postado-verde.png")`
                          : "",
                    }}
                    className="imgspan"
                  ></span>
                  <div>
                    <h5
                      style={{
                        color:
                          data?.data?.events?.[0]?.tag === "posted"
                            ? `#2bc866	`
                            : "",
                      }}
                    >
                      Postado
                    </h5>
                    <span>13/12/2021 08:34:00</span>
                  </div>

                  <div
                    style={{
                      backgroundColor:
                        data?.data?.events?.[0]?.tag === "posted"
                          ? "#2bc866"
                          : "#c8cdda",
                    }}
                    className="linha"
                  ></div>
                </CardDiv>

                <CardDiv>
                  <span
                    style={{
                      backgroundImage:
                        data?.data?.events?.[2]?.tag === "movement"
                          ? `url("/images/encaminhado-verde.png")`
                          : "",
                    }}
                    className="imgspan2"
                  ></span>
                  <div>
                    <h5
                      style={{
                        color:
                          data?.data?.events?.[2]?.tag === "movement"
                            ? `#2bc866	`
                            : "",
                      }}
                    >
                      Encaminhado
                    </h5>
                    <span>13/12/2021 08:34:00</span>
                  </div>

                  <div
                    style={{
                      backgroundColor:
                        data?.data?.events?.[1]?.tag === "movement"
                          ? "#2bc866"
                          : "#c8cdda",
                    }}
                    className="linha"
                  ></div>
                </CardDiv>

                <CardDiv>
                  <span
                    style={{
                      backgroundImage:
                        data?.data?.events?.[4]?.tag === "onroute"
                          ? `url("/images/saiu-verde.png")`
                          : "",
                    }}
                    className="imgspan3"
                  ></span>
                  <div>
                    <h5
                      style={{
                        color:
                          data?.data?.events?.[4]?.tag === "onroute"
                            ? `#2bc866	`
                            : "",
                      }}
                    >
                      Saiu para a entrega
                    </h5>
                    <span>13/12/2021 08:34:00</span>
                  </div>

                  <div
                    style={{
                      backgroundColor:
                        data?.data?.events?.[5]?.tag === "delivered"
                          ? "#2bc866"
                          : "#c8cdda",
                    }}
                    className="linha"
                  ></div>
                </CardDiv>

                <CardDiv>
                  <span
                    style={{
                      backgroundImage:
                        data?.data?.events?.[5]?.tag === "delivered"
                          ? `url("/images/entregue-verde.png")`
                          : "",
                    }}
                    className="imgspan4"
                  ></span>
                  <div>
                    <h5
                      style={{
                        color:
                          data?.data?.events?.[5]?.tag === "delivered"
                            ? `#2bc866	`
                            : "",
                      }}
                    >
                      Entregue
                    </h5>
                    <span>13/12/2021 08:34:00</span>
                  </div>
                </CardDiv>
              </ContornPosition>
            </div>
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
