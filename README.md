# marqueeForAll

### This Project is created inorder to work marquee or scroll in different version browser across multiple browsers without CSS3 and `<marquee>` tag.

## How to Use it

Use below HTML code, make sure it should have same id attribute as below and take js and css from folders. You can run HTML from demo folder as well and refer complete code.

   ```html
   <div id="div-marquee">
       <p id="marqueeForAll">Marquee or Scroll!!</p>
   </div>
   ```
 JS is loading after `window.onload` or one can use jquery `$( document ).ready(function() {   });`

## Why marqueeForAll
marquee or scroll is important functionality for web application but it takes some effort to make it work accross different versions of browser especially for IE browser.

Steps to achieve this functionality 

* `<marquee>` element tag, however this tag is not a HTML element instead its a browser feature and can be deprecated by  individual browser support any time. Other issue with this element is it will be treated as multimedia.In IE under <i>advanced settings>multimedia>Play animation property</i> is unchecked then `<marquee>` element will not work, this causes issue if your client has diabled this feature in their browser. Lets check our second approach.

* CSS3, transition and keyframe property of CSS3 One can achieve this feature but these property works only from IE10.What if your client asks you to make it work from IE8? So in this case use marqueeForAll.

