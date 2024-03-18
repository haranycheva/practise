import { Form } from "components/Form/Form";
import { Gallery } from "components/Gallery/Gallery";
import { Component } from "react";
import { getPhotos } from "servise/api";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;
const LoadMoreBtn = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;
`;

class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    per_page: 10,
    visibleMore: false,
    isLoading: false,
    error: null,
  };
  async componentDidUpdate(_, prevState) {
    const { query, page, per_page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true});
      try {
        const data = await getPhotos(query, page, per_page);
        console.log(page < Math.ceil(data.total_results / page))
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.photos],
          visibleMore: page < Math.ceil(data.total_results / per_page),
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  onClickMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };
  onHandleSubmit = (query) => {
    this.setState({ query, page: 1, images: [] });
  };
  // visibleEl = (status, images) => {
  //   switch (status) {
  //     case "idle":
  //       return;
  //     case "pending":
  //       return <p>Loading........</p>;
  //     case "rejected":
  //       return <p>Ooooooooooops.... Something went wrong.....</p>;
  //     case "fulfiled":
  //       return images?.length > 0 ? (
  //         <>
  //           <Gallery data={images} />
  //           <LoadMoreBtn onClick={this.onClickMore}>Load More</LoadMoreBtn>
  //         </>
  //       ) : (
  //         <p>nothing found</p>
  //       );
  //     default:
  //       break;
  //   }
  // };
  render() {
    const { images, isLoading, error, visibleMore } = this.state;
    return (
      <>
        <Form onSubmit={this.onHandleSubmit} />
        <Container>
          {error && <p>Ooooooooooops.... Something went wrong.....</p>}
          {isLoading && <p>Loading........</p>}
          {images?.length > 0 && (
            <>
              <Gallery data={images} />
              {visibleMore && <LoadMoreBtn onClick={this.onClickMore}>
                {isLoading ? "Loading" : "Load More"}
              </LoadMoreBtn>}
            </>
          )}
        </Container>
      </>
    );
  }
}

export default App;
