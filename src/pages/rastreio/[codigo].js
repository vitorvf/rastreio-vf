import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Home from ".."
import Erro from "../../components/Erro"
import Loading from "../../components/Loading"

import { api } from "../../services/api"
import Resultado from "../results"

const Rastreio = ({ response }) => {
  const router = useRouter()
  const { codigo = "" } = router.query
  const [result, setResult] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!codigo) return
    ;(async () => {
      // Roda quando montar o component
      try {
        setLoading(true)
        const response = await api.get(`/${codigo}`)
        setResult(response.data)
      } catch {
        setLoading(false)
        console.log("erro do console")
      } finally {
        const response = await api.get(`/${codigo}`)
        setResult(response.data)
        setLoading(false)
        console.log(response.data.success)
      }
    })()
  }, [codigo])
  if (loading) return <Loading />
  
  
  // console.log(result?.success)
  return (
    <div>
      <Resultado data={result} />
    </div>
  )
}

export default Rastreio
