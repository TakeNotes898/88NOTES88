*****************************************************************
*****************************************************************
                          SOURCE
*****************************************************************
*****************************************************************
https://webdesign.tutsplus.com/articles/quick-tip-give-your-website-an-ios-home-screen-icon--webdesign-10067

Quick Tip: Give Your Website an iOS Home Screen Icon
by James Duquenoy10 Jan 2013	Length:ShortLanguages:


*****************************************************************
*****************************************************************
                    Site ElementsHTML
*****************************************************************
*****************************************************************


(specifically where Apple devices are concerned).
Keep it square.
Unless instructed otherwise, iOS will automatically add rounded corners to your icons - so keep your icon perfectly square and let iOS do the hard work for you.
Don't add too many effects.
Represent your brand.


*****************************************************************
*****************************************************************
                    Apple Device Icon Sizes
*****************************************************************
*****************************************************************



iPhone and iPod Touch (Retina Display)>>>>>>>>>>>Icon size: 114px by 114px
iPhone and iPod Touch (None Retina Display)>>>>>>Icon size: 57px by 57px
iPad (Retina Display)>>>>>>>>>>>>>>>>>>>>>>>>>>>>Icon size: 144px by 144px
iPad (None Retina Display)>>>>>>>>>>>>>>>>>>>>>>>Icon size: 72px by 72px
iOS determines which icon to use depending on its size. Using larger icons for higher resolution screens allows us to boost the quality within our images. Take a look at the extra attention to detail on these examples:

*****************************************************************
*****************************************************************
        In order to override these iOS defaults,
       use -precomposed within the rel attribute
          when you link to your icon. Here's
                  how it might appear:
*****************************************************************
*****************************************************************


1 <link rel="apple-touch-icon-precomposed" sizes="57x57" href="iconfilename-precomposed.png" />

Comparison between standard effects and Precompsed (no effects)

Naming your images in this way isn't required, but it is useful for remembering the circumstances for which you desgined the icon. If you're planning to go all-out and create icons for as many device sizes as possible, then it's wise to name them all accordingly. For example:

apple-icon-114x114px.png
apple-icon-57x57.png

*****************************************************************
*****************************************************************
          Linking the Icons to Your Website
*****************************************************************
*****************************************************************


Adding the icons to your site is very simple - all it takes is one line of code for each icon size. Let's assume you've made icons with the sizes 57x57px, 72x72px and 114x114px. It's important to define the size of the icon correctly so that they can be used for the correct device - regardless of the fact that they all come under the rel of 'apple-touch-icon'.

1 <link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png" />
2 <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png" />
3 <link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png" />
4 <link rel="apple-touch-icon" sizes="144x144" href="apple-icon-144x144.png" />

Don't forget, if you want to override the default iOS display settings, you need the -precomposed keyword after "apple-touch-icon" in the rel attribute field.

1 <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-icon-57x57-precomposed.png" />
2 <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-icon-72x72-precomposed.png" />
3 <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-icon-114x114-precomposed.png" />
4 <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-icon-144x144-precomposed.png" />

And that's all there is to it!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


*****************************************************************
*****************************************************************
                  A Note about Android
*****************************************************************
*****************************************************************


If you're thinking about how this applies to Android users, don't worry.

Android also supports the 'apple-touch-icon-precomposed' link rel attribute, so there is no need to add any fallback code. The OS will scale the most appropriate icon to the correct size, so you don't need to create any specifically sized icons for Android devices. Even if you don't use any of the apple-touch-icon options, the Android OS will use the standard bookmark (favicon) image from your site for your homescreen icon.

Prompting Your Users
Not all mobile device users are aware that they can add webpage bookmarks to their home screen, so you may consider prompting them to do so. There are a few JavaScript snippets to help you do this, such as Matteo Spinelli's Add to Home Screen script.

add to home screen
As always though, it's worth considering the performance impact of pulling in another .js file.

Conclusion
I hope this quick tip has inspired you to have a go at creating your own icons for iOS. They may prove to be very useful for your users, and custom icons will serve your brand much better than an illegible screenshot.
