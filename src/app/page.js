import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Link from "next/link";
import Footer from "./component/Footer";

export default function Home() {

  const whyChooseUs = [
    {
      icon: "/assets/img/svg-1.jpg",
      title: "500+ Happy Kids",
      description:
        "A fun-filled play destination where toddlers, preschoolers, and school-age kids can explore, play, and make happy memories.",
    },
    {
      icon: "/assets/img/svg-1.jpg",
      title: "20+ Engaging Activities",
      description:
        "From climbing and sliding to jumping, crafting, and creative play — there's always something exciting to discover.",
    },
    {
      icon: "/assets/img/svg-1.jpg",
      title: "Parent-Friendly Café",
      description:
        "Relax with a cup of coffee, enjoy free Wi-Fi, and unwind while your little ones safely enjoy their playtime",
    },
    {
      icon: "/assets/img/svg-1.jpg",
      title: "Parties & Workshops",
      description:
        "Celebrate special moments with themed birthday parties, creative workshops, and exciting events for kids.",
    },
  ]

  return (
    <div className={styles.page}>
      <Navbar />
      <Banner />
      <main className={`${styles.main} container-fluid custom-width`}>
        <section className={styles.section}>
          <div className={`${styles.heading} text-center`}>
            <h2>Why Choose Us?</h2>

            <p>
              At playzio, every visit is a new adventure! Here's why families
              love us:
            </p>
          </div>

          <div className={`row m-0 py-md-5 py-3`}>
            {whyChooseUs.map((item, index) => (
              <div className={`col-lg-3 col-md-6 col-sm-6 col-12`} key={index}>
                <div className={`${styles.card} `}>
                  <div className={styles.icon}>
                    {/* <i className={`${item.icon} fs-1`}></i> */}
                    <img className={`img-fluid whychooseIcon`} src={item.icon}></img>
                  </div>
                  <h4>{item.title}</h4>
                  <p className="fs-14">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className={styles.AboutSection}>
            <div className="row m-0 py-4 align-items-center">
              <div className={`col-lg-6 col-md-6 col-6 col-12 ${styles.CustomAboutHeight}`}>
                <img className="img-fluid" src="/assets/img/about.png"></img>
              </div>
              <div className="col-lg-6 col-md-6 col-6 col-12">
                <h2 className="mb-md-4 fs-1 pt-md-0 pt-3">About Us</h2>
                <p className="mb-4">At playzio, we’ve created a magical world where kids can explore, learn, and play freely. Designed for children aged 9 months to 9 years, our vibrant play zones spark creativity and imagination at every corner from climbing walls to immersive role-play areas.</p>
                <p>Parents, we’ve got you covered too! With our focus on safety, cleanliness, and comfort, you can relax while our friendly, trained staff ensures your child has a blast</p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-auto">
          <div className="text-center py-lg-5 py-md-4 py-2 ">
            <h2 className="fs-1">Play, Party, Learn</h2>
            <p className="fs-16">Playzio is where fun meets learning and celebration!</p>
          </div>
          <div className="row m-0 justify-content-center mb-lg-5 mb-3">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
              <div>
                <img className="img-fluid rounded-3" src="/assets/img/about.png"></img>
              </div>
              <h4 className="mt-2">Birthdays</h4>
              <p className="fs-16">Themed décor, exciting games, and private party spaces for unforgettable memories.</p>
              <button className="border-0 px-3 bg-info text-white py-2 rounded-2 fs-12 text-uppercase fw-bold">get in touch</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
              <div>
                <img className="img-fluid rounded-3" src="/assets/img/about.png"></img>
              </div>
              <h4 className="mt-2">Workshops</h4>
              <p className="fs-16">Hands-on activities, sensory play, and creative sessions to spark imagination.</p>
              <button className="border-0 px-3 bg-info text-white py-2 rounded-2 fs-12 text-uppercase fw-bold">get in touch</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
              <div>
                <img className="img-fluid rounded-3" src="/assets/img/about.png"></img>
              </div>
              <h4 className="mt-2">Memberships</h4>
              <p className="fs-16">Unlimited play, exclusive perks, and access to special events.</p>
              <button className="border-0 px-3 bg-info text-white py-2 rounded-2 fs-12 text-uppercase fw-bold">get in touch</button>
            </div>
          </div>
        </section>


        {/* <section className='planvisit-warper pt-3 pb-lg-5 pb-2'>
          <div className='row align-items-center'>
            <div className='col-lg-4 col-md-12 col-12 mb-4'>
              <h2 className='pv-title fs-1 fw-bold'>Plan Your Visit</h2>
              <p className='pv-sub'>
                Ready for some fun? Explore our flexible day rates or sign up for a{' '}
                <Link href='/membership' className='pv-link text-decoration-none'>Membership Plan</Link>.
                Whether it&apos;s a spontaneous playdate or a regular routine, playzio
                fits your family&apos;s needs perfectly.
              </p>
              <button className="px-2 py-2 border-0 bg-danger text-white rounded-2"> Get More Details</button>
            </div>

            <div className='offset-lg-1 col-lg-7 col-md-12 col-12   rounded-2'>
              <div className="conatiner bg-white p-3">
                <div className='pv-card-wrap'>


                  <div className=' py-3'>
                    <h3 className='pv-card-title py-2'>Daily Walk-Ins</h3>

                    <div className='row g-0'>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-12 py-2'>
                        <div className='pv-pill pv-pill-pink'>
                          Weekdays (Mon-Tue-Wed-Thu)
                        </div>
                        <ul className='pv-list'>
                          <li className="fs-14">30 MINS PLAYTIME – Rs. 600</li>
                          <li className="fs-14">60 MINS PLAYTIME – Rs. 700</li>
                          <li className="fs-14">90 MINS PLAYTIME – Rs. 850</li>
                        </ul>
                      </div>

                      <div className='col-lg-6 col-md-6 col-sm-6 col-12 py-2'>
                        <div className='pv-pill pv-pill-blue'>
                          Weekends (Fri-Sat-Sun) + National Holidays
                        </div>
                        <ul className='pv-list'>
                          <li className="fs-14">30 MINS PLAYTIME – Rs. 650</li>
                          <li className="fs-14">60 MINS PLAYTIME – Rs. 800</li>
                          <li className="fs-14">90 MINS PLAYTIME – Rs. 900</li>
                        </ul>
                      </div>
                    </div>

                    <div className='pv-note'>
                      <p className='pv-note-highlight m-0 py-1'>
                        At playzio, <strong>wearing socks is mandatory</strong> for both kids
                        and adults – it's the rule for happy hopping!
                      </p>
                      <p className="m-0 py-1">Adult entry for kid above 3 years will be charged at Rs. 200</p>
                      <p className="m-0 py-1">Extra adult entry charged at Rs. 200</p>
                      <p className="m-0 py-1">Extend playtime now +30 mins at Rs. 200</p>
                    </div>
                  </div>

                  <div className='pv-cloud'></div>
                </div>
              </div>
            </div>

          </div>
        </section> */}

        {/* <Footer/> */}
      </main>
    </div>
  );
}
