import React from "react";
import { Container, TextField, Button } from "@material-ui/core";
import Header from "../component/header";

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      submitted: false,
    };
  }
  handleTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleBody = (e) => {
    this.setState({
      body: e.target.value,
    });
  };
  handleUpdate = async () => {
    if (this.state.title.length === 0 && this.state.body.length === 0) {
    } else {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${
          this.props.location.query.index + 1
        }`,
        {
          method: "PATCH",
          body: JSON.stringify({
            title: this.state.title,
            body: this.state.body,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (result.status === 200) {
        this.setState({ submitted: true });
        return result.json();
      }
    }
  };
  render() {
    return (
      <Container maxWidth="sm">
        <Header />
        {this.state.submitted ? (
          <div>
            <h2>Post successfully edited</h2>
          </div>
        ) : (
          <div>
            <h2 style={{ textAlign: "center" }}>Update the post</h2>
            <TextField
              onChange={this.handleTitle}
              id="standard-basic"
              label="Title"
            />
            <TextField
              onChange={this.handleBody}
              id="standard-basic"
              label="Body"
            />
            <Button
              color="primary"
              onClick={async () => {
                const data = await this.handleUpdate();
                this.props.location.query.parentProp.handleUpdate(
                  this.props.location.query.index,
                  await data
                );
              }}
            >
              Update
            </Button>
          </div>
        )}
      </Container>
    );
  }
}

export default Edit;
