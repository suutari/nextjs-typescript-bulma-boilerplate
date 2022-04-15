import Head from "next/head";
import Link from "next/link";
import {Columns, Container, Heading, Section} from "react-bulma-components";
import Counter from "../components/counter";

const Index = () => (
  <>
    <Head>
      <title>Front Page</title>
    </Head>
    <Section>
      <Container>
        <Heading>
          Hello World from <Link href="https://nextjs.org/">Next.js</Link> and{" "}
          <Link href="https://bulma.io/">Bulma</Link>!
        </Heading>
      </Container>
    </Section>
    <Section>
      <Container>
        <Columns>
          <Columns.Column>
            <Counter />
          </Columns.Column>
          <Columns.Column>
            <Counter />
          </Columns.Column>
          <Columns.Column>
            <Counter />
          </Columns.Column>
          <Columns.Column>
            <Counter />
          </Columns.Column>
          <Columns.Column>
            <Counter />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  </>
);

export default Index;
