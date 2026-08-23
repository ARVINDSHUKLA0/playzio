import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Link from "next/link";
import Footer from "./component/Footer";
import ReviewRating from "./component/ReviewRating";

export default function Home() {

  const whyChooseUs = [
    {
      icon: "/assets/img/svg-1.png",
      title: "500+ Happy Kids",
      description:
        "From climbing and sliding to jumping, crafting, and creative play — there's always something exciting to discover.",
    },
    {
      icon: "/assets/img/svg-2.png",
      title: "20+ Engaging Activities",
      description:
        "From climbing and sliding to jumping, crafting, and creative play — there's always something exciting to discover.",
    },
    {
      icon: "/assets/img/svg-3.png",
      title: "Parent-Friendly Café",
      description:
        "Relax with a cup of coffee, enjoy free Wi-Fi, and unwind while your little ones safely enjoy their playtime",
    },
    {
      icon: "/assets/img/svg-4.png",
      title: "Parties & Workshops",
      description:
        "Celebrate special moments with themed birthday parties, creative workshops, and exciting events for kids.",
    },
  ]

  return (
    <div className={styles.page}>
      <Navbar />
      <Banner />
      <main className={`${styles.main} container custom-width`}>
        <section className={styles.whychhoseHight}>
          <div className={`${styles.heading} text-center banner-title  mt-4`}>
            <h2>Why Choose Us?</h2>

            <p>
              At playzio, every visit is a new adventure! Here's why families
              love us:
            </p>
          </div>

          <div className={`row m-0 py-md-5 py-3`}>
            {whyChooseUs.map((item, index) => (
              <div className={`col-lg-3 col-md-4 col-sm-6 col-12 ${styles.card} mb-lg-0  mb-3`} key={index}>
                <div className={`bg-white ${styles.cardPading}`}>
                  <div className="px-3">
                    <img className={`img-fluid whychooseIcon`} src={item.icon}></img>
                  </div>
                  <h4 className="py-2 mt-3 px-2 ">{item.title}</h4>
                  <p className="fs-14 px-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className={styles.AboutSection}>
            <div className="row m-0 py-4 align-items-start">
              <div className={`col-lg-6 col-md-6 col-6 col-12 ${styles.CustomAboutHeight}`}>
                <img style={{ objectPosition: "left" }} className="img-fluid" src="/assets/img/about.png"></img>
              </div>
              <div className="col-lg-6 col-md-6 col-6 col-12">
                <h2 className="mb-md-4 fs-1 pt-md-0 pt-3 banner-title ">About Us</h2>
                <p className="mb-4">At playzio, we’ve created a magical world where kids can explore, learn, and play freely. Designed for children aged 9 months to 9 years, our vibrant play zones spark creativity and imagination at every corner from climbing walls to immersive role-play areas.</p>
                <p>Parents, we’ve got you covered too! With our focus on safety, cleanliness, and comfort, you can relax while our friendly, trained staff ensures your child has a blast</p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-auto">
          <div className="text-center py-lg-3 py-md-4 py-2 ">
            <h2 className="fs-1 banner-title mb-0 banner-title">Play, Party, Learn</h2>
            <p className="fs-16">Playzio is where fun meets learning and celebration!</p>
          </div>
          <div className="row m-0  mb-lg-5 mb-3">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
              <div className={`${styles.PlayCard}`}>
                <div>
                  <img className="img-fluid rounded-3" src="/assets/img/bhriday.png"></img>
                </div>
                <h4 className="mt-3">Birthdays</h4>
                <p className="fs-16">At Playzio, our workshops are designed to make learning fun, creative, and exciting! Kids can explore their imagination through art & craft, storytelling, music, science experiments, and other hands-on activities. Each workshop encourages children to learn new skills, build confidence, and enjoy meaningful experiences in a fun and safe environment</p>
                <button className={`border-0 px-3 text-white py-2 rounded-2 fs-12 text-uppercase fw-bold  btnBirthdays`} style={{ backgroundColor: "#FCB805" }}>get in touch</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
              <div className={`${styles.PlayCard}`}>
                <div>
                  <img className="img-fluid rounded-3" src="/assets/img/playzio-work.png"></img>
                </div>
                <h4 className="mt-3">Workshops</h4>
                <p className="fs-16">Playzio Birthdays are all about fun, laughter, and unforgettable memories!Celebrate your little one’s special day with exciting games, colorful decorations, delicious food, and plenty of playtime. From fun-filled activities to a safe and cheerful environment, our friendly team takes care of everything so parents can relax and enjoy the celebration too.</p>
                <button className="border-0 px-3 text-white py-2 rounded-2 fs-12 text-uppercase fw-bold btn-Workshops" style={{ backgroundColor: "#FE6B1F" }}>get in touch</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
              <div className={`${styles.PlayCard}`}>
                <div>
                  <img className="img-fluid rounded-3" src="/assets/img/palyzio-membership.png"></img>
                </div>
                <h4 className="mt-3">Memberships</h4>
                <p className="fs-16">Playzio Memberships make every visit more fun, exciting, and rewarding! Choose a membership that suits your family and enjoy exciting benefits like unlimited play sessions, special discounts, priority event bookings, guest passes, and exclusive member events. With Playzio, families can save more while creating happy memories together in a safe, clean, and joyful environment.</p>
                <button className="border-0 px-3 text-white py-2 rounded-2 fs-12 text-uppercase fw-bold btn-Memberships" style={{ backgroundColor: "#8EB0E6" }}>get in touch</button>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold banner-title m-0">
                Make Your <span style={{ color: "#FE6B1F" }}>Play Day</span> Special!
              </h2>

              <p className="text-secondary mx-auto" style={{ maxWidth: "600px" }}>
                Choose the perfect playtime for your little ones and enjoy
                a fun-filled day at Playzio.
              </p>
            </div>

            <div className="row g-4">

              {/* Left */}
              <div className="col-lg-5">
                <div className="bg-white rounded-4 shadow-sm p-4 p-md-5 h-100">

                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#ADD27D",
                      color: "#ff6b4a",
                      fontSize: "25px",
                    }}
                  >
                    <i className="fa-solid fa-child-reaching"></i>
                  </div>

                  <h3 className="fw-bold">Plan Your Visit</h3>

                  <p className="text-secondary lh-lg">
                    Ready for some fun? Explore our flexible day rates or
                    sign up for a Membership Plan. Whether it's a spontaneous
                    playdate or a regular routine, Playzio fits your family's
                    needs perfectly.
                  </p>

                  <a
                    href="#pricing"
                    className="btn text-white px-4 py-2 rounded-3 btn-Workshops"
                    style={{ background: "#FE6B1F" }}
                  >
                    Get More Details
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>

                  <div className="row g-2 mt-4">

                    <div className="col-4">
                      <div className="text-center">
                        <i className="fa-solid fa-shield-heart text-danger"></i>
                        <small className="d-block text-secondary mt-1">
                          Safe
                        </small>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="text-center">
                        <i className="fa-solid fa-face-smile text-warning"></i>
                        <small className="d-block text-secondary mt-1">
                          Happy Kids
                        </small>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="text-center">
                        <i className="fa-solid fa-users text-primary"></i>
                        <small className="d-block text-secondary mt-1">
                          Family
                        </small>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="col-lg-7" id="pricing">
                <div className="bg-white rounded-4 shadow-sm p-4 h-100">

                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "#eee7ff",
                        color: "#7650d8",
                      }}
                    >
                      <i className="fa-solid fa-ticket fs-5"></i>
                    </div>

                    <div>
                      <h3 className="fw-bold mb-0">Daily Walk-Ins</h3>
                      <small className="text-secondary">
                        Choose your perfect playtime
                      </small>
                    </div>
                  </div>

                  <div className="row g-3">

                    {/* Weekdays */}
                    <div className="col-md-6">
                      <div style={{ backgroundColor: "#fcb60585" }} className="p-3 rounded-4 h-100">

                        <small className="text-secondary">
                          All Days
                        </small>

                        <hr />

                        <div className="d-flex justify-content-between py-2">
                          <span>30 Mins</span>
                          <strong>₹280</strong>
                        </div>

                        <div className="d-flex justify-content-between py-2 border-top">
                          <span>60 Mins</span>
                          <strong>₹400</strong>
                        </div>

                        <div className="d-flex justify-content-between py-2 border-top">
                          <span>90 Mins</span>
                          <strong>₹600</strong>
                        </div>

                      </div>
                    </div>

                    {/* Weekends */}
                    {/* <div className="col-md-6">
                      <div className="p-3 rounded-4 bg-primary-subtle h-100">

                        <h5 className="fw-bold mb-1">
                          <i className="fa-solid fa-calendar-days me-2"></i>
                          Weekends
                        </h5>

                        <small className="text-secondary">
                          Fri - Sat - Sun + Holidays
                        </small>

                        <hr />

                        <div className="d-flex justify-content-between py-2">
                          <span>30 Mins</span>
                          <strong>₹650</strong>
                        </div>

                        <div className="d-flex justify-content-between py-2 border-top">
                          <span>60 Mins</span>
                          <strong>₹800</strong>
                        </div>

                        <div className="d-flex justify-content-between py-2 border-top">
                          <span>90 Mins</span>
                          <strong>₹900</strong>
                        </div>

                      </div>
                    </div> */}

                  </div>

                  {/* Socks */}
                  <div className="alert alert-warning d-flex align-items-center gap-3 mt-4 mb-3">
                    <span className="fs-4">🧦</span>

                    <div>
                      <strong>Socks are mandatory</strong>
                      <p className="mb-0 small">
                       wearing socks is mandatory for kids
                      </p>
                    </div>
                  </div>

                  {/* Extra Charges */}
                  <div className="row g-2">

                    <div className="col-md-4">
                      <div className="bg-light rounded-3 p-3 text-center">
                        <i className="fa-solid fa-user text-danger"></i>
                        <small className="d-block text-secondary">
                          Adult Entry
                        </small>
                        <strong>₹50</strong>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="bg-light rounded-3 p-3 text-center">
                        <i className="fa-solid fa-user-plus text-primary"></i>
                        <small className="d-block text-secondary">
                          Extra Adult
                        </small>
                        <strong>₹280</strong>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="bg-light rounded-3 p-3 text-center">
                        <i className="fa-solid fa-clock text-success"></i>
                        <small className="d-block text-secondary">
                          +30 Minutes
                        </small>
                        <strong>₹280</strong>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="m-auto">
          <div className="text-center pt-lg-5 pt-md-4 pt-3 pb-2 ">
            <h2 className="fs-1 banner-title">Explore Our Upcoming <br /> Events & Offers</h2>
          </div>
          <div className="row m-0 justify-content-center mb-lg-5 mb-3">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
              <div className={`${styles.cardEvent}`}>
                <div>
                  <img className="img-fluid rounded-3" src="/assets/img/montly-membership.png"></img>
                </div>
                <div className="mt-4" >
                  <h4 className="mt-2">Monthly Subscription Offer</h4>
                  <p className="fs-16">Give your little one unlimited fun all month long with Playzio’s Monthly Subscription!  Enjoy special benefits, savings, guest passes, and endless playtime in a safe and joyful environment</p>
                  <button style={{ backgroundColor: "#FE6B1F" }} className=" btn-Workshops border-0 px-3 text-white py-2 rounded-2 fs-12 text-uppercase fw-bold">get in touch</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
              <div className={`${styles.cardEvent}`}>
                <div className="">
                  <img className="img-fluid rounded-3" src="/assets/img/co-work.png"></img>
                </div>
                <div className="mt-4">
                  <h4 className="mt-2">Co-work at Playzio</h4>
                  <p className="fs-16">Work comfortably while your little ones enjoy a safe and fun play environment at Playzio. With comfortable seating, Wi-Fi, refreshments, and a secure play area, parents can stay productive while kids play, learn, and have</p>
                  <button style={{ backgroundColor: "#FCB805" }} className=" btnBirthdays border-0 px-3  text-white py-2 rounded-2 fs-12 text-uppercase fw-bold">get in touch</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
              <div className={`${styles.cardEvent}`}>
                <div>
                  <img className="img-fluid rounded-3" src="/assets/img/yearli-palyzio.png"></img>
                </div>
                <div className="mt-4">
                  <h4 className="mt-2">Yearly Pass </h4>
                  <p className="fs-16">Make every visit more fun with the Playzio Yearly Pass! Enjoy year-round play, special discounts, priority bookings, and exclusive benefits while creating endless happy memories with your little ones</p>
                  <button style={{ backgroundColor: "#D23AA6" }} className="border-0 px-3 btn-YearlyPass  text-white py-2 rounded-2 fs-12 text-uppercase fw-bold">get in touch</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
              <div className={`${styles.cardEvent}`} >
                <div>
                  <img className="img-fluid rounded-3" src="/assets/img/Family -playzio.png"></img>
                </div>
                <div className="mt-4">
                  <h4 className="mt-2">Family Playzio </h4>
                  <p className="fs-16">At Playzio, families can enjoy quality time together with exciting activities, safe play areas, and plenty of happy moments.It’s the perfect place for kids to play, parents to relax, and everyone to create memories together,</p>
                  <button style={{ backgroundColor: "#8FD6B8" }} className=" btn-Memberships border-0 px-3 text-white py-2 rounded-2 fs-12 text-uppercase fw-bold">get in touch</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ReviewRating />
      <Footer />
    </div>
  );
}
