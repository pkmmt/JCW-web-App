function Nav(){
    return(
        <>
            <header> 
    <nav className="bg-blue-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src="./src/assets/images/JCW-Main-Logo-2024-White.png" alt="Jcw Logo"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
        
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Profile</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Contact</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Impact</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <p className="text-white">Logout</p>
      </div>
    </div>
  </div>

{/* Mobile Menu  */}
    <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <a href="#" className="block rounded-md  px-3 py-2 text-base font-medium text-white" aria-current="page">Home</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Profile</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Contact</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Impact</a>
    </div>
  </div>
</nav>

    </header>
        </>
    )
}
export default Nav