chrome.devtools.panels.elements.createSidebarPane("Flow Builder", sidebar => {
  const updateElementProperties = () =>
    sidebar.setExpression("window.flowbuilder", "Store/Flow");
  updateElementProperties();
  chrome.devtools.panels.elements.onSelectionChanged.addListener(
    updateElementProperties
  );
});
