const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navServices = document.querySelector('nav a');
navServices.textContent = siteContent['nav']['nav-item-1']
navServices.style.color = 'green'

let navProduct = document.querySelector('a:nth-of-type(2)')
navProduct.textContent = siteContent['nav']['nav-item-2']
navProduct.style.color = 'green'

let navVision = document.querySelector('a:nth-of-type(3)')
navVision.textContent = siteContent['nav']['nav-item-3']
navVision.style.color = 'green'

let navFeatures = document.querySelector('a:nth-of-type(4)')
navFeatures.textContent = siteContent['nav']['nav-item-4']
navFeatures.style.color = 'green'

let navAbout = document.querySelector('a:nth-of-type(5)')
navAbout.textContent = siteContent['nav']['nav-item-5']
navAbout.style.color = 'green'

let navContact = document.querySelector('a:nth-of-type(6)')
navContact.textContent = siteContent['nav']['nav-item-6']
navContact.style.color = 'green'

//new nav item History
const navHistory = document.createElement('a')
navHistory.textContent = 'History'
navHistory.href = '#'
navHistory.style.color = 'green'
document.querySelector('nav').appendChild(navHistory)

//new nav item Home
const navHome = document.createElement('a')
navHome.textContent = 'Home'
navHome.href = '#'
navHome.style.color = 'green'
document.querySelector('nav').prepend(navHome)

//update h1
document.querySelector('h1').textContent = siteContent['cta']['h1']

//update button
document.querySelector('button').textContent = siteContent['cta']['button']

//update img of code snippet
document.getElementById('cta-img').src = siteContent['cta']['img-src']

//update features h4
document.querySelector('h4:nth-of-type(1)').textContent = siteContent['main-content']['features-h4']

//update features p
document.querySelector('p:nth-of-type(1)').textContent = siteContent['main-content']['features-content']

//update about h4 
const h4NodeList = document.querySelectorAll('h4')
h4NodeList[1].textContent = siteContent['main-content']['about-h4']

//update about p 
const pNodeList = document.querySelectorAll('p')
pNodeList[1].textContent = siteContent['main-content']['about-content']

// Update the img src for the middle-img
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//update services h4
h4NodeList[2].textContent = siteContent['main-content']['services-h4']

//update services p
pNodeList[2].textContent = siteContent['main-content']['services-content']

//update product h4
h4NodeList[3].textContent = siteContent['main-content']['product-h4']

//update product p
pNodeList[3].textContent = siteContent['main-content']['product-content']

//update vision h4
h4NodeList[4].textContent = siteContent['main-content']['vision-h4']

//update vision p
pNodeList[4].textContent = siteContent['main-content']['vision-content']

//update contact h4
h4NodeList[5].textContent = siteContent['contact']['contact-h4']

//update contact p address
pNodeList[5].textContent = siteContent['contact']['address']

//update contact p phone 
pNodeList[6].textContent = siteContent['contact']['phone']

//update contact p email
pNodeList[7].textContent = siteContent['contact']['email']

//update footer p 
pNodeList[8].textContent = siteContent['footer']['copyright']

