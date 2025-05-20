import { ProductCard } from "../shared/ProductCard";

export const About = () => {
  const products = [
    {
      productId: 1,
      image: "https://embarkx.com/sample/placeholder.png",
      productName: "iPhone 13 Pro Max",
      description:
        "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
      specialPrice: 720,
      price: 780,
      quantity:1,
      discount: 10,
    },
    {
      productId: 2,
      image: "https://embarkx.com/sample/placeholder.png",
      productName: "Samsung Galaxy S21",
      description:
        "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
      specialPrice: 699,
      price: 799,
      quantity:1,
      discount: 10,
    },
    {
      productId: 3,
      image: "https://embarkx.com/sample/placeholder.png",
      productName: "Google Pixel 6",
      description:
        "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
      price: 599,
      specialPrice: 400,
      quantity:1,
      discount: 10,
    },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4">
      <h1 className="mb-10 mt-10 text-center text-4xl font-bold text-slate-800">
        About Us
      </h1>
      <div className="mb-10 flex flex-col items-center justify-between lg:flex-row">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <p className="mb-4 text-lg">
            Generate placeholder images in multiple formats like
            WebP/PNG/JPEG/GIF with custom width & height. Design image
            background color & text color, Preview image & copy image link with
            one click.
          </p>
        </div>
        <div className="mb-6 w-full md:mb-0 md:w-1/2">
          <img
            src="https://placehold.co/600x400"
            alt="About Us"
            className="h-auto w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl font-bold text-slate-800 mb-10">
          Our Products
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products &&
            products.map((product, index) => {
              return <ProductCard key={index} product={product} isAbout = {true}/>;
            })}
        </div>
      </div>
    </div>
  );
};
