import React from "react";

export const ListPostContext = React.createContext();
class ListPostContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      list_post: [],
      liked_post: [],
      disliked_post: [],
    };
    this.handleCreatePost = this.handleCreatePost.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  async componentDidMount() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("triggered");
    this.setState({
      list_post: await result.json(),
    });
  }

  handleCreatePost = async (data) => {
    var temp = [...this.state.list_post];
    temp.push(await data);
    this.setState({
      list_post: temp,
    });
  };
  handleLike = (index, id) => {
    var temp = [...this.state.liked_post];
    temp.push(this.state.list_post[index]);
    this.setState({ liked_post: temp });
  };
  handleDislike = (index, id) => {
    var temp = [...this.state.disliked_post];
    temp.push(this.state.list_post[index]);
    this.setState({ disliked_post: temp });
  };
  handleUpdate = async (index, data) => {
    const temp = [...this.state.list_post];
    temp[index] = await data;
    console.log(data);
    this.setState({ list_post: temp });
  };

  render() {
    return (
      <ListPostContext.Provider
        value={{
          ...this.state,
          handleCreatePost: this.handleCreatePost,
          handleLike: this.handleLike,
          handleDislike: this.handleDislike,
          handleUpdate: this.handleUpdate,
        }}
      >
        {this.props.children}
      </ListPostContext.Provider>
    );
  }
}

export default ListPostContextProvider;
