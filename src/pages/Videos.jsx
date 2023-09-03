import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import axios from "axios";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return axios
      .get(`/videos/${keyword ? "search" : "popular"}.json`)
      .then((res) => res.data.items);
  });

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
