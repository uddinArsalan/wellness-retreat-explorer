function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen fixed top-0 bottom-0 left-0 right-0 bg-white z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    <div className="mt-4 text-gray-950 text-xl font-semibold">Loading...</div>
  </div>
  )
}

export default Loading