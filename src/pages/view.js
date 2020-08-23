import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  IconButton,
  Typography,
  styled,
  Container,
} from "@material-ui/core";
import { ThumbUp, ThumbDown, Edit } from "@material-ui/icons";
import Header from "../component/header";

const CustomCard = styled(Card)({
  margin: "2vh",
});

class View extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Header />
        <div>
          {this.props.list_context.list_post.map((post, index) => (
            <CustomCard key={post.id}>
              <CardHeader title={post.title} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  onClick={() => {
                    this.props.list_context.handleLike(index, post.id);
                  }}
                >
                  <ThumbUp />
                </IconButton>
                <IconButton
                  onClick={() => {
                    this.props.list_context.handleDislike(index, post.id);
                  }}
                >
                  <ThumbDown />
                </IconButton>
                <Link
                  to={{
                    pathname: "/edit",
                    query: {
                      index: index,
                      i: post.id,
                      parentProp: this.props.list_context,
                    },
                  }}
                >
                  <IconButton>
                    <Edit />
                  </IconButton>
                </Link>
              </CardActions>
            </CustomCard>
          ))}
        </div>
      </Container>
    );
  }
}

export default View;
