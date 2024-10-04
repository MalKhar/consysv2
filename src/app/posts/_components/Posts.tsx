"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/app/api";
import Link from "next/link";

function Posts() {
  const { data } = useQuery({
    queryKey: ["post-data"],
    queryFn: async () => getPosts(),
  });

  console.log(data);
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-8 md:grid-cols-2 lg:grid-cols-3 md:px-6 lg:px-8">
      {data?.map((post: any) => {
        return (
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Link href={`http://localhost:3000/posts/${post.id}`}>
              <span className="sr-only">View Post</span>
              <img
                src={post.image}
                alt="Blog post image"
                width={600}
                height={400}
                className="h-60 w-full object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </Link>
            <div className="p-4 bg-background">
              <Link target="_blank" href={post.link}>
                <h3 className="text-xl font-bold">{post.title}</h3>
              </Link>
              <p className="mt-2 text-muted-foreground">{post.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
