import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>Loading . . .</p>}
      {error && <p>Something is wrong !</p>}
      {videos && (
        <ul>
          {videos.map((it) => (
            <VideoCard key={it.id} video={it} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
