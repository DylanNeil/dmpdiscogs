import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Discogs extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    records: [],
    isLoading: true,
    errors: null,
    folder: 0
  };
}


folderIndie = () => {
  this.setState({folder: 2180865},
  this.getRecords);
}

  getRecords() {
  // We're using axios instead of Fetch
  axios
    // The API we're requesting data from
    .get("https://api.discogs.com//users/dmpduo/collection/folders/" + this.state.folder + "/releases?per_page=300&token=zZNDlnijlMatqOjTvbJutCDSSgNvfqzunXTuBoLO")
    // Once we get a response, we'll map the API endpoints to our props
    .then(response =>
      response.data.releases.map(record => ({
        record_id: `${record.instance_id}`,
        title: `${record.basic_information.title}`,
        genre: `${record.basic_information.genres}`,
        style: `${record.basic_information.styles}`,
        year: `${record.basic_information.year}`,
        url: `${record.basic_information.resource_url}`,
        artist: `${record.basic_information.artists[0].name}`,
        cover: `${record.basic_information.cover_image}`,
      }))
    )
    // Let's make sure to change the loading state to display the data
    .then(records => {
      this.setState({
        records,
        isLoading: false
      });
    })
    // We can still use the `.catch()` method since axios is promise-based
    .catch(error => this.setState({ error, isLoading: false }));
}


componentDidMount() {
  this.getRecords();
}

render() {
  const { isLoading, records } = this.state;
  return (
    <React.Fragment>
    <button onClick = {this.folderIndie}>Indie</button>
      <Container>
        <Row>
          {!isLoading ? (
            records.map(record => {
              const { record_id, title, genre, style, year, url, artist, cover} = record;
              return (

                <Col sm={6} lg={3} md={4} xs={12}>
                  <div key={record_id}>
                    <a href ={`https://www.discogs.com/search/?q=${artist} ${title}&type=all`} target='_blank'>
                      <div class="album">
                        <img loading="lazy" src={cover}/>
                        <div class="album-inner">
                          <h2 class="artist"><b>{artist}</b></h2>
                          <h3 class="large album-name">{title}, <i>{year}</i></h3>
                          <h4 class="genre"><b>{genre}</b>  - <i>{style}</i></h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          ) : (
            <p class="loading">Loading...</p>
          )}

        </Row>
      </Container>

    </React.Fragment>
  );
}

}

export default Discogs;
