import Image from "next/image";
import imgFeatured1 from "../public/assets/featured_1.jpg";
import Link from "next/link";

export default function FeaturedSection() {
  return (
    <section>
      <Link href={"/glasses"}>
        <div className="h-[20vh] md:h-[70vh] relative">
          <Image src={imgFeatured1} alt="featured-1" fill={true} />
        </div>
      </Link>
    </section>
  );
}
