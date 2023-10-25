import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList/CourseList';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useJsonQuery } from './utilities/fetch';
import { useDbData } from './utilities/firebase';
import TermPage from './components/TermPage/TermPage';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import EditForm from './components/EditForm';



const Main = () => {

  const [data, error] = useDbData('/');

  if (!data) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading course data: {`${error}`}</h1>;

  const EditFormForUrl = ({courses}) => {
    const { id } = useParams();
    return <EditForm id={id} course={courses[id]} />;
  };

  return (
    <div className="main">
      
      <Banner title={data.title} />
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<TermPage courses={data.courses} />} />
            <Route path="/edit/:id" element= {<EditFormForUrl courses={data.courses}/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
  
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>  
    <div className="container">
      <Main />
    </div>
  </QueryClientProvider>
 )
  
export default App;