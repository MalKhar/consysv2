"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/app/api";
import Link from "next/link";

function Posts() {
  const { data } = useQuery({
    queryKey: ["post-data"],
    queryFn: async () => getPosts(),
  });

  return (
    <div className="w-fill m-8 mt-10 grid grid-cols-4 grid-flow-row gap-4">
      {data?.map((post: any) => {
        return (
          <Link href={`/posts/${post.id}`}>
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={post.image} alt="" />
              </CardContent>
              <CardFooter>
                <p className=" truncate">{post.content}</p>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default Posts;
