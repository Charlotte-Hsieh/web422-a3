import { Card } from 'react-bootstrap';

export default function PageHeader(props) {
  return (
    <>
      <Card className="bg-light">
        <Card.Body>
          {props.text}
          {props.subtext && <p>{props.subtext}</p>}
        </Card.Body>
      </Card>
      <br />
    </>
  );
}