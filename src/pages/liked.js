import React from "react";
import {
  Container,
  styled,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import Header from "../component/header";

const CustomCard = styled(Card)({
  margin: "2vh",
});

class Liked extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <div>
          {this.props.list_context.liked_post.map((post) => (
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

export default Liked;
