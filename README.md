[![SmartFoxServer 2X](images/sfs2x_logo.png)](../../../smartfoxserver-2x)
##  SmartFoxServer 2X

The JPS package deploys SmartFoxServer 2X that initially contains 1 SmartFox application server and 1 database container. 

### Highlights
This package is designed to deploy SmartFoxServer 2X environment which represents a comprehensive SDK for rapidly developing realtime and turn-based multiplayer games, virtual worlds, MMOGs, communities and much more.<br />
SmartFoxServer supports all main platforms and programming languages, like Unity, HTML5, Adobe Flash/Flex/Air, iOS and tvOS, Android, Windows Universal, Java, C++ and more.

### Environment Topology

![SmartFoxServer 2X Topology](https://docs.google.com/drawings/d/1J4mMPvsW0yRzWkFjNfG46nPl5iCEf0MKqbOPXJUXA2k/pub?w=281&h=119)

### Specifics

Layer                |     Server    | Number of CTs <br/> by default | Cloudlets per CT <br/> (reserved/dynamic) | Options
-------------------- | --------------| :----------------------------: | :---------------------------------------: | :-----:
AS                   | SmartFoxServer 2X |       1                        |           1 / 16                          | -

* AS - Application server 
* CT - Container

**SmartFox Server Version**: 2.11.1<br/>
**Java Engine**: Java 7<br/>

### Deployment

In order to get this solution instantly deployed, click the "Get It Hosted Now" button, specify your email address within the widget, choose one of the [Jelastic Public Cloud providers](https://jelastic.cloud) and press Install.

[![GET IT HOSTED](https://raw.githubusercontent.com/jelastic-jps/jpswiki/master/images/getithosted.png)](https://jelastic.com/install-application/?manifest=https%3A%2F%2Fgithub.com%2Fjelastic-jps%2Fsmartfoxserver-2x%2Fraw%2Fmaster%2Fmanifest.jps)

To deploy this package to Jelastic Private Cloud, import [this JPS manifest](../../raw/master/manifest.jps) within your dashboard ([detailed instruction](https://docs.jelastic.com/environment-export-import#import)).

More information about Jelastic JPS package and about installation widget for your website can be found in the [Jelastic JPS Application Package](https://github.com/jelastic-jps/jpswiki/wiki/Jelastic-JPS-Application-Package) reference.