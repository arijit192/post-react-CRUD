import React from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  styled,
  Container,
} from "@material-ui/core";

import Header from "../component/header";

const CustomCard = styled(Card)({
  margin: "2vh",
});

class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      posted: false,
    };
    this.titleHandler = this.titleHandler.bind(this);
    this.bodyHandler = this.bodyHandler.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  titleHandler(e) {
    this.setState({
      title: e.target.value,
    });
  }
  bodyHandler(e) {
    this.setState({
      body: e.target.value,
    });
  }
  async handlePost() {
    if (this.state.title.length === 0 && this.state.body.length === 0) {
    } else {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: this.state.title,
          body: this.state.body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if ((await result.status) === 201) {
        this.setState({ posted: !this.state.posted });
        return await result.json();
      }
    }
  }
  render() {
    return (
      <Container maxWidth="sm">
        <Header />
        <div>
          {this.state.posted ? (
            <div>
              <p>Post successfully submitted</p>
            </div>
          ) : (
            <div>
              <TextField
                id="standard-basic"
                label="Title"
                onChange={this.titleHandler}
              />
              <TextField
                id="standard-basic"
                label="Body"
                onChange={this.bodyHandler}
              />
              <Button
                color="primary"
                onClick={async () => {
                  const data = await this.handlePost();
                  if (this.state.posted) {
                    this.props.list_context.handleCreatePost(data);
                  }
                }}
              >
                Post
              </Button>
            </div>
          )}
        </div>
        <div>
          {this.props.list_context.list_post.map((post) => (
            <CustomCard key={post.id}>
              <CardHeader title={post.title} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.body}
                </Typography>
              </CardContent>
            </CustomCard>
          ))}
        </div>
      </Container>
    );
  }
}

export default Create;
