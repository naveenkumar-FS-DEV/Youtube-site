import { useSearchParams, useNavigate } from "react-router-dom";

const WatchPage = () => {
  let [searchparams] = useSearchParams();
  console.log(searchparams.get("v"));

  let navigate = useNavigate();

  let goToHome = ()=>{
    navigate("/")
  }
  return (
    <div>
      <button onClick={goToHome} className="m-3 text-2xl font-extrabold">HOME</button>
      <iframe
        width="560" height="315" 
        src={"https://www.youtube.com/embed/" + searchparams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="m-auto rounded-xl"
      ></iframe>
      <div className="flex w-[560px] justify-between items-center gap-10 m-auto mt-4 text-sm">
        <button className="bg-red-600 text-white px-3 py-2 me-14 rounded-xxl">Subscribe</button>
        <div className="flex gap-14 ms-10">
        <p className="bg-gray-100 p-2 rounded-2xl">Like</p>
        <p className="bg-gray-100 p-2 rounded-2xl">Unlike</p>
        <h5 className="bg-gray-100 p-2 rounded-2xl">Share</h5>
        <p className="bg-gray-100 p-2 rounded-2xl">...</p>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
