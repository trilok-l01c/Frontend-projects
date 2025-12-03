fetch("https://api.spotify.com/v1/search?q=shayad&type=track&limit=1", {
    headers: { Authorization: "Bearer YOUR_ACCESS_TOKEN" },
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(console.error);
