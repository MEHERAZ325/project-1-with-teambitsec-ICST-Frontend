import React from 'react'

const VideoGallery = () => {
  return (
    <div className='sm:w-[325px] sm:h-[400px] mt-[80px] sm:mt-[400px] md:w-[720px] md:h-[278px] md:mt-[100px]'>

        <h2 className='text-center mb-2 text-gray-700'>ভিডিও গ্যালারী</h2>
        <hr />
        <div className='md:flex items-center justify-center gap-3 mt-7 sm:grid grid-cols-1'>
            <video src="https://icstfeni.edu.bd/assets/videos/icst1.mp4" controls height="200" width="310"></video> <br />
            <video src="https://icstfeni.edu.bd/assets/videos/icst2.mp4" controls height="200" width="310"></video>
        </div>
    </div>
  )
}

export default VideoGallery