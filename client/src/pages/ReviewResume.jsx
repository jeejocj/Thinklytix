import { useState } from 'react'
import { Sparkles, Upload, FileText } from 'lucide-react'

const ReviewResume = () => {
  const [fileName, setFileName] = useState("");
  
  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* left col */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#447AFF]' />
          <h1 className='text-xl font-semibold'>Resume Review</h1>
        </div>
        
        <p className='mt-6 text-sm font-medium'>Upload Resume</p>
        
        {/* File upload section */}
        <div className='mt-3 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center'>
          <input 
            type="file" 
            id="file-upload"
            className='hidden'
            accept=".pdf"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
          <label htmlFor="file-upload" className='cursor-pointer'>
            <Upload className='w-8 h-8 text-gray-400 mx-auto mb-2' />
            <p className='text-sm text-gray-600'>
              <span className='text-blue-600 underline'>Choose File</span>
              {fileName ? ` ${fileName}` : ' No file chosen'}
            </p>
            <p className='text-xs text-gray-500 mt-1'>
              Supports PDF resume only.
            </p>
          </label>
        </div>
        
        <button className='w-full flex justify-center items-center gap-2 bg-linear-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          <FileText className='w-5'/>
          Review Resume
        </button>
      </form>
      
      {/* Right col*/}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
        <div className='flex items-center gap-3'>
          <FileText className='w-5 h-5 text-[#447AFF]' />
          <h1 className='text-xl font-semibold'>Analysis Results</h1>
        </div>
        
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <FileText className='w-9 h-9' />
            <p>Upload a resume and click "Review Resume" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewResume