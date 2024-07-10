import Image from "next/image";
import ResturantHeader from "./_components/resturantHeader";
import ResturantFooter from "./_components/resturantFooter";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Food Delivery App</h1>
      <ResturantHeader />
    </div>
    <ResturantFooter/>
  </div>
  
  );
}
