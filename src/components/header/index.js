import { HeaderContainer, HeaderContent } from "./style"
import Link from "next/link"
export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="/images/caminhao.png" alt="correios" />

        <img className="img-git" src="/images/git2.png"></img>
      </HeaderContent>
    </HeaderContainer>
  )
}
