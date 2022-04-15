import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Button, Container, Footer, Navbar} from "react-bulma-components";
import logo from "../public/images/vercel.svg";

export default function Layout({children}: {children: React.ReactNode}) {
  const [isMenuOpen, setMenuOpen] = useState(true);
  useEffect(() => setMenuOpen(false), []);

  return (
    <>
      <header>
        <Navbar aria-label="main navigation">
          <Navbar.Brand>
            <Navbar.Item>
              <Image src={logo} alt="Next.js" />
            </Navbar.Item>
            <Navbar.Burger
              className={isMenuOpen ? "is-active" : undefined}
              onClick={() => setMenuOpen((x) => !x)}
              aria-label="menu"
              aria-expanded="false"
            />
          </Navbar.Brand>
          <Navbar.Menu className={isMenuOpen ? "is-active" : undefined}>
            <Navbar.Container>
              <Link href="/" passHref>
                <Navbar.Item>Home</Navbar.Item>
              </Link>
              <Link href="/secondPage" passHref>
                <Navbar.Item>Second page</Navbar.Item>
              </Link>
            </Navbar.Container>
            <Navbar.Container align="right">
              <Navbar.Item>
                <Button color="primary" onClick={() => alert("Tada!")}>
                  Action
                </Button>
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </header>
      {children}
      <Footer>
        <Container>{"I'm the footer"}</Container>
      </Footer>
    </>
  );
}
