import Head from "next/head";
import {Container, Heading, Section} from "react-bulma-components";

const SecondPage = () => (
  <>
    <Head>
      <title>Second Page</title>
    </Head>
    <Section>
      <Container>
        <Heading>Second page</Heading>
      </Container>
    </Section>
  </>
);
export default SecondPage;
