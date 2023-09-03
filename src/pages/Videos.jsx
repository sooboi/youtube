import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { youtube } = useYoutubeApi();
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));

  return (
    <>
      Videos {keyword ? `🔍${keyword}` : "🔥"}
      {isLoading && <p>Loading . . .</p>}
      {error && <p>Something is wrong !</p>}
      {videos && (
        <ul>
          <li>
            {videos.map((it) => (
              <VideoCard key={it.id} video={it} />
            ))}
          </li>
        </ul>
      )}
    </>
  );
}
