/* eslint-disable react/prop-types */

const VideoCards = ({info}) => {

    const {snippet, statistics} = info;
    const {channelTitle, thumbnails, title} = snippet;
    const {viewCount} = statistics;
    let myTitle = title.length >25 ? title.slice(0, 20) + "..." : title
  return (
    <div className="border h-64 w-60 rounded-xl bg-white shadow-md">
      <img src={thumbnails.medium.url} alt="thumbnail" className="w-60 rounded-xl" />
      <ul className="p-2">
        <li className="font-bold">{myTitle}</li>
        <li>{channelTitle}</li>
        <li>👁{viewCount}</li>
      </ul>
    </div>
  )
}

export default VideoCards
