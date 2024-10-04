export async function getPosts() {
  let data = await fetch("http://localhost:8000/posts");
  let posts = await data.json();
  return posts;
}

export async function getPostById(id: string) {
  let data = await fetch("http://localhost:8000/posts");
  let posts = await data.json();
  return posts?.find((post: any) => id === post.id);
}
