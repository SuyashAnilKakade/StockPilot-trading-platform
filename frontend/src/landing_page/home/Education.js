import React from 'react';

function Education (){
    return(
        <div className='container my-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='/media/education.svg' alt='education' width="70%"/>
                </div>


                <div className='col-6 mt-5'>
                    <h1 className='fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest stock market online education book in the world covering everything from basics to advanced training.</p>
                   
                   <a href="#">Versity<i class='bx bx-right-arrow-alt'></i></a>

                   <p className='mt-5'>Trading Q&A, most active trading and investment market related queries</p>

                   <a href="#"><a href="#">Trading Q&A<i class='bx bx-right-arrow-alt'></i></a><i class='bx bx-right-arrow-alt'></i></a>
                </div>
            </div>
        </div>
    )
};

export default Education;

