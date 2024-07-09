
function Events(){

    const EventCard1 = {
        Price: "Free",
        Eventname: "lorem ipsum",
        Time: "13:00 to 18:00",
        Date: "12 May 2024",
        Location: "lorem ipsum"

    }
    const EventCard2 = {
        Price: "Free",
        Eventname: "lorem ipsum",
        Time: "13:00 to 18:00",
        Date: "12 May 2024",
        Location: "lorem ipsum"

    }
    const EventCard3 = {
        Price: "Free",
        Eventname: "lorem ipsum",
        Time: "13:00 to 18:00",
        Date: "12 May 2024",
        Location: "lorem ipsum"

    }
    return(
        <>
        {/* Heading */}
          <div className="text-center p-10">
            <h1 className="text-3xl">Events</h1>
          </div>
          {/* End */}

          {/* Card 1 */}
<div className="min-h-screen flex justify-center items-center py-20">
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">FundRaiser</h3>
      <div className="relative">
        <img className="w-full rounded-xl" src="https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?cs=srgb&dl=pexels-mccutcheon-1566909.jpg&fm=jpg" alt="picture of hands" />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{EventCard1.Price}</p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{EventCard1.Eventname}</h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <p>{EventCard1.Time}</p>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-indigo-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
          </span>
          <p>{EventCard1.Date}</p>
        </div>
        <div className="flex space-x-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-indigo-600">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
               <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
          <p>{EventCard1.Location}</p>
        </div>
        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View</button>
      </div>
    </div>
    {/* END */}

    {/* CARD 2 */}

    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">FundRaiser</h3>
      <div className="relative">
        <img className="w-full rounded-xl" src="https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?cs=srgb&dl=pexels-mccutcheon-1566909.jpg&fm=jpg" alt="picture of hands" />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{EventCard2.Price}</p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">\{EventCard2.Eventname}</h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <p>{EventCard2.Time}</p>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-indigo-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
          </span>
          <p>{EventCard2.Date}</p>
        </div>
        <div className="flex space-x-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-indigo-600">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
               <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
          <p>\{EventCard2.Location}</p>
        </div>
        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View</button>
      </div>
    </div>
    {/* END */}

    {/* CARD 3 */}

    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">FundRaiser</h3>
      <div className="relative">
        <img className="w-full rounded-xl" src="https://images.pexels.com/photos/1566909/pexels-photo-1566909.jpeg?cs=srgb&dl=pexels-mccutcheon-1566909.jpg&fm=jpg" alt="picture of hands" />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">\{EventCard3.Price}</p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{EventCard3.Eventname}</h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <p>{EventCard3.Time}</p>
        </div>
        <div className="flex space-x-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-indigo-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
          <p>{EventCard3.Date}</p>
        </div>
        <div className="flex space-x-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-indigo-600">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
               <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
          <p>l{EventCard3.Location}</p>
        </div>
        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Events