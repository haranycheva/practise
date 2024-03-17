import { Form } from "components/Form/Form";
import { Gallery } from "components/Gallery/Gallery";
import { Component } from "react";
import { getPhotos } from "servise/api";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

class App extends Component {
  state = {
    query: "",
    images: [],
    status: "idle",
  };
  async componentDidUpdate(_, prevState) {
    const {query} = this.state
    if (query === prevState.query) {
      return;
    }
    this.setState({status: "pending"})
    try {
      const data = await getPhotos(query)
      this.setState({ images: data.photos, status: "fulfiled"});
    } catch (error) {
      this.setState({status: "rejected"})
    }
  }
  handleSubmit = (query) => {
    this.setState({ query });
  };
  visibleEl = (status, images) => {
    switch (status) {
      case "idle":
        return
        case "pending":
          return <p>Loading........</p>
        case "rejected":
          return <p>Ooooooooooops.... Something went wrong.....</p>
        case "fulfiled":
          return images?.length > 0 ? (<Gallery data={images} />) : <p>nothing found</p>
      default:
        break;
    }
  }
  render() {
    const { images, status} = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit} />
        <Container>
          {this.visibleEl(status, images)}
        </Container>
      </>
    );
  }
}

export default App;
