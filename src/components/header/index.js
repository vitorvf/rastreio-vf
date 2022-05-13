import { HeaderContainer, HeaderContent } from "./style"
import Link from "next/link"
export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="/images/caminhao.png" alt="ig.news" />
        {/* <nav>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/results">
            <a>results</a>
          </Link>
        </nav> */}
        <button>Codigo de fonte</button>
      </HeaderContent>
    </HeaderContainer>
  )
}
