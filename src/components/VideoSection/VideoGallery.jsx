import React from 'react'

const VideoGallery = () => {
  return (
    <div className='sm:w-[310px] sm:h-[400px] sm:mt-[450px] md:w-[720px] md:h-[278px] md:mt-[200px]'>

        <h2 className='text-center text-lg mb-2 text-gray-700'>ভিডিও গ্যালারী</h2>
        <hr />
        <div className='sm:grid grid-cols-1 sm:ml-4 md:flex items-center justify-center gap-3 mt-7 '>
            <video src="https://icstfeni.edu.bd/assets/videos/icst1.mp4" controls height="200" width="310"></video> <br />
            <video src="https://icstfeni.edu.bd/assets/videos/icst2.mp4" controls height="200" width="310"></video>
        </div>
    </div>
  )
}

export default VideoGallery