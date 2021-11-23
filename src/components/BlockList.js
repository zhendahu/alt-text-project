import React from 'react';
import image1 from '../images/what-is-alt-text.png';
import image2 from '../images/why-alt-text.jpeg';
import image3 from '../images/how-to-write-alt-text.jpeg';
import image4 from '../images/how-to-add-alt-text.jpeg';
import image5 from '../images/moving-forward.jpeg';
import image6 from '../images/advanced-settings.jpg';
import image7 from '../images/write-alt-text.jpg';
import './BlockList.css';

function Block(props){
    return(
        <div>
            <div><h2 className = "header2">{props.title}</h2></div>
            <div>
                <img className = "image"
                    src = {props.image}
                    alt = {props.alt}
                    width = "200px"
                />
            </div>
            <div>
                <p className = "paragraph">{props.text}</p>
            </div>
        </div>
    );
}

function BlockList(){
    return(
        <div>
            <Block
                title = "WHAT IS ALT-TEXT?"
                image = {image1}
                alt = "Illustration of an alt tag attached to browser windows."
                text = "Alt-text, at the most basic level, is a type of 'tag' that the programming language HTML uses. In HTML, tags are used as a way to annotate code, telling both the programmer and the computer what type of content is in between the tags. The 'alt' tag in HTML is used to contain alternative text, which is commonly abbreviated as alt-text. Alt-text traditionally serves to improve user accessibility and improve SEO benefits on websites. However, alt-text is no longer restricted specifically to web development, and many social media platforms now offer a place for users to include alt-text on posts and pictures."
            />
            <Block
                title = "WHY SHOULD WE USE ALT-TEXT?"
                image = {image2}
                alt = "Icon meant to signify visual impairment, it is an eye with a forward slash seperating the eye down the middle, with the left half of the eye obscured by diagonal lines."
                text = "In web development, alt-text is useful for increasing your website’s accessibility, as well as receiving SEO (search engine optimization) benefits. More importantly, however, alt-text is essential for those who are blind or visually impaired to consume visual content. Often, blind or visually impaired individuals use screen readers, either built-in to their phone/computer or externally bought, which audibly reads out words from websites or other visual-based media. When a screen reader comes across an image, it will instead read out the alt-text of the image. Thus, alt-text is extremely important for those who are visually impaired to visualize images."
            />
            <Block
                title = "HOW SHOULD WE WRITE ALT-TEXT?"
                image = {image3}
                alt = "Two pairs of grayscale hands type on their phones."
                text = "According to Wikipedia’s style guide, when writing alt-text, it is important to ask yourself these questions:
                - Why is this image here?

                - What information is it presenting?

                - What purpose does it fulfill?

                With alt-text, there is a challenge of balancing expression (alt-text as poetry), and utility (describing the image as objectively and as well as possible). According to the Alt-Text as Poetry Workbook by Bojana Coklyat and Shannon Finnegan, it is important to remember that accessibility comes first when writing alt-text. When endeavoring too far into expression, it may leave little room for the reader to interpret the image on their own, and may also obscure the actual description of the image. 
                "
            />
            <Block
                title = "HOW CAN WE ADD ALT-TEXT?"
                image = {image4}
                alt = "Hand holding circular Facebook and Instagram logos."
                text = "On many social media platforms, including Instagram, the option to add alt text is hidden from the user. To write alt text for an Instagram post, go through the normal process of creating a new post until the final step before posting. At that point, you want to select advanced settings to reveal the write alt text option. Now, pressing write alt text will open a text box for you to type your alt text description into. The process of adding alt text on Instagram is clarified by the pictures below."
            />
            <div className = "how-to">
                <img src={image6} alt="Screenshot of Instagram new post menu. Advanced settings is highlighted with a red box."/>
                <img src={image7} alt="Screenshot of Instagram new post advanced settings menu. Write alt text is highlighted with a red box."/>
            </div>
            <Block
                title = "WHAT SHOULD WE DO MOVING FORWARD?"
                image = {image5}
                alt = "A group of 4 adolescent children wearing jeans and warm jackets sit on a bench together in conversation."
                text = "Moving forward, it is important that we raise awareness of the existence of alt text and who it benefits. One common reason that people do not add alt text to their content is that they simply are not aware that such a feature exists. Therefore, it is also important that we reach out to social media companies and push for increased visibility of accessibility features. For example, Instagram could prompt the user asking them to add alt text before they post, rather than hiding the option to add alt text behind a hidden menu."
            />
            <div className = "refs">
                <h1 className = "ref-title">References</h1>
                    <a href="https://www.noisyvision.org/2011/04/26/non-sono-cieco-sono-ipovedente-per-quanto-tempo-potr%C3%B2-ancora-vedere/" target="__blank">I’m not blind. I am VISUALLY IMPAIRED.</a>
                    <br/><a href="https://www.reliablesoft.net/alt-text/" target="__blank">Alt Text for Images</a>
                    <br/><a href="https://www.searchenginejournal.com/most-people-still-in-2020-arent-aware-facebook-owns-instagram/352758/" target="__blank">Most People Still, in 2020, Aren’t Aware Facebook Owns Instagram</a>
                    <br/><a href="https://thrivingschools.kaiserpermanente.org/how-to-talk-to-teens-about-drugs-and-alcohol/" target="__blank">How to Talk to Teens About Drugs and Alcohol</a>
                    <br/><a href="https://moz.com/learn/seo/alt-text" target="__blank">SEO: Alt Text</a><br/><br/>
            </div>
        </div>
    );
}

export default BlockList;