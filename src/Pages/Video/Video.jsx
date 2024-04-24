import React from 'react';


const Video = () => {
    return (
        <div className='py-3 mx-auto w-[97%]'> 
            <h2 className='text-center text-3xl py-5'>Explor <span className='text-orange-500'>My Project</span></h2>
            <p className='text-xl text-orange-600 text-center py-2'>What I Know</p>
      <div className='grid lg:grid-cols-3 gap-3 py-3 '>

      <div className="  rounded overflow-hidden shadow-lg">
        <div className="relative h-0" style={{ paddingBottom: '56.25%' }}>
          <iframe
            title='YouTube video player'
            src="https://player.vimeo.com/video/938595281?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
          />
        </div>
  
        {/* Card title */}
        <div className="px-6 py-4">
          <a href="https://asr-photogram.netlify.app/"><div className="font-bold text-xl mb-2">PhotoGram</div></a>
        </div>
      </div>
      {/* code blog */}
        <div className=" rounded overflow-hidden shadow-lg">
        <div className="relative h-0" style={{ paddingBottom: '56.25%' }}>
          <iframe
            title='YouTube video player'
            src="https://player.vimeo.com/video/938601070?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
          />
        </div>
  
        {/* Card title */}
        <div className="px-6 py-4">
          <a target='_blank' href="https://asr-code-blog.netlify.app/"><div className="font-bold text-xl mb-2">Code Blog</div></a>
        </div>
      </div>

      </div>
      </div>
    );
};

export default Video;