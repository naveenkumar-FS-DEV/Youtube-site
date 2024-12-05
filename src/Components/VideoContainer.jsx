import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../Utils/Api";
import { YOUTUBE_API } from "../Utils/Api";
import VideoCards from "./VideoCards";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const VideoContainer = () => {

  let[videos, setvideos] = useState([])

  // api call
  useEffect(()=>{
    setTimeout(()=>{
      fetchData()
    },2000)
  },[])

  let fetchData = async()=>{
    let data = await fetch(YOUTUBE_API+YOUTUBE_API_KEY);
    let json = await data.json();
    // console.log(json.items);
    setvideos(json.items)
  }

  if(videos.length === 0){
    return <ShimmerUI />
  }

  return (
    <div className="m-2 flex flex-wrap justify-center items-center gap-x-8 gap-y-10">
      {videos.map(video =>(
     <Link to={"/watch?v="+ video.id} key={video.id}><VideoCards info={video} /></Link> 
      ))}
    </div>
  );
};

export default VideoContainer;
