
function NewsAndUpdates(){
  // Typescript code
  // UPdate NewsCards
  const UpdateCard1 = {
    Title:"Embracing Tomorrow: 4 Ways JCW’s Strategic Vision for Child Welfare Comes Alive",
    Date:"June 6, 2024 ",
    Description:"At Joburg Child Welfare (JCW), we have reached a pivotal milestone as we celebrate over a century of unwavering dedication to child welfare. As we unveil our new brand identity,"
  }
  const UpdateCard2 = {
    Title:"Get Ready for the New Look JCW",
    Date: "May 3, 2024 ",
    Description:"Joburg Child Welfare (JCW) is gearing up for its 115th anniversary and is excited to unveil a fresh new look that embodies a steadfast commitment to child protection and welfare.Since 1909,"
  }
  // GoodNewsUpdates
  const GoodNewsCard1 ={
    Title: "Celebrating Success: Masi’s Empowering Journey with Eldorado Park’s Children",
    Date:"May 3, 2024",
    Description: "The Masibambsane Community Based Centre, (fondly known as “Masi)” recently hosted its Achievers Award Ceremony in Eldorado Park. The awards shine a spotlight on children who have performed well in their"
  }

// END OF Typescript
    return(
        <>
        
<div className="text-center p-10">
  <h1 className="text-3xl">News And Updates</h1>
</div>

 {/* Grid Section  */}
<section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

{/* card 1  */}

  <div className="w-96 border-2 border-sky-500 bg-white shadow-md rounded-xl ">
    <a href="#">
      <img src="https://jhbchildwelfare.org.za/wp-content/uploads/2024/06/Tomorrow-4-Ways-JCWs-Strategic-Vision-for-Child-Welfare-Comes-Alive-June-2024-1024x576.jpg" alt="" className="h-80 w-96 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-96">
        <span className="text-gray-400 mr-3 uppercase text-xs">Update</span>
        <span className="text-gray-400 mr-3 uppercase text-xs">{UpdateCard1.Date}</span>
        <p className="text-sm font-bold text-black truncate block capitalize">{UpdateCard1.Title}</p>
        <div className="flex items-center">
          <p className="text-lg  text-black cursor-auto my-3">{UpdateCard1.Description}</p>
        </div>
        <div>
          <a href="https://jhbchildwelfare.org.za/embracing-tomorrow-4-ways-jcws-strategic-vision-for-child-welfare-comes-alive/"  className=" rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read More</a>
        </div>
      </div>
    </a>
  </div>
   {/* Ends Here   */}

 {/* card 2  */}
  <div className="w-96 border-2 border-sky-500 bg-white shadow-md rounded-xl ">
    <a href="#">
      <img src="https://jhbchildwelfare.org.za/wp-content/uploads/2024/05/2-1024x576.jpg" alt="picture of children" className="h-80 w-96 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-96">
        <span className="text-gray-400 mr-3 uppercase text-xs">Update</span>
        <span className="text-gray-400 mr-3 uppercase text-xs">{UpdateCard2.Date}</span>
        <p className="text-sm font-bold text-black  truncate block capitalize">{UpdateCard2.Title}</p>
        <div className="flex items-center">
          <p className="text-lg  text-black cursor-auto my-3">{UpdateCard2.Description}</p>
        </div>
        <div>
        <a href="https://jhbchildwelfare.org.za/get-ready-for-the-new-look-jcw/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read More</a>
        </div>
      </div>
    </a>
  </div>
 {/* Ends Here   */}

 {/* card 3  */}
  <div className="w-96 border-2 border-sky-500 bg-white shadow-md rounded-xl ">
    <a href="#">
      <img src="https://jhbchildwelfare.org.za/wp-content/uploads/2024/05/1-1024x576.jpg" alt="Picture of Children" className="h-80 w-96 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-96">
        <span className="text-gray-400 mr-3 uppercase text-xs">GoodNews</span>
        <span className="text-gray-400 mr-3 uppercase text-xs">{GoodNewsCard1.Date}</span>
        <p className="text-sm font-bold text-black  truncate block capitalize">{GoodNewsCard1.Title}</p>
        <div className="flex items-center">
          <p className="text-lg  text-black cursor-auto my-3">{GoodNewsCard1.Description}</p>
        </div>
        <div>
        <a href="https://jhbchildwelfare.org.za/celebrating-success-masis-empowering-journey-with-eldorado-parks-children/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read More</a>
        </div>
      </div>
    </a>
  </div>


</section>
        </>
    )
}

export default NewsAndUpdates