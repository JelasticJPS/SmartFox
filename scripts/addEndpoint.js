//@req(nodeGroup, name, port)

import com.hivext.api.environment.Environment;
import com.hivext.api.development.Scripting;

var APPID = getParam("TARGET_APPID"),
    SESSION = getParam("session"),
    PROTOCOL = getParam("protocol", "TCP"),
    oEnvService,
    oEnvInfo,
    nNodesCount,
    oScripting,
    oResp,
    i;

oEnvService = hivext.local.exp.wrapRequest(new Environment(APPID, SESSION));
oScripting =  hivext.local.exp.wrapRequest(new Scripting({
    serverUrl : "http://" + window.location.host.replace("app", "appstore") + "/",
    session : SESSION
}));


oEnvInfo = oEnvService.getEnvInfo();

if (!oEnvInfo.isOK()) {
    return oEnvInfo;
}

oEnvInfo = toNative(oEnvInfo);

nNodesCount = oEnvInfo.nodes.length;

for (i = 0; i < nNodesCount; i += 1) {
    if (oEnvInfo.nodes[i].nodeGroup == nodeGroup) {
        oResp = oEnvService.addEndpoint({
            name: name,
            nodeid: oEnvInfo.nodes[i].id,
            privatePort: port,
            protocol: PROTOCOL
        });

        if (!oResp.isOK()) {
            return oResp;
        }
        oResp = toNative(oResp);
    }
}

return oScripting.eval({
    script : "InstallApp",
    targetAppid : APPID,
    manifest : toJSON({
        "jpsType" : "update",
        "application" : {
			"id": "SmartFoxServer 2X",
			"name": "SmartFoxServer 2X",
			"success": {
				"email": "Below you will find the link to the SmartFoxServer 2X Administration Tool. Enter the access credentials below to connect. Adobe Flash plugin is required.</br> <table style='font-size:13px; border: none;'><tr><td>Admin Tool URL:</td><td style='padding-left: 10px;'><a href='${env.protocol}://${env.domain}/admin/' target='_blank'>${env.protocol}://${env.domain}/admin/</a></td></tr><tr><td>Host:</td><td style='padding-left: 10px;'>${env.domain}</td></tr><tr><td>Port:</td><td style='padding-left: 10px'>" + oResp.object.publicPort + "</td></tr><tr><td>Username:</td><td  style='padding-left: 10px'>sfsadmin</td></tr><tr><td>Password:</td><td  style='padding-left: 10px'>sfsadmin</td></tr></table />"
			}
		}
    })
});