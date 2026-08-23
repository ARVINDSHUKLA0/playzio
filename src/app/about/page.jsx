import React from 'react'
import '../about/about.css'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const page = () => {
    return (
        <>
            <Navbar />
            <section className='py-3' style={{ backgroundColor: "#FFF6EF" }}>
                <div className='container custom-width '>
                    <div className="row m-0">
                        <div className="col-lg-5 col-md-5 col-6 col-12">
                            <div className='py-4'>
                                <img className='img-fluid rounded-3' src="/assets/img/about.png" alt="" />
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-6 col-md-6 col-6 col-12">
                            <div className='py-4'>
                                <h2 className='mb-3 banner-title'>The founder of Playzio</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi sunt numquam iusto facilis laudantium quos et dolorum pariatur! Repellendus maiores maxime excepturi delectus! Maxime odio dicta quidem voluptatem, quia pariatur rerum libero sapiente, deleniti accusamus  erat, dolorum ipsa fuga, laudantium nulla consequuntur culpa temporibus? Aspernatur placeat quasi deleniti officia sit? Error repellendus quo ducimus, quod quis veritatis debitis impedit quia. Aut adipisci labore saepe veniam aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quod eius quasi enim amet molestiae nisi, soluta saepe! Obcaecati, excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quae itaque. adipisicing elit. Beatae, consequatur!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page