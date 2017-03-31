       var objProjects = {
          dashboard: {
          about: 'Design and build a responsive Web dashboard using html, CSS and JavaScript-driven charts and graphs',
          features: ['Responsive Web page built from the supplied mockup',
                    'Demo alert notifications using Jquery',
                    'Chart widgets using Chart.js',
                    'Social Stats Widgets using SVG',
                    'New Members and Recent Activity Widgets',
                    'Local storage to save the settings',
                    'autocomplete feature for the user search box'],
          skills:  [ 'html', 'css', 'Javascript', 'Jquery', "Javascript libraries: [Chart.js, autocomplete.js, toggle.js]",
                    "local Storage","Flexbox"],
          url: 'https://hi2suresh.github.io/web-app-dashboard/'
          },
           
         performance: {
          about: 'Optimization of graphics, HTML, CSS, and JavaScript to take a poorly optimized page and reduce the total load size and resource requests',
          features: ['Reduced Page size using Image Compressions, SVG and Minfication process',
                    'Improved user experience by using Javascript',                  
                    'Reduced resource requests using Spritesheet',
                    'Workflow Automation using Gulp',
                     'Usage of Google web fonts instead of font stylesheets',
                     'Multiple Images for Thumbnails and modal popup display'
                   ],
          skills:   [ 'html', 'css', 'Javascript', 'Jquery', "Gulp",
                    "SVG", "Spritesheet", "Image compression", 'Minification'],
          url: 'https://hi2suresh.github.io/performance-optimization-project/'
          },
           
        responsive: {
          about: 'Build a responsive, mobile-first layout using HTML and CSS. The layout should demonstrate an understanding of responsive design by adjusting to accommodate small, medium, and large screen sizes',
          features: ['Responsive web page that accommodates to Mobile, Tablet and Desktop screens',
                    'Stanadard Design and Layout',
                    'Usage of Google font',
                    'Special Styles for Links',
                     'W3C Validated HTML page',
                     'W3C Validated CSS page'
                  ],
          skills:  [ "html", "css", "W3C HTML validator", "W3C CSS Validator","Media Query" ],
          url: 'https://hi2suresh.github.io/Responsive-layout/'
          },
           
          accessibility: {
          about: 'Improve accessibility of web site to allow anyone and everyone to use the website, regardless of physical or hardware differences. Also, modify the site so that its faster to download and easier to parse for software like search engines.',
          features: ['A Web page having sufficient contrast  of colors for both standard vision and color deficient user',
                    'A Web page designed to have hierarchical structue to assist screen readers',
                    'Aria landmark roles attributes',
                    'Table with a scope and caption element',
                    'Form elements have styled focus states and associated labels for form controls',
                    'An abilitiy to select options in the drop-down menu by typing from the keyboard',
                    'Form elements with a fieldset and a legend to describe the grouping'],
          skills:  [ "Web Accessibility Tools", "Form Elements", 'Table', 'css', "W3C HTML validator", "W3C CSS Validator"], 
          url: 'https://hi2suresh.github.io/accessibility-refactor/tour.html'
          },
           
         photo: {
          about: 'Create an interactive photo gallery using JavaScript and jQuery. At the top of the page, have a search area where photos will hide and show depending on user input.',
          features: ['An ability to click on thumbnail images in the gallery and view them in a lightbox',
                    'A search box at the top of the page to filters photos based on the captions',
                    'The photos and layout adjusts for mobile-friendly experience',
                    'An ability to add text captions to each image in the lightbox',
                    'Back and forward arrows to switch between photos when the lightbox is visible',
                    'A way to close the lightbox and return to the gallery view'
                   ],
          skills:  [ 'Javascript','JQuery',"html", "css", "W3C HTML validator", "W3C CSS Validator","Media Query"],
          url: 'https://hi2suresh.github.io/interactive-photo-gallery/'
          },
           
         video: {
          about: 'Build an HTML5 video player using JavaScript and the HTML5 Video API. Using the supplied mockups, video files, and transcript, build an interactive video player that synchronizes the video and the transcript. The transcript should be placed below the video, and should highlight as the video progresses. When a user clicks any part of the transcript it should take them to the appropriate place in the video',
          features: ['A video player implemented using the mediaelement.js library',
                    'Customised skin for the Video Player',
                    'Video player that synchronizes the video and the transcript',
                    'Video player that  takes to the appropriate place in the video when a user clicks any part of the transcript',
                    'New Members and Recent Activity Widgets',
                    'Local storage to save the settings',
                    'autocomplete feature for the user search box'],
          skills:  [ 'Javascript','JQuery',"html5 Video", "css", "DOM manupilation", "Event Handlers","JQuery Plugins"],
          url: 'https://hi2suresh.github.io/Interactive-Video-Player/'
          }
        };
          

var gallery = document.querySelector('#gallery');
        var overlay = document.querySelector('#fade');
        var lightbox = document.querySelector('#lightbox');
        var lightboxContainer = document.querySelector('.lightbox-container');
        var flipbutton;

        var close = document.querySelector('#close');
       
        gallery.addEventListener('click', function(e){
            e.preventDefault();
            flipbutton = document.querySelector('#flip');
         if(e.target && e.target.nodeName == "IMG"){
                //Invoke LightBox
                toggleLightBox();
                var projectName = e.target.getAttribute('id');
                var nameUppercase = projectName.charAt(0).toUpperCase() + projectName.slice(1);
                var imgSource = e.target.getAttribute('src');
                imgSource = imgSource.replace('_tn.jpg','.png');
                var projectDiv =  createDiv(['project-card']);
                
                //Create Project Details Information - Front side
                var projectContentDiv = createDiv(['front']);
                projectContentDiv.appendChild(createProjectContent(projectName));               
                projectDiv.appendChild(projectContentDiv);    
                
                //Create Project Snapshot - Back side
                var projectImageDiv =  createDiv(['back']); 
                projectImageDiv.appendChild(createHeading(nameUppercase+' Snapshot:'));
                projectImageDiv.appendChild(createFlipButton());                
                var projectImage = document.createElement('img');             
                projectImage.setAttribute('src', imgSource);
                projectImageDiv.appendChild(projectImage);             
                projectDiv.appendChild(projectImageDiv);                             
                
                lightboxContainer.appendChild(projectDiv);
             }           
            
        });
        
        close.addEventListener('click', function(){
            //Close the Lightbox
            toggleLightBox();
            //Empty the Lightbox container
            lightboxContainer.innerHTML = '';
        });
               
       
        /*Shows or Hides the Lightbox*/
        function toggleLightBox(){
            if(overlay.style.display == 'block') {
                overlay.style.display = 'none';
              lightbox.style.display = 'none';
            }
             else {
                  overlay.style.display = 'block';
                lightbox.style.display = 'block';
             }
        }
        
 
        function createProjectContent(projectName){
            var projectDetailsDiv = createDiv(['project-details-div']);
            
            //Create Project About description
            var projectAboutDiv =  createDiv(['project-about-div']);
            projectAboutDiv.appendChild(createHeading(projectName));
            projectAboutDiv.appendChild(createParagraph(objProjects[projectName].about));
            projectDetailsDiv.appendChild(projectAboutDiv);
            
            //Create Project Features List
            var projectFeaturesDiv =  createDiv(['project-features-div']);
            projectFeaturesDiv.appendChild(createHeading('Project Features:'));
            projectFeaturesDiv.appendChild(createList(projectName, objProjects[projectName].features));
            projectDetailsDiv.appendChild(projectFeaturesDiv);
            
            //Create Project Tools and Technologies List
            var projectSkillsDiv =  createDiv(['project-skills-div']);
            projectSkillsDiv.appendChild(createHeading('Tools & Technologies:'));
            projectSkillsDiv.appendChild(createList(projectName, objProjects[projectName].skills));
            projectDetailsDiv.appendChild(projectSkillsDiv);
            
            //Create Project Live URL Button
            var projectUrlDiv =  createDiv(['project-url-div']);
            projectUrlDiv.appendChild(createLinkButton('project-url', objProjects[projectName].url, "Project Live URL"));
            projectDetailsDiv.appendChild(projectUrlDiv);
            
            //Create and Append Project Flip Card Button
            projectDetailsDiv.appendChild(createFlipButton());
            
            return projectDetailsDiv;
        }
        
        /*Create a Div Element and add class*/
        function createDiv(divClass){
            var div = document.createElement('div');
            for(var i=0; i<divClass.length; i++){
                div.classList.add(divClass[i]);
            }
            return div;
        }
        
         /* Create Project Heading */
        function createAbout(name,content){
            var h2 = document.createElement('h2');
            h2.innerHTML = name +' Project:';
            h2.className = 'project-heading';   
            
            var p =document.createElement('p');
            p.className = 'project-about';
            p.innerHTML = content;
            h2.appendChild(p);
            return h2;            
        }
        
        /* Create Project Heading Element*/
        function createHeading(heading){
            var h2 = document.createElement('h2');
            h2.innerHTML = heading;
            h2.className = 'project-heading'; 
            return h2;
        }

        /* Create Project Features and Skills List */
        function createList(projectName, listArray){                        
            var ul = document.createElement('ul');
            ul.className = 'project-features-skills-list';
            
            for(var i=0; i<listArray.length; i++){
                let li = document.createElement('li');
                li. innerHTML = listArray[i];
                ul.appendChild(li);
            }
           
            return ul;
        }
        
        /* Create Project Heading Element*/
        function createParagraph(content){
            var p =document.createElement('p');
            p.className = 'project-about';
            p.innerHTML = content;
            return p;
        }
        

        
        /* Create Project Features List */
        function createFeatures(projectName){
            var featuresList = objProjects[projectName].features;                  
            var ul = document.createElement('ul');
            ul.className = 'project-features-list';
            
            for(var i=0; i<featuresList.length; i++){
                let li = document.createElement('li');
                li. innerHTML = featuresList[i];
                ul.appendChild(li);
            }
           
            return ul;
        }
        
        /* Create Project URL link */
        function createProjectUrl(url){
            var link = document.createElement('a');
            link.setAttribute('href',url);
            link.setAttribute('target','_blank'); //Open the url in new window
            link.innerHTML = 'See the Project in Action';
            for(var i=0; i<divClass.length; i++){
                div.classList.add(divClass[i]);
            }
            return link;
        }
        
         /* Create Project URL link */
        function createLinkButton(idValue, url, text){
            var link = document.createElement('a');
            link.id = idValue;
            link.classList.add('button');
            link.setAttribute('href',url);
          /*  if(text.contains('Action')){
                 link.setAttribute('target','_blank'); //Open the url in new window
            } */          
            link.innerHTML = text;           
            return link;
        }
        
         /* Create Project Flip Card Button */
        function createFlipButton(){
            var projectFlipDiv =  createDiv(['flip-div']);
            var flipButton = createLinkButton('flip', '#', "Flip to See Other Side");
            flipButton.addEventListener('click', function(){
                var projectCard = document.querySelector('.project-card');
                projectCard.classList.toggle('flipped');
             });
            projectFlipDiv.appendChild(flipButton);
            return projectFlipDiv;
        }
        