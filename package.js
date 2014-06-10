Package.describe({
  summary: "Vertical tabs component for Bootstrap 3."
});

Package.on_use(function (api, where) {
  api.add_files('bootstrap-vertical-tabs/src/tabs.css', 'client');
  api.add_files('bootstrap-vertical-tabs/src/vertical-text.css', 'client');
});
