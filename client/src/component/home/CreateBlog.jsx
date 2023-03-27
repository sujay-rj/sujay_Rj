import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import './CreateBlog.css'
import { category } from '../data/data.js'
import { DataContext } from '../../context/DataProvider';
import { useContext } from 'react';

const CreateBlog = () => {
    const [searchParams] = useSearchParams();
    const categoryy = searchParams.get('category');

    const u = useContext(DataContext)

    let user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();

    const createBlogFun= () =>{
        if(!user){
            navigate('./login')
            alert(`Login to Post`)
        }else{
            navigate('/create');
        }
    }

    return (
        <>
            <div className='createContent'>
                <div className='createContent-btn'>

                   
                        
                            <button onClick={()=>createBlogFun()} className='createBlogBtn'>Create Blog</button>
                        
                    
                </div>
                <div className='createContent-quote'>
                    <p className='quotation'>" The secret of success is to do the common thing uncommonly well. "</p>
                    <p className='quotationAuthor'>-John D. Rockefeller Jr.</p>
                </div>

            </div>


        </>
    )
}


export default CreateBlog;