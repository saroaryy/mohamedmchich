const services = [
    {
        title:`Machine Learning`,
        desc:`I can help you develop and deploy machine learning models to solve real-world problems.`
    },
    {
        title:`Data Engineering`,
        desc:`I help you in designing, building, and maintaining the architecture, databases and large-scale processing systems.`
    },
    {
        title:`DevOps`,
        desc:`I can help you automate your software development and deployment process, making it more efficient and reliable.`
    },
    {
        title:`Cloud`,
        desc:`I can help you design and implement a cloud-based infrastructure that is scalable, secure, and cost-effective.`
    },
    {
        title:`IT services delivery`,
        desc:`The most modern and high-quality design made at a professional level.`
    },
    {
        title:`Web Development`,
        desc:`High-quality development of sites at the professional level.`
    },
    {
        title:`Mobile Development`,
        desc:`Professional development of applications for iOS and Android.`
    }
]

const servicesInDiv = services.map((current,index) => {
    return  <li key={index} className="service-item">
                <div className="service-icon-box">
                    <img src="../components/img/devicon.png" alt="devicon" className="devicon" style={{width:'30px'}}/>
                </div>
                <div className="service-content-box">
                    <h4 className="service-item-title">{current.title}</h4>
                    <p className="service-item-text">{current.desc}</p>
                </div>
            </li>
})

export default function Aboutme(){
    return(
    <>

        <h2 className="page-title">About Me</h2>

        <div className="about-picocc">

            <img src="../components/img/foto.png" alt="aboutpic" className="about-pic" style={{width:'200px'}}/>
            <h5>Cyber Security IT</h5>
            
        </div>

        <section className="about-text">
            <p>
            I am an X and X Engineer.
            At Raytheon, I’ve developed a strong foundation in cybersecurity, focusing on
            penetration testing, firewall configuration, and IDS setup.
            I was responsible for implementing security policies and responding swiftly to data security crises,
            ensuring the protection of corporate infrastructure.
            </p>

            <p >
            In addition to cybersecurity, I managed virtual machines, user accounts, and network equipment,
            while configuring server hardware and maintaining VMWare infrastructure.
            My work involved optimizing system performance and ensuring high availability across IT systems.
            </p>

            <p >
            I am proficient in Java, Python, and C++, with experience in scripting. During my internship at Harvard,
            I applied these programming skills to Quantum Computing projects, solving algorithms and research problems.
            Through my master’s coursework, I’ve also led large-scale IT projects,
            including application deployment and building cybersecurity programs,
            with a focus on cloud computing and project planning.
            </p>
        </section>
        
        {
            /* Add bellow the serivce and what you can provide */
        }
        
        <section>
            <h3 className="service-title">what I'm Doing</h3>
            <ul className="serivce-list">
                {servicesInDiv}
            </ul>
        </section>

        <div className="seperator"></div>
            
                <section>
                    
                    <ul className="contacts-list">
                        <li className="contact-item">
                            <div className="footer-icon-box"> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:'20px'}} ><path fill="#1a75cf" d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
                            </div>
                            
                            <div>
                                <p>Email</p>
                                <a href="mailto:Mohamed_Mchich@student.uml.edu">Mohamed_Mchich@student.uml.edu</a>
                            </div>
                        </li>

                        <li className="contact-item">
                            
                            <div className="footer-icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{width:'20px'}} ><path fill="#1a75cf" d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM144 448c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM304 64L80 64l0 320 224 0 0-320z"/></svg>
                            </div>
                            
                            <div>
                                <p>Phone</p>
                                <a href="tel:(978)-622-5435">(978)-622-5435</a>
                            </div>
                            
                        </li>

                        <li className="contact-item">
                            

                            <div className="footer-icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:'20px'}} ><path fill="#1a75cf" d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg>
                            </div>
                            
                            <div>
                                <p>Birthday</p>
                                <time>January, 01, 2000</time>
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="footer-icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{width:'20px'}} ><path fill="#1a75cf" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                            </div>
                            
                            <div>
                                <p>Location</p>
                                <address>USA</address>
                            </div>
                        </li>
                    </ul>


                    {/* Link social media */}
                    <div className="seperator"></div>



                    <ul className="social-list">
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:'20px'}}><path fill="#1a75cf" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg> 
                            </a>
                        </li>
                        
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" style={{width:'20px'}}><path fill="#1a75cf" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:'20px'}}><path fill="#1a75cf" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:'20px'}}><path fill="#1a75cf" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:'20px'}}><path fill="#1a75cf" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                            </a>
                        </li>
                    </ul>
                </section>

    </>
    )
}