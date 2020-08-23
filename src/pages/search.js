import React from "react";
import {
  Container,
  TextField,
  Card,
  styled,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import Header from "../component/header";

const CustomCard = styled(Card)({
  margin: "2vh",
});
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      result: [],
    };
  }
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  handleSearch = () => {
    var temp = [...this.props.list_context.list_post];
    var result = [];
    result = temp.map((data, index) => {
      if (data.title.includes(this.state.searchText)) {
        return index;
      } else {
        return null;
      }
    });
    result = result.filter((el) => el);
    this.setState({ result: result });
  };
  render() {
    return (
      <Container maxWidth="sm">
        <Header />
        <TextField
          id="standard-basic"
          label="Search Post"
          onChange={(e) => {
            this.handleChange(e);
            this.handleSearch();
          }}
          style={{ width: "100%" }}
        />
        {this.state.result.map((result) => (
          <CustomCard key={this.props.list_context.list_post[result].id}>
            <CardHeader
              title={this.props.list_context.list_post[result].title}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.list_context.list_post[result].body}
              </Typography>
            </CardContent>
          </CustomCard>
        ))}
      </Container>
    );
  }
}

export default Search;
