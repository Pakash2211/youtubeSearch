let data = JSON.parse(localStorage.getItem("videodetail"));
let mdiv = document.querySelector(".video_display1")

let dispalydata = () => {
    mdiv.innerText = '';
    let {
        id: {
            videoId
        },
        snippet: {
            channelTitle,
            thumbnails: {
                medium: { url }
            },
            title
        }
    } = data

    let div = document.createElement("div");

    let tmp = document.createElement("iframe");
    tmp.src = `https://www.youtube.com/embed/${videoId}`
    tmp.width = "100%"
    tmp.height = "510px"

    let mtitle = document.createElement("p");
    mtitle.innerText = title;


    let channel_title = document.createElement("p");
    channel_title.innerText = channelTitle;

    div.append(tmp, mtitle, channel_title);
    mdiv.append(div);



}

window.addEventListener('load', dispalydata);