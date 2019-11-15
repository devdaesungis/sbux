declare namespace SBUxMethod {
    function set(modelName: string, value: string, option?:object): void;
    function get(modelName: string): any;
    function clear(modelName: string): void;
    function attr(modelName: string, attrName: string,attrValue: string|boolean): void;
    function show(modelName: string): void;
    function hide(modelName: string): void;
    function refresh(modelName: string, attributes?:object): void;

    function refreshAll(attributes?: object): void;
    function dataBind(jsonBindData: object, triggerOption?: object): void;
    function getAllData(returnType?: string, omit?: boolean, compType?: string): void;
    function clearAllData(compType?: string): void;

    function getGroupData(groupId: string, returnType?: string, omit?: boolean, compType?: string): any;
    function clearGroupData(groupId: string, compType?: string): void;
    function changeGroupAttr(groupId: string, attrName: string, attrValue: string|boolean): void;
    function showGroup(groupId: string): void;
    function hideGroup(groupId: string): void;
    function refreshGroup(groupId: string): void;
    function refreshMasterDetail(modelName, valueOrOptions?): void

    function changeLocaleWithFile(localeName: string, fileUrl?: string, applyAll?: boolean): void;
    function changeLocaleWithJson(localeName: string, jsonData: string, applyAll?: boolean): void;

    function getComponents(): object;
    function clearStructure(option?: object): void;
    function getGridCompsData(gridId: string): any;
    function clearGridCompsData(gridId: string): void;
    function sendCompsDataToGrid(gridId: string): void;
    function connectGridToComps(gridId: string): void;
    function setGridRowDataToComps(gridId: string, jsonData: object): void;
    function setGridCellDataToComp(gridId: string, gridRef: string, value: string): void;

    function dynamic(selector: string, addPositionType: string, componentHtml: string): void;
    function render(selector?: string): void;
    function renderEvent(modelName: string): void;
    function openAlert(options: object): void;
    function closeAlert(): void;

    function addTab(modelName: string, options: object): void;
    function removeTab(modelName: string, tabId: string): void;
    function removeAllTab(modelName: string): void;
    function removeOthersTab(modelName: string, tabId: string): void;
    function getTabsCount(modelName: string): number;
    function selectTab(tabId: string): void;
    function disableTab(tabId: string): void;
    function enableTab(tabId: string): void;
    function showTab(tabId: string): void;
    function hideTab(tabId: string): void;

    function getTreeStatus(modelName: string, nodeId?: string): object;
    function editTreeNode(modelName: string, nodeId: string, nodeObject: object): void;
    function removeTreeNode(modelName: string, nodeId: string, callback?: Function): void;
    function addTreeNode(modelName: string, addType: string, nodeObjects: any, nodeId?: string, callback?: Function): void;
    function changeChildTreeNode(modelName: string, nodeObjects: any,parentNodeId?: string): void;
    function getTreeUpdateData(modelName:string, options?: any);

    function getTreeSiblingData(modelName: string, rootNodeId: string, distancelevel: number, filterKey?: string): any;
    function expandTreeNodes(modelName: string, targetNodeId: string, distancelevel: number): void;
    function expandTreeChildNodes(modelName: string, targetNodeId: string, distanceLevel: number, isExpandTargetNode?: boolean): void;

    function addAccordion(modelName: string, options: object): void;
    function removeAccordion(modelName: string, itemId?: string|number): void;

    function addCarouselSlide(modelName: string, options: object|string, positionIndex: number|string): void;
    function removeCarouselSlide(modelName: string, positionIndex: number|string): void;
    function setCarouselSlide(modelName: string, positionIndex: number|string): void;
    function getCarouselCount(modelName: string): number;

    function setSideMenu(modelName: string, menuValue: string, menuValueKey?: string): void;
    function getSideMenu(modelName: string): object;
    function disableSideMenu(modelName: string, menuValue: string, menuValueKey?: string): void;
    function enableSideMenu(modelName: string, menuValue: string, menuValueKey?: string): void;
    function expandSideMenu(modelName: string, targetMenuId?: string, distanceLevel?: number, isExpandTargetMenu?: boolean) : void;

    function getModalStatus(modelName: string): void;
    function setModalTitle(modelName: string, newTitle: string): void;
    function setModalBody(modelName: string, newContents: string): void;
    function setModalFooter(modelName: string, newContents: string): void;
    function openModal(modelName: string): void;
    function closeModal(modelName: string): void;

    function openProgress(modelName: string): void;
    function closeProgress(modelName: string): void;
    function promiseProgress(modelName: string, func:Function, delayTime?: string): void;

    function closeContextmenu(): void;
    function popupWindow(url: string, title: string, width: number|string, height: number|string): void;
    function popupLayer(url: string, title: string, width?: number, height?: number, posX?: number, poxY?: number): void;

    function getFileUpdateData(modelName:string, options?: any): any;

    function validateRequired(options?: any): void;


}

declare namespace sb.chart {
    function render(selector: string, options: object): any;
}