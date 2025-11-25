gdjs.CreditsCode = {};
gdjs.CreditsCode.localVariables = [];
gdjs.CreditsCode.idToCallbackMap = new Map();
gdjs.CreditsCode.GDiseeteam_9595logoObjects1= [];
gdjs.CreditsCode.GDiseeteam_9595logoObjects2= [];
gdjs.CreditsCode.GDiseeteam_9595logoObjects3= [];
gdjs.CreditsCode.GDsaes_9595logoObjects1= [];
gdjs.CreditsCode.GDsaes_9595logoObjects2= [];
gdjs.CreditsCode.GDsaes_9595logoObjects3= [];
gdjs.CreditsCode.GDgame_9595logoObjects1= [];
gdjs.CreditsCode.GDgame_9595logoObjects2= [];
gdjs.CreditsCode.GDgame_9595logoObjects3= [];
gdjs.CreditsCode.GDhouse_9595logoObjects1= [];
gdjs.CreditsCode.GDhouse_9595logoObjects2= [];
gdjs.CreditsCode.GDhouse_9595logoObjects3= [];
gdjs.CreditsCode.GDBackgroundObjects1= [];
gdjs.CreditsCode.GDBackgroundObjects2= [];
gdjs.CreditsCode.GDBackgroundObjects3= [];


gdjs.CreditsCode.asyncCallback22996484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CreditsCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("iseeteam_logo"), gdjs.CreditsCode.GDiseeteam_9595logoObjects2);
{for(var i = 0, len = gdjs.CreditsCode.GDiseeteam_9595logoObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDiseeteam_9595logoObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 0, "linear", 2, false);
}
}
{gdjs.deviceSensors.orientation.activateOrientationSensor();
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-our-nights-627.mp3", false, 100, 1);
}
gdjs.CreditsCode.localVariables.length = 0;
}
gdjs.CreditsCode.idToCallbackMap.set(22996484, gdjs.CreditsCode.asyncCallback22996484);
gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CreditsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.CreditsCode.asyncCallback22996484(runtimeScene, asyncObjectsList)), 22996484, asyncObjectsList);
}
}

}


};gdjs.CreditsCode.asyncCallback22998676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CreditsCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("saes_logo"), gdjs.CreditsCode.GDsaes_9595logoObjects2);

{for(var i = 0, len = gdjs.CreditsCode.GDsaes_9595logoObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDsaes_9595logoObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 0, "linear", 2, false);
}
}
gdjs.CreditsCode.localVariables.length = 0;
}
gdjs.CreditsCode.idToCallbackMap.set(22998676, gdjs.CreditsCode.asyncCallback22998676);
gdjs.CreditsCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CreditsCode.localVariables);
for (const obj of gdjs.CreditsCode.GDsaes_9595logoObjects1) asyncObjectsList.addObject("saes_logo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.CreditsCode.asyncCallback22998676(runtimeScene, asyncObjectsList)), 22998676, asyncObjectsList);
}
}

}


};gdjs.CreditsCode.asyncCallback23000228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CreditsCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("house_logo"), gdjs.CreditsCode.GDhouse_9595logoObjects2);

{for(var i = 0, len = gdjs.CreditsCode.GDhouse_9595logoObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDhouse_9595logoObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 0, "linear", 2, false);
}
}
gdjs.CreditsCode.localVariables.length = 0;
}
gdjs.CreditsCode.idToCallbackMap.set(23000228, gdjs.CreditsCode.asyncCallback23000228);
gdjs.CreditsCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CreditsCode.localVariables);
for (const obj of gdjs.CreditsCode.GDhouse_9595logoObjects1) asyncObjectsList.addObject("house_logo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.CreditsCode.asyncCallback23000228(runtimeScene, asyncObjectsList)), 23000228, asyncObjectsList);
}
}

}


};gdjs.CreditsCode.asyncCallback23002556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CreditsCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Name Input", false);
}
gdjs.CreditsCode.localVariables.length = 0;
}
gdjs.CreditsCode.idToCallbackMap.set(23002556, gdjs.CreditsCode.asyncCallback23002556);
gdjs.CreditsCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.CreditsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.CreditsCode.asyncCallback23002556(runtimeScene, asyncObjectsList)), 23002556, asyncObjectsList);
}
}

}


};gdjs.CreditsCode.asyncCallback23001812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CreditsCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("game_logo"), gdjs.CreditsCode.GDgame_9595logoObjects2);

{for(var i = 0, len = gdjs.CreditsCode.GDgame_9595logoObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDgame_9595logoObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 0, "linear", 2, false);
}
}

{ //Subevents
gdjs.CreditsCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.CreditsCode.localVariables.length = 0;
}
gdjs.CreditsCode.idToCallbackMap.set(23001812, gdjs.CreditsCode.asyncCallback23001812);
gdjs.CreditsCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CreditsCode.localVariables);
for (const obj of gdjs.CreditsCode.GDgame_9595logoObjects1) asyncObjectsList.addObject("game_logo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.CreditsCode.asyncCallback23001812(runtimeScene, asyncObjectsList)), 23001812, asyncObjectsList);
}
}

}


};gdjs.CreditsCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("game_logo"), gdjs.CreditsCode.GDgame_9595logoObjects1);
gdjs.copyArray(runtimeScene.getObjects("house_logo"), gdjs.CreditsCode.GDhouse_9595logoObjects1);
gdjs.copyArray(runtimeScene.getObjects("iseeteam_logo"), gdjs.CreditsCode.GDiseeteam_9595logoObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDiseeteam_9595logoObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDiseeteam_9595logoObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDgame_9595logoObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDgame_9595logoObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDhouse_9595logoObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDhouse_9595logoObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}
{gdjs.evtTools.advancedWindow.setFullScreenable(true, runtimeScene);
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("saes_logo"), gdjs.CreditsCode.GDsaes_9595logoObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDsaes_9595logoObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDsaes_9595logoObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("game_logo"), gdjs.CreditsCode.GDgame_9595logoObjects1);
gdjs.copyArray(runtimeScene.getObjects("house_logo"), gdjs.CreditsCode.GDhouse_9595logoObjects1);
gdjs.copyArray(runtimeScene.getObjects("saes_logo"), gdjs.CreditsCode.GDsaes_9595logoObjects1);
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "GamePlay");
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Name Input");
}
{for(var i = 0, len = gdjs.CreditsCode.GDgame_9595logoObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDgame_9595logoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDsaes_9595logoObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDsaes_9595logoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDhouse_9595logoObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDhouse_9595logoObjects1[i].hide();
}
}

{ //Subevents
gdjs.CreditsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("iseeteam_logo"), gdjs.CreditsCode.GDiseeteam_9595logoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDiseeteam_9595logoObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDiseeteam_9595logoObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDiseeteam_9595logoObjects1[k] = gdjs.CreditsCode.GDiseeteam_9595logoObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDiseeteam_9595logoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22998516);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("saes_logo"), gdjs.CreditsCode.GDsaes_9595logoObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDsaes_9595logoObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDsaes_9595logoObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.CreditsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("saes_logo"), gdjs.CreditsCode.GDsaes_9595logoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDsaes_9595logoObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDsaes_9595logoObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDsaes_9595logoObjects1[k] = gdjs.CreditsCode.GDsaes_9595logoObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDsaes_9595logoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23000068);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("house_logo"), gdjs.CreditsCode.GDhouse_9595logoObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDhouse_9595logoObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDhouse_9595logoObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.CreditsCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("house_logo"), gdjs.CreditsCode.GDhouse_9595logoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDhouse_9595logoObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDhouse_9595logoObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDhouse_9595logoObjects1[k] = gdjs.CreditsCode.GDhouse_9595logoObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDhouse_9595logoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23001628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("game_logo"), gdjs.CreditsCode.GDgame_9595logoObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDgame_9595logoObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDgame_9595logoObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.CreditsCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDiseeteam_9595logoObjects1.length = 0;
gdjs.CreditsCode.GDiseeteam_9595logoObjects2.length = 0;
gdjs.CreditsCode.GDiseeteam_9595logoObjects3.length = 0;
gdjs.CreditsCode.GDsaes_9595logoObjects1.length = 0;
gdjs.CreditsCode.GDsaes_9595logoObjects2.length = 0;
gdjs.CreditsCode.GDsaes_9595logoObjects3.length = 0;
gdjs.CreditsCode.GDgame_9595logoObjects1.length = 0;
gdjs.CreditsCode.GDgame_9595logoObjects2.length = 0;
gdjs.CreditsCode.GDgame_9595logoObjects3.length = 0;
gdjs.CreditsCode.GDhouse_9595logoObjects1.length = 0;
gdjs.CreditsCode.GDhouse_9595logoObjects2.length = 0;
gdjs.CreditsCode.GDhouse_9595logoObjects3.length = 0;
gdjs.CreditsCode.GDBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDBackgroundObjects3.length = 0;

gdjs.CreditsCode.eventsList5(runtimeScene);
gdjs.CreditsCode.GDiseeteam_9595logoObjects1.length = 0;
gdjs.CreditsCode.GDiseeteam_9595logoObjects2.length = 0;
gdjs.CreditsCode.GDiseeteam_9595logoObjects3.length = 0;
gdjs.CreditsCode.GDsaes_9595logoObjects1.length = 0;
gdjs.CreditsCode.GDsaes_9595logoObjects2.length = 0;
gdjs.CreditsCode.GDsaes_9595logoObjects3.length = 0;
gdjs.CreditsCode.GDgame_9595logoObjects1.length = 0;
gdjs.CreditsCode.GDgame_9595logoObjects2.length = 0;
gdjs.CreditsCode.GDgame_9595logoObjects3.length = 0;
gdjs.CreditsCode.GDhouse_9595logoObjects1.length = 0;
gdjs.CreditsCode.GDhouse_9595logoObjects2.length = 0;
gdjs.CreditsCode.GDhouse_9595logoObjects3.length = 0;
gdjs.CreditsCode.GDBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDBackgroundObjects3.length = 0;


return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
