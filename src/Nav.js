import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Projects from './Projects';
import Design from './Design';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import DesignProject from './DesignProject';


export default function Nav() {
    // nav w links to diff pages with router
    //home (contains featured design/projects + about)
    //design page contains links to in-depth project descriptions
    //project page contains all project links (basic format)

    //TODO: make design projects load more dynamically...

    return (
        <Router>
            <div className="NavBar lh-lg text-lg-end col-lg-2 pe-lg-4 mb-4">
                <Link to="/" className="navItem link">./home</Link>
                <Link to="/projects" className="navItem link">./projects</Link>
                <Link to="/design" className="navItem link">./design</Link>
                <Link to="/about" className="navItem link">./about</Link>
                <a href="https://drive.google.com/file/d/1AypO-5eEpSkGZyb8f7XPse1op22lexuv/view?usp=sharing" target="_blank" rel="noreferrer" className="navItem link">./resume</a>
            </div>

            <div className="contentContainer col-lg-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/design" element={<Design />} />
                    <Route path="/design/GrowthTracker" element={
                        <DesignProject
                            title="Growth Tracker"
                            mainImg="growthTrackerSlides/GrowthTrackerWide.png"
                            link="https://chrome.google.com/webstore/detail/growth-tracker/pkbbochahepbkpkkidbhhdjhmjafgncm"
                            summary="Plant-themed journal and mood tracker for the browser."
                            role="Designer, Front-End Developer"
                            timeline="Jun 2022-Jul 2022"
                            tools="Figma, HTML, CSS"
                            p1Header="About"
                            p1="Growth Tracker is a digital journal and mood tracker that can be used within the browser. 
                        It was created by Cmd Cat, a development team with my partner and I! We wanted to make something 
                        that would encourage the healthy habit of journaling, in a convenient and quick way. We created 
                        the extension using JavaScript, HTML, and CSS. I worked on all visual aspects of the project, 
                        which included the UI design, artwork, HTML, and CSS styling. It is fully functioning and available for both Firefox and Google Chrome!"
                            p1Img="growthTrackerSlides/growthTracker3.png"
                            p2Header="Initial Design"
                            p2="My goal for the design of this extension was to be cute and “aesthetically pleasing” to look at. 
                        Initially (before I had decided the plant theme), I had a pink color palette. 
                        Otherwise, the overall layout remained consistent to these first designs throughout development."
                            p2Img="growthTrackerSlides/growthTracker1.png"
                            p3Header="Final Design"
                            p3="Eventually I landed on a plant theme, since it fit the goal of the extension: to log one's 
                        thoughts and “grow” as a person. With this, I implemented a new color palette of blue and green. 
                        Blue functioned as a more heavy color to indicate sadness on the emotion ranking system, while green 
                        indicated happiness (and also linked back to the plant theme). I also designed a calendar page 
                        that would show every day's emotion in the year."
                            p3Img="growthTrackerSlides/growthTracker2.png"
                            p4Header="Artwork"
                            p4="I created original art to be used for this project. I went with a hand-drawn style, 
                        kept the colors consistent with the chosen palette."
                            p4Img="growthTrackerSlides/growthTracker4.png"
                        />} />
                    <Route path="/design/USCRacing" element={<DesignProject
                        title="USC Racing"
                        mainImg="uscRacingSlides/USCRacingWide.png"
                        link="https://www.uscformulasae.com/"
                        summary="Reimagined website for USC's Formula SAE Racing Team."
                        role="Web Designer, Team of 4"
                        timeline="Sep 2022-Dec 2022"
                        tools="Figma, Wix"
                        p1Header="Moodboard"
                        p1="I began with moodboarding ways that racing could be represented graphically. I largely took inspiration from
                        racing video game uis, as well as elements such as diagonals and gradients which visually communicate speed. USC
                        Racing also already had a brand identity, so that was considered in terms of color palette and typography."
                        p1Img="uscRacingSlides/moodboard.png"
                        p2Header="Lo-Fi Prototype"
                        p2="Design goals for the site included attracting more sponsors. 
                        How do we attract potential sponsors? Having a consistent look to each page will make the site more professional,
                         and therefore more appealing to sponsors. What can we do to make usc racing more attractive to potential new members? 
                        The site previously had many photos of the team-this should be kept/emphasized, 
                        as potential members of orgs often value knowing the kind of community they will be entering. Also featuring more of the club's 
                        actual projects so that potential members can see what kind of work they do."
                        p2Img="uscRacingSlides/lofi.png"
                        p3Header="Mid-Fi Prototype"
                        p3="Goal for mid-fi: implement layout decided in lo-fi and factor in critique. Added more of the graphic elements that
                        will be considered for the final (color, type, etc.)."
                        p3Img="uscRacingSlides/midfi.png"
                        p4Header="Hi-Fi Prototype"
                        p4="Finalized mid-fi with critique edits. Added brand elements such as typefaces and images."
                        p4Img="uscRacingSlides/hifi.png"
                    />} />
                    <Route path="/design/booklet" element={<DesignProject
                        title="Data Privacy Booklet"
                        mainImg="bookletSlides/bookletWide.png"
                        summary="Booklet with original graphics about data and privacy."
                        role="Graphic Designer"
                        timeline="Jun 2021-Jul 2021"
                        tools="Adobe Illustrator, Adobe InDesign, Internet"
                    />} />
                    <Route path="/design/USCStudentLife" element={<DesignProject
                        title="USC Student Life"
                        mainImg="studentLifeSlides/studentLife.png"
                        link="https://www.instagram.com/uscstudentlife/?hl=en"
                        summary="Graphics and content for USC Student Life and the USC student community."
                        role="Graphic Designer"
                        timeline="Mar 2022-Present"
                        tools="Figma, Adobe Illustrator, Procreate"
                        p1Header="About"
                        p1="USC Student Life encompasses all things relating to student experience at USC. This includes
                         events, social media, and resources. My role in Student Life has largely centered around 
                         social media content and marketing, as well as creating assets for events, websites, and merchandise."
                        p1Img="studentLifeSlides/studentLife1.png"
                    />} />
                    <Route path="/design/terrascape" element={<DesignProject
                        title="TerraScape"
                        mainImg="terrascapeSlides/terrascapeWide.png"
                        summary="Speculative design for an environmental simulation editor."
                        role="UI Designer"
                        timeline="Sep 2023-Oct 2023"
                        tools="Blender, Figma, Adobe Photoshop"
                        p1Header="About"
                        p1="TerraScape is a conceptual environment-building program that is used to create
                         a simulation of the natural world. As a planet, we do not prioritize nature when it comes to day to day life, which has resulted in
                         endless pollution in the name of convenience and economy. This project exemplifies what may happen 
                         in the future if we continue on this path. A future in which the only way we can experience the majesty
                          of nature is in simulations, as the existing versions would no longer be beautiful.
                           I use images from my own trips to national parks, 3D modeling, and UI design to create an
                            interface that would be used to build out a custom environment which can then be experienced in a simulation by the user."
                        p1Img="terrascapeSlides/ui.JPG"
                        p2Header="Ideation"
                        p2="My initial sketch and concept was inspired by artist Kristoffer Zetterstrand and designer GMUNK.
                        These images were taken by me during a roadtrip to Banff and Jasper national parks in Alberta, Canada. Their immense beauty is what
                         sparks my passion in protecting our natural world."
                        p2Img="terrascapeSlides/ui1.png"
                        p3Header="Modeling"
                        p3="TerraScape is a program that combines 2D photo editing, 3D modeling, and scripting to create a simulated world. To demonstrate the
                         proposed construction of these simulated environments, I created a 3D diorama that utilized my 2-dimensional images in a 3-dimensional space.
                         Users would be able to collage together images of environmental settings to be converted to a 3D model, which could then be experienced in VR.
                          To create the model, I imported my cut-up images into Blender and constructed the land how I wanted. I also added a larger body of water."
                        p3Img="terrascapeSlides/ui2.png"
                        p4Header="UI Design"
                        p4="The rest of the project consisted of designing the interface of TerraScape. I used Figma,
                         and was largely inspired by the UIs of Photoshop, Blender, and VSCode. This process was conceptual exciting,
                         as I was designing the software of the future, that could be used to create worlds. I added final touches with
                          Photoshop to emulate the glow and slight distortion of an LCD screen."
                        p4Img="terrascapeSlides/ui3.png"
                    />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}