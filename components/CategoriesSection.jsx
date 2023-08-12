import Link from "next/link";

export default function CategoriesSection() {
  return (
    <section className="pt-16 container-default">
      <h1 className="section-heading">Categories</h1>
      <div className=" flex gap-4">
        <div className="cat-container w-full relative overflow-hidden">
          <img
            className="cat-image"
            src="https://ainak.pk/wp-content/uploads/2019/10/Sillouette-12157-2.jpg"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute top-[40%] right-[30%]">
            <Link
              className="block my-0 px-6 py-3.5 border-2 font-medium hover:shadow-lg text-xl text-white border-accent hover:bg-accent hover:scale-110 transition duration-200"
              href={"/glasses"}
            >
              Eyeglasses
            </Link>
          </div>
        </div>
        <div className="cat-container w-full relative overflow-hidden">
          <img
            className="cat-image"
            src="https://ainak.pk/wp-content/uploads/2020/02/Silver-Green-1.jpg"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute top-[40%] right-[30%]">
            <Link
              className="block my-0 px-6 py-3.5 border-2 font-medium hover:shadow-lg text-xl text-white border-accent hover:bg-accent hover:scale-110 transition duration-200"
              href={"/glasses"}
            >
              Sunglasses
            </Link>
          </div>
        </div>
        <div className="cat-container w-full relative overflow-hidden">
          <img
            className="cat-image"
            src="https://ainak.pk/wp-content/uploads/2018/05/Prada-24-Blue-Black-4.jpg"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute top-[40%] right-[30%]">
            <Link
              className="block my-0 px-6 py-3.5 border-2 font-medium hover:shadow-lg text-xl text-white border-accent hover:bg-accent hover:scale-110 transition duration-200"
              href={"/glasses"}
            >
              All Glasses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
