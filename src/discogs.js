import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from './button.js';

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

folderChristmas = () => {
  this.setState({folder: 2180872},
  this.getRecords);
}

folderClassicRock = () => {
  this.setState({folder: 2180863},
  this.getRecords);
}

folderClassical = () => {
  this.setState({folder: 2180864},
  this.getRecords);
}

folderCountry = () => {
  this.setState({folder: 2180880},
  this.getRecords);
}

folderJazz = () => {
  this.setState({folder: 2167562},
  this.getRecords);
}

folderSoul = () => {
  this.setState({folder: 2180869},
  this.getRecords);
}

folderKitsch = () => {
  this.setState({folder: 2180877},
  this.getRecords);
}

folderMoog = () => {
  this.setState({folder: 2180870},
  this.getRecords);
}

folderPop = () => {
  this.setState({folder: 2180866},
  this.getRecords);
}

folderSoundtrack = () => {
  this.setState({folder: 2180882},
  this.getRecords);
}

folderWeird = () => {
  this.setState({folder: 2180875},
  this.getRecords);
}

folderAll = () => {
  this.setState({folder: 0},
  this.getRecords);
}


  getRecords() {
  // We're using axios instead of Fetch
  axios
    // The API we're requesting data from
    .get("https://api.discogs.com//users/dmpduo/collection/folders/" + this.state.folder + "/releases?per_page=25&token=zZNDlnijlMatqOjTvbJutCDSSgNvfqzunXTuBoLO")
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
    // <span onClick = {this.folderAll}>All</span>
    // <span onClick = {this.folderIndie}><i class="fas fa-glasses"></i></span>
    // <span onClick = {this.folderChristmas}><i class="fas fa-candy-cane"></i></span>
    // <span onClick = {this.folderClassicRock}><i class="fas fa-guitar"></i></span>
    // <span onClick = {this.folderClassical}>Classical</span>
    // <span onClick = {this.folderCountry}><i class="fas fa-hat-cowboy-side"></i></span>
    // <span onClick = {this.folderJazz}>Jazz</span>
    // <span onClick = {this.folderSoul}>Soul/R&B</span>
    // <span onClick = {this.folderKitsch}>Kitsch</span>
    // <span onClick = {this.folderMoog}>Moog</span>
    // <span onClick = {this.folderPop}>Pop</span>
    // <span onClick = {this.folderSoundtrack}>Soundtrack</span>
    // <span onClick = {this.folderWeird}>Weird</span>

<Button>Click Me</Button>

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
                          <h4 class="genre"><b>{genre}</b></h4>
                          <h4 class="genre"><i>{style}</i></h4>
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
