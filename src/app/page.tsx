import Image from "next/image";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function Home() {
  return (
   <main>
    <section>
      {/* section1 */}
      <div className="flex flex-col lg:flex-row bg-[#FBEBB5]">
  {/* Text Section */}
  <div className="text-center lg:text-left ml-8 mt-8 lg:ml-20 xl:ml-60 lg:mt-20 xl:mt-80 px-4">
    <h1 className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl whitespace-nowrap">
      Rocket single <br /> seater
    </h1>
    <p className="cursor-pointer font-medium text-lg sm:text-xl md:text-2xl mt-8 lg:text-2xl">
      Shop Now
    </p>
    <div className="h-1 bg-black w-24 sm:w-28 md:w-28 lg:w-28 xl:w-28 mt-4 mx-auto lg:mx-0"></div>
  </div>

  {/* Main Image Section */}
  <div className="mt-8 lg:mt-0 lg:ml-16">
    <Image
      src={"/main.png"}
      alt={""}
      height={1000}
      width={853}
      className="mx-auto lg:ml-20 xl:ml-40 w-80 sm:w-96 md:w-[500px] lg:w-[700px] xl:w-[850px]"
    />
  </div>
</div>

      {/* section2 */}
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-0 space-y-10 lg:space-x-40 xl:space-x-80 xl:justify-center lg:px-10 lg:space-y-0 mt-10">
  {/* Part 1: Image 1 */}
  <div className="text-center">
    <Image
      src={"/table.png"}
      alt={""}
      height={600}
      width={600}
      className="mx-auto w-full max-w-[25rem] h-auto sm:w-full sm:max-w-[20rem] md:w-full xl:mt-9 md:max-w-[25rem] lg:w-full  lg:h-[313px] lg:max-w-[30rem]"
    />
    <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl mt-4 lg:mt-7">Side Table</h1>
    <p className="font-medium text-lg sm:text-xl md:text-2xl mt-2">View More</p>
    <div className="h-[2px] bg-black rounded-full w-28 mx-auto mt-1"></div>
  </div>

  {/* Part 2: Image 2 */}
  <div className="text-center">
    <Image
      src={"/sofa.png"}
      alt={""}
      height={450}
      width={400}
      className="mx-auto w-full max-w-[25rem] h-auto sm:w-full sm:max-w-[20rem] md:w-full md:max-w-[25rem] lg:w-full lg:max-w-[30rem]"
    />
    <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl mt-3">Sofa</h1>
    <p className="font-medium text-lg sm:text-xl md:text-2xl mt-2">View More</p>
    <div className="h-[2px] bg-black rounded-full w-28 mx-auto mt-1"></div>
  </div>
</div>


      {/* section3 */}
      <div className="mt-20">
  <h1 className="font-medium text-3xl text-center">Top Picks For You</h1>
  <p className="text-[#9f9f9f] font-medium text-center mt-5">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights</p>

  {/* Product Section */}
  <div className="flex flex-wrap justify-center mt-16 space-x-0 lg:space-x-10 xl:space-x-0 px-4 sm:px-6 md:px-8 lg:px-12">
    {/* Product 1 */}
    <div className="space-y-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/4">
      <Image src={"/section2sofa.png"} alt={""} height={250} width={250} className="mt-5 lg:mt-0 xl:mt-5 mx-auto" />
      <p className="text-center">Trenton modular sofa_3</p>
      <h5 className="font-medium text-2xl text-center">Rs. 25,000.00</h5>
    </div>

    {/* Product 2 */}
    <div className="space-y-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/4">
      <Image src={"/sectiontable.png"} alt={""} height={300} width={300} className="mt-[62px] lg:mt-12 xl:mt-16 mx-auto" />
      <p className="text-center">Granite dining table with <br />dining chair</p>
      <h5 className="font-medium text-2xl text-center">Rs. 25,000.00</h5>
    </div>

    {/* Product 3 */}
    <div className="space-y-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/4">
      <Image src={"/section2table2.png"} alt={""} height={300} width={300} className="mx-auto lg:mt-2 xl:mt-0" />
      <p className="text-center">Outdoor bar table and <br />stool</p>
      <h5 className="font-medium text-2xl text-center">Rs. 25,000.00</h5>
    </div>

    {/* Product 4 */}
    <div className="space-y-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/4">
      <Image src={"/section2table3.png"} alt={""} height={300} width={300} className="mt-[32px] mx-auto" />
      <p className="text-center">Plain console with teak <br />mirror</p>
      <h5 className="font-medium text-2xl text-center">Rs. 25,000.00</h5>
    </div>
  </div>

  {/* View More Section */}
  <p className="font-medium text-xl mt-28 text-center">View More</p>
  <div className="h-[2px] bg-black rounded-full w-28 mx-auto mt-3"></div>
</div>

      {/* section3 */}
      <div className="flex flex-col lg:flex-row mt-20 lg:mt-32 justify-center items-center lg:space-x-40 xl:space-x-72">
  {/* Part 1: Image */}
  <Image
    src={"/sec3.png"}
    alt={""}
    height={800}
    width={800}
    className="w-64 h-52 sm:w-80 sm:h-80 md:w-96 md:h-80 lg:w-[30rem] lg:h-[20rem] xl:h-[500px] xl:w-[700px]"
  />

  {/* Part 2: Text and Button */}
  <div className="space-y-6 sm:space-y-8 md:space-y-11 text-center mt-10 lg:mt-0">
    <h5 className="font-medium text-xl sm:text-2xl md:text-3xl">
      New Arrivals
    </h5>
    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
      Asgaard Sofa
    </h1>
    <Link href="/product">
      <button className="border-[1px] border-black text-base sm:text-lg md:text-xl py-2 sm:py-3 px-8 sm:px-10 md:mt-11 md:px-16">
        Order Now
      </button>
    </Link>
  </div>
</div>

      {/* secion4 */}
      <div className="mt-16 px-4">
      <h1 className="font-medium text-3xl text-center">Our Blogs</h1>
      <p className="text-[#9f9f9f] font-medium text-center mt-5">
        Find a bright ideal to suit your taste with our great selection
      </p>
      
      {/* Blogs Section */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
  {/* Blog Card 1 */}
  <div className="space-y-5 text-center">
    <Image
      src={"/blog01.jfif"}
      alt={"Blog 1"}
      height={400}
      width={400}
      className="rounded-md mx-auto object-cover"
      quality={100} // Ensures high-quality rendering
    />
    <p className="text-lg mt-3">Going all-in with millennial design</p>
    <h6 className="text-xl font-medium">Read More</h6>
    <div className="h-[2px] bg-black w-20 rounded-full mx-auto mt-2"></div>
    <div className="flex items-center justify-center space-x-2 text-center mt-2">
      <FaRegClock />
      <p>5 min</p>
      <MdOutlineCalendarToday />
      <p>12th Oct 2022</p>
    </div>
  </div>

  {/* Blog Card 2 */}
  <div className="space-y-5 text-center">
    <Image
      src={"/blog02.jfif"}
      alt={"Blog 2"}
      height={400}
      width={400}
      className="rounded-md mx-auto object-cover"
      quality={100}
    />
    <p className="text-lg mt-3">Going all-in with millennial design</p>
    <h6 className="text-xl font-medium">Read More</h6>
    <div className="h-[2px] bg-black w-20 rounded-full mx-auto mt-2"></div>
    <div className="flex items-center justify-center space-x-2 text-center mt-2">
      <FaRegClock />
      <p>5 min</p>
      <MdOutlineCalendarToday />
      <p>12th Oct 2022</p>
    </div>
  </div>

  {/* Blog Card 3 */}
  <div className="space-y-5 text-center">
    <Image
      src={"/blog03.jfif"}
      alt={"Blog 3"}
      height={400}
      width={400}
      className="rounded-md mx-auto object-cover"
      quality={100}
    />
    <p className="text-lg mt-3">Going all-in with millennial design</p>
    <h6 className="text-xl font-medium">Read More</h6>
    <div className="h-[2px] bg-black w-20 rounded-full mx-auto mt-2"></div>
    <div className="flex items-center justify-center space-x-2 text-center mt-2">
      <FaRegClock />
      <p>5 min</p>
      <MdOutlineCalendarToday />
      <p>12th Oct 2022</p>
    </div>
  </div>
</div>



      {/* View All Posts */}
      <p className="font-medium text-lg md:text-xl text-center mt-16">
  View All Post
</p>
      <div className="h-[2px] bg-black w-16 md:w-24 rounded-full mx-auto mt-3"></div>
    </div>
      {/* last section */}
      <div className="my-20 md:my-40 text-center space-y-4 md:space-y-6">
  <h1 className="font-bold text-4xl md:text-6xl">
    Our Instagram
  </h1>
  <p className="text-lg md:text-xl">
    Follow our store on Instagram
  </p>
  <button className="text-lg md:text-xl border-2 py-2 px-8 md:py-3 md:px-14 rounded-full shadow-lg shadow-slate-300">
    Follow Us
  </button>
</div>
    </section>
   </main>
  );
}
