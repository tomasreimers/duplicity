##Duplicity 0.1

*Duplicity is a javascript library which enables the developer to develop responsive sites faster*

**Duplicity is built on top of [jquery](http://jquery.com/) and requires it to run.**

###Devices

Duplicity examines the browser width and makes a guess at which device is being used; if the screen width is:

* **(0, 640):** 'phone'
* **[640, 1024]:** 'tablet'
* **(1024, &infin;):** 'desktop'

Also, if the browser is resized, or the phone is rotated, to cause a significant change in screen size (and lead duplicity to classify it as a different device) it will update all the following methods!

###HTML

Once duplicity has determined the device, it provides very simple methods to change your webpage to be responsive. The first being its HTML protocol

```HTML

<div data-display='phone'>
    This div will only be shown if the device is a phone,
</div>

<div data-display="tablet desktop">
    while this div will appear if the device is a tablet or a desktop!
</div>

<a href="http://example.com?mobile=false" data-display="phone tablet">
    Oh yeah! and you can apply this to any tag (not just divs)!
</a>

```

###CSS 

Additionally duplicity will add an aptly named class ('phone', 'tablet', 'desktop') to the body element; thus allowing you to code device specific styles

```CSS

#myContent{
    /* What occurs normally */ 
    padding:20px;
}

.phone #myContent{
    /* What occurs on a phone */ 
    padding:5px;
}

```

###Javascript

Duplicity ultimately is a JS library and so it provides some nice JS features:

The first being three booleans by which you can read the detected device:

duplicity.phone, duplicity.tablet, duplicity.desktop

```javascript

if (duplicity.phone){

    // do some 
    
}

```
Additionally, duplicity provides you with the ability to do some additional set up when the device is detected to be changed (i.e. if the user resizes the browser to a size similar to a phone); simply define a function called `screenSizeChanged(oldDevice, newDevice)`, and if you don't define the function that is fine as the error will be caught.

```javascript

function screenSizeChanged(oldDevice, newDevice){

    // oldDevice and newDevice are strings: 'phone', 'tablet', 'desktop' 

}

```

###FAQ

**Why did you call it duplicity?**

Because it is a framework to allow your website to have many faces (one for phones, another for tablets, and yet another for desktops).