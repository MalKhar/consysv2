"use client";
import { getPostById, getPosts } from "@/app/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function PostDetails({ params }: { params: { id: string } }) {
  const { data } = useQuery({
    queryKey: ["posts-data"],
    queryFn: () => getPostById(params.id),
  });

  if (!data) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex justify-center mt-10">
      <h1 className="text-white text-4xl">{data?.title}</h1>
      <p className="text-white">{data?.description}</p>
      <img src={data?.image} alt={data?.title} className="mt-2" />
    </div>
  );
}
