import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;




            class SearchableMovieReviewsContainer extends Component {
                state = {
                    searchTerm: [],
                    reviews: []
                }
            
                handleChange(event) {
                    this.setState({
                        searchTerm: event.target.value
                      })
                  }
            
                submitHandle = (event, search) => {
                    event.preventDefault();
                    fetch(URL+`&query=${search}`)
                    .then(response => response.json())
                    .then(data => { 
                      this.setState({ 
                        reviews: data.results
                      })
                    })
                  }
            
                  render() {
                    return (
                        <div className="searchable-movie-reviews">
                            <form onSubmit={event => this.submitHandle(event, this.state.searchTerm)}>
                                <label name="search">Review Search</label>
                                <input type="text" name="search" value={this.state.searchTerm} onChange={event => this.handleChange(event)}/>
                                <button type="Submit" value="Submit">Find Reviews!</button>
                            </form>
                            <MovieReviews reviews={this.state.reviews} />
                        </div>
                    );
                  }
            }
            
            export default SearchableMovieReviewsContainer 