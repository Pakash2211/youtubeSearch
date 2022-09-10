let API_KEY = "AIzaSyDWU414i09UY9MUI3_MFPQcyeQH-cxmwME"
let mdiv = document.querySelector(".video_show");

let popular_data = async() => {

    try {
        let url1 = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=32&regionCode=in&key=${API_KEY}`
        let pdata = await fetch(url1);
        let pvideo = await pdata.json();

        displayData(pvideo.items)

    } catch (error) {
        console.log(err);
    }
}







let video_display = (data) => {

    localStorage.setItem("videodetail", JSON.stringify(data));
    window.location.href = 'videoshower.html'
}




let displayData = (res) => {
    mdiv.innerText = "";
    res.forEach((video) => {


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
        } = video

        let div = document.createElement("div");
        div.addEventListener("click", () => {
            video_display(video)
        });

        let tmp = document.createElement("img");
        tmp.src = url;

        let mtitle = document.createElement("p");
        mtitle.innerText = title;

        let channel_title = document.createElement("p");
        channel_title.innerText = channelTitle;

        div.append(tmp, mtitle, channel_title);


        mdiv.append(div);


    });






}





let youtubeData = async() => {
    event.preventDefault();
    let movie_name = document.querySelector(".search_input").value;
    try {
        let url = `https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${movie_name}&maxResults=20&part=snippet`
        let data = await fetch(url)
        let res = await data.json();

        displayData(res.items);
    } catch (error) {
        console.log(err);
    }
}

window.addEventListener('load', popular_data);


let btn = document.querySelector(".search_btn").addEventListener("click", youtubeData);