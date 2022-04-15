import {useState} from "react";
import {Box, Button, Card} from "react-bulma-components";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Card style={{width: 180}}>
        <Card.Header>
          <Card.Header.Title>Counter</Card.Header.Title>
        </Card.Header>
        <Card.Content>Counter value is {count}</Card.Content>
        <Card.Footer>
          <Button
            renderAs={Card.Footer.Item}
            color="primary"
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
          <Button
            renderAs={Card.Footer.Item}
            color="success"
            onClick={() => setCount(count - 1)}
          >
            -
          </Button>
          <Button
            renderAs={Card.Footer.Item}
            color="info"
            onClick={() => alert("Counter is " + count)}
          >
            ?
          </Button>
        </Card.Footer>
      </Card>
    </Box>
  );
}
