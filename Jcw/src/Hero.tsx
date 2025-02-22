function Hero(){
    return(
        <>
        
{/* Start of Hero Section  */}
<div className="absolute">
  <img src="https://media.istockphoto.com/id/2096480418/photo/group-of-multi-cultural-children-friends-linking-arms-looking-down-into-camera.jpg?s=612x612&w=0&k=20&c=H0-_W5BfzoBd8VqKwsj353-25GCwsF5XRHVzitJ4ffQ="/>
</div>
  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome To The JCW Family</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Donate</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
    </div>
  </div>
  {/* End of Hero Section */}
        </>
    )
}

export default Hero