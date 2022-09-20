import { Row, Card, Button } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useAppDispatch } from "../app/hooks";
import { deletePost } from "../features/posts/postsSlice";
import { useEffect } from "react";
import EditModal from "./EditModal";

interface postType {
  _id: string;
  user: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

interface propsType {
  post: postType;
  user?: any;
}

const PostItem = ({ post, user }: propsType) => {
  const date = new Date(post.updatedAt);

  const dispatch = useAppDispatch();

  const editHandler = () => {};

  const deleteHandler = () => {
    dispatch(deletePost(post._id));
  };

  return (
    <>
      <Row className="mt-4">
        <Card className="">
          <Card.Body className="">
            <Card.Title className="">{post.title}</Card.Title>
            <Card.Subtitle className="text-muted">
              Created at: {date.toLocaleString()}
            </Card.Subtitle>
            <Card.Text className="">{post.body}</Card.Text>

            <div className="d-flex justify-space-between">
              <Button className="me-auto">Read more</Button>
              {post.user === user._id ? (
                <>
                  <EditModal id={post._id} />
                  <Button variant="outline-danger" onClick={deleteHandler}>
                    <AiFillDelete />
                  </Button>
                </>
              ) : (
                ""
              )}
            </div>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};
export default PostItem;
