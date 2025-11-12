import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ai' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='write-article' element={<WriteArticle/>}/>
        <Route path='blog-titles' element={<BlogTitles/>}/>
        <Route path='generate-images' element={<BlogTitles/>}/>
        <Route path='remove-background' element={<BlogTitles/>}/>
        <Route path='remove-object' element={<BlogTitles/>}/>
        <Route path='review-resume' element={<BlogTitles/>}/>
        <Route path='community' element={<BlogTitles/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
