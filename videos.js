const videosData = [
    {
        title: "Video Title",
        speakerName: "Speaker name",
        speakerMajor: "Major",
        bio: "Biography",
        mentorPhoto: "Picture",
        description: "Description",
        url: "URL",
    },

    {
        title: "Video Title 1",
        speakerName: "Speaker name 1",
        speakerMajor: "Major 1",
        bio: "Biography 1",
        mentorPhoto: "Picture",
        description: "Description 1",
        url: "URL 1",
    },

    {
        title: "Video Title 2",
        speakerName: "Speaker name 2",
        speakerMajor: "Major 2",
        bio: "Biography 2",
        mentorPhoto: "Picture",
        description: "Description 2",
        url: "URL 2",
    }
];

function videoTemplate(video) {
    return `<div class="col-md-3">
    <div class="centerText">
        <img class = "Video URL" src="${video.url}">
        <h2 class="video-title">${video.title}</h2>
        <a onClick="videoSelected('${video.title}')" class = "btn btn-primary href="#">View more</a>
    </div> 
    <p>${video.description}</p>
    </div>
`
}
document.getElementById("app").innerHTML = `
<h1 class="app-title">Inspire to Educate</h1>
${videosData.map(videoTemplate).join('')}
`;