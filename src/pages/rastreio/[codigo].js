import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Home from ".."

import { api } from "../../services/api"
import Resultado from "../results"

const Rastreio = ({ response }) => {
  const router = useRouter()
  const { codigo = "" } = router.query
  const [result, setResult] = useState()

  useEffect(() => {
    if (!codigo) return
    ;(async () => {
      // Roda quando montar o component
      try {
        const response = await api.get(`/${codigo}`)
        setResult(response.data)
      } catch {
        console.log("erro do console")
      }
    })()
  }, [codigo])

  // if (!codigo) return <p>Sem código de rastreio</p>
  // if (result?.success === true) {
  // }
  return (
    <div>
      <Resultado data={result} />
    </div>
  )
}

export default Rastreio
