import { HeaderContainer, HeaderContent } from "./style"
import Link from "next/link"
export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="/images/caminhao.png" alt="correios" />
        {/* <nav>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/results">
            <a>results</a>
          </Link>
        </nav> */}
        <img className="img-git" src="/images/git2.png"></img>
        {/* <button>Codigo de fonte</button> */}
      </HeaderContent>
    </HeaderContainer>
  )
}
