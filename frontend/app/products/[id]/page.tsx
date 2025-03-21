// import { notFound } from "next/navigation";
// import ProductDetails from "@/components/product-details";
// import RelatedProducts from "@/components/related-products";

// // Mock data - would be fetched from an API in a real application
// const products = Array(24)
//   .fill(0)
//   .map((_, index) => ({
//     id: index + 1,
//     name: `Product ${index + 1}`,
//     description:
//       "Smart product with advanced features and technology. This innovative product is designed to enhance your daily life with cutting-edge technology and sleek design. Perfect for tech enthusiasts and those who value quality and functionality.",
//     price: 99.99 + index * 10,
//     image: `/placeholder.svg?height=600&width=600&text=Product+${index + 1}`,
//     images: Array(4)
//       .fill(0)
//       .map((_, i) => `/placeholder.svg?height=600&width=600&text=Image+${i + 1}`),
//     category: ["Bags", "Wallets", "Luggage", "Accessories"][index % 4],
//     rating: 4 + Math.random() * 0.9,
//     reviewCount: Math.floor(Math.random() * 100) + 10,
//     isNew: index % 5 === 0,
//     features: [
//       "Anti-theft technology",
//       "GPS tracking",
//       "RFID blocking",
//       "USB charging port",
//       "Water-resistant material",
//     ],
//     specifications: {
//       dimensions: "30 x 20 x 10 cm",
//       weight: "1.2 kg",
//       material: "Premium polyester",
//       warranty: "Limited lifetime warranty",
//       color: ["Black", "Blue", "Grey"][index % 3],
//     },
//     stock: Math.floor(Math.random() * 50) + 1,
//   }));
// export async function generateMetadata({ params }: { params: { id: string } }) {
//   // Correctly wait for the params with Promise.resolve
//   const resolvedParams = await Promise.resolve(params);
//   const productId = parseInt(resolvedParams.id, 10);

//   const product = products.find((p) => p.id === productId);

//   if (!product) {
//     return {
//       title: "Product Not Found | Arista Vault",
//       description: "The requested product could not be found",
//     };
//   }

//   return {
//     title: `${product.name} | Arista Vault`,
//     description: product.description.substring(0, 160),
//   };
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   // Correctly wait for the params with Promise.resolve
//   const resolvedParams = await Promise.resolve(params);
//   const productId = parseInt(resolvedParams.id, 10);

//   const product = products.find((p) => p.id === productId);

//   if (!product) {
//     notFound();
//   }

//   // Get related products (same category)
//   const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4);

//   return (
//     <main className="flex min-h-screen flex-col">
//       <ProductDetails product={product} />
//       <RelatedProducts products={relatedProducts} />
//     </main>
//   );
// }


import { notFound } from "next/navigation";
import ProductDetails from "@/components/product-details";
import RelatedProducts from "@/components/related-products";

// Mock data - would be fetched from an API in a real application
const products = Array(24)
  .fill(0)
  .map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    description:
      "Smart product with advanced features and technology. This innovative product is designed to enhance your daily life with cutting-edge technology and sleek design. Perfect for tech enthusiasts and those who value quality and functionality.",
    price: 99.99 + index * 10,
    image: `/placeholder.svg?height=600&width=600&text=Product+${index + 1}`,
    images: Array(4)
      .fill(0)
      .map((_, i) => `/placeholder.svg?height=600&width=600&text=Image+${i + 1}`),
    category: ["Bags", "Wallets", "Luggage", "Accessories"][index % 4],
    rating: 4 + Math.random() * 0.9,
    reviewCount: Math.floor(Math.random() * 100) + 10,
    isNew: index % 5 === 0,
    features: [
      "Anti-theft technology",
      "GPS tracking",
      "RFID blocking",
      "USB charging port",
      "Water-resistant material",
    ],
    specifications: {
      dimensions: "30 x 20 x 10 cm",
      weight: "1.2 kg",
      material: "Premium polyester",
      warranty: "Limited lifetime warranty",
      color: ["Black", "Blue", "Grey"][index % 3],
    },
    stock: Math.floor(Math.random() * 50) + 1,
  }));

interface ProductPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: ProductPageProps) {
  const productId = parseInt(params.id, 10);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return {
      title: "Product Not Found | Arista Vault",
      description: "The requested product could not be found",
    };
  }

  return {
    title: `${product.name} | Arista Vault`,
    description: product.description.substring(0, 160),
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id, 10);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  // Get related products (same category)
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  return (
    <main className="flex min-h-screen flex-col">
      <ProductDetails product={product} />
      <RelatedProducts products={relatedProducts} />
    </main>
  );
}
