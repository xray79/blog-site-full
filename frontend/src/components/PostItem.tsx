import { Row, Card, Button } from "react-bootstrap";

interface postType {
  title: string;
  body: string;
}

interface propsType {
  post: postType;
}

const PostItem = ({ post }: propsType) => {
  return (
    <>
      <Row className="mt-4">
        <Card className="">
          <Card.Body className="">
            <Card.Title className="">{post.title}</Card.Title>
            <Card.Subtitle className="text-muted">subtitle</Card.Subtitle>
            <Card.Text className="">{post.body}</Card.Text>
            <Button>Read more</Button>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};
export default PostItem;
