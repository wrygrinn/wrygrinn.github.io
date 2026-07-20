 $(document).ready(function() {
      const lastFmConfig = {
        apiEndpoint: 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=',
        username: 'Sinapisarvensis',
        apiKey: '9cc083535a6098358942084d2f78b455',
        queryParams: '&format=json&limit=1'
      };

      function fetchRecentTrack() {
        const requestUrl = `${lastFmConfig.apiEndpoint}${lastFmConfig.username}&api_key=${lastFmConfig.apiKey}${lastFmConfig.queryParams}&_=${Date.now()}`;

        $.ajax({
          type: 'GET',
          url: requestUrl,
          dataType: 'json',
          success(response) {
            const artElem = document.getElementById('albumArt');
            const trackLinkElem = document.getElementById('trackLink');
            const trackWrapper = document.getElementById('trackWrapper');
            const statusText = document.getElementById('statusText');
            const liveIndicator = document.getElementById('liveIndicator');

            artElem.style.display = 'none';
            trackWrapper.style.display = 'none';
            liveIndicator.style.display = 'none';

            const latestTrack = response.recenttracks.track[0];
            if (latestTrack) {
              const artistName = latestTrack.artist['#text'];
              const trackName = latestTrack.name;
              const combinedText = `♪ ${artistName} - ${trackName}`;
              const trackUrl = latestTrack.url || '#';

              $('#trackLink')
                .text(combinedText)
                .attr('href', trackUrl)
                .attr('title', `${trackName} by ${artistName}`)
                .attr('target', '_blank')
                .attr('rel', 'noopener noreferrer');

              artElem.src = latestTrack.image[3]['#text'] || '';
              artElem.style.display = 'block';
              trackWrapper.style.display = 'block';

              if (latestTrack['@attr']?.nowplaying === 'true') {
                statusText.textContent = 'Listening to...';
                liveIndicator.style.display = 'inline';
              } else {
                statusText.textContent = 'Recently played...';
              }
            }
          },
          error() {
            $('#trackLink').text('');
            $('#albumArt').attr('src', '');
          }
        });
      }

      fetchRecentTrack();
      setInterval(fetchRecentTrack, 10000);
    });
