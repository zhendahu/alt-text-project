import React from 'react';
import image1 from '../images/what-is-alt-text.png';
import image2 from '../images/why-alt-text.jpeg';
import image3 from '../images/how-to-write-alt-text.jpeg';
import image4 from '../images/how-to-add-alt-text.jpeg';
import image5 from '../images/moving-forward.jpeg';
import './BlockList.css';

function Block(props){
    return(
        <div>
            <div><h2 class = "header2">{props.title}</h2></div>
            <div>
                <img class = "image"
                    src = {props.image}
                    alt = {props.alt}
                    width = "200px"
                />
            </div>
            <div>
                <p class = "paragraph">{props.text}</p>
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
                text = "Filler here"
            />
            <Block
                title = "WHAT SHOULD WE DO MOVING FORWARD?"
                image = {image5}
                alt = "A group of 4 adolescent children wearing jeans and warm jackets sit on a bench together in conversation."
                text = "Filler here"
            />

        </div>
    );
}

export default BlockList;