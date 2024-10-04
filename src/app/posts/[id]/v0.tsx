/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ke3ILJlgarq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-8 md:grid-cols-2 lg:grid-cols-3 md:px-6 lg:px-8">
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View post</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Blog post image"
          width={600}
          height={400}
          className="h-60 w-full object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Exploring the Wonders of Nature</h3>
          <p className="mt-2 text-muted-foreground">
            Discover the beauty and serenity of the great outdoors in this
            captivating blog post.
          </p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View post</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Blog post image"
          width={600}
          height={400}
          className="h-60 w-full object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">The Art of Mindful Living</h3>
          <p className="mt-2 text-muted-foreground">
            Learn how to cultivate a more peaceful and fulfilling lifestyle
            through the practice of mindfulness.
          </p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View post</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Blog post image"
          width={600}
          height={400}
          className="h-60 w-full object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">The Power of Storytelling</h3>
          <p className="mt-2 text-muted-foreground">
            Discover how the art of storytelling can transform your life and
            inspire others.
          </p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View post</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Blog post image"
          width={600}
          height={400}
          className="h-60 w-full object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">The Joy of Cooking</h3>
          <p className="mt-2 text-muted-foreground">
            Explore the culinary world and discover the delights of homemade
            meals.
          </p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View post</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Blog post image"
          width={600}
          height={400}
          className="h-60 w-full object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">The Art of Travel Photography</h3>
          <p className="mt-2 text-muted-foreground">
            Capture the essence of your travels with these expert photography
            tips.
          </p>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View post</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Blog post image"
          width={600}
          height={400}
          className="h-60 w-full object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">The Power of Positive Thinking</h3>
          <p className="mt-2 text-muted-foreground">
            Discover how to cultivate a more positive mindset and transform your
            life.
          </p>
        </div>
      </div>
    </div>
  );
}
