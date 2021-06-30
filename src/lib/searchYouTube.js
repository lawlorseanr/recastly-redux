import exampleVideoData from '../data/exampleVideoData.js';

var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {

      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      debugger;
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
      if (callback) {
        callback(exampleVideoData);
      }
    });
};

export default searchYouTube;
