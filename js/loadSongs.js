fetch("./json/songs.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("SongCards");
    const template = document.getElementById("song-card-template");

    data.top10_spotify_songs.forEach(song => {
      const clone = template.content.cloneNode(true);

      clone.querySelector(".title").textContent = `#${song.rank} ${song.title}`;
      clone.querySelector(".player").innerHTML = song.iframe;

      container.appendChild(clone);
    });
});