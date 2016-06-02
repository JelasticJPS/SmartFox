# Jelastic SmartFoxServer 2X Installation Package 

This repository provides [SmartFoxServer 2X](http://smartfoxserver.com/) JPS-based installation package for Jelastic Platform.

**SmartFoxServer 2X** is a comprehensive SDK for rapidly developing realtime and turn-based multiplayer games, virtual worlds, MMOGs, communities and much more.

**Engine**: java7

**Environment topology**:

1. 
   - node type: smartfox-server
   - count: 1
   - cloudlets: 16

### What it can be used for?
SmartFoxServer is a comprehensive SDK for rapidly developing realtime and turn-based multiplayer games, virtual worlds, MMOGs, communities and much more.
<br />
SmartFoxServer supports all main platforms and programming languages, like Unity, HTML5, Adobe Flash/Flex/Air, iOS and tvOS, Android, Windows Universal, Java, C++ and more.


### What Jelastic JPS package is?

Jelastic JPS package represents an one-click installation solution, that allows to get the desired project hosted at Jelastic Cloud in a matter of minutes. Being based on [Jelastic Packaging Standard](https://docs.jelastic.com/jps), it automates creation of the necessary environment and subsequent application deployment to it. Herewith, all of the required properties and behaviors are predefined within the package JSON manifest, so you instantly get the ready-to-go solution.
The full list of the available at a platform one-click packages can be seen at the corresponding same-named section of [Jelastic Marketplace](https://docs.jelastic.com/marketplace#apps].

### How to deploy a package?
###### For Developers

In case you can’t find the desired solution within the list of available ones at your dashboard, just copy and save the content of its manifest as a *.json* file and [import](https://docs.jelastic.com/environment-export-import#import) it to the dashboard. Herewith, you can apply any necessary adjustments to template settings through this file (if such are required) and install its customized version in the similar way.

###### For Cluster Admins

In order to add the desired JPS package to your platform and make it available for users, perform the following:
- copy content of its manifest 
- switch to the [Marketplace](http://ops-docs.jelastic.com/marketplace-46) section of your JCA panel and choose **Add > New Installation** menu option
- paste the copied strings into the appeared frame and **Save** the template
- choose your newly added package within the list and click on **Publish** above

Also, you are able to adjust the given package template according to your needs and provide its customized version.