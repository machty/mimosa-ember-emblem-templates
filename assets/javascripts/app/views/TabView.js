define([
  "ember",
  "text!app/templates/tabTemplate.html"
], function(Ember, tabTemplate){
  var TabView = Ember.View.extend({
    classNames: ["tab"],
    template: Ember.Handlebars.compile(tabTemplate)
  });
  return TabView;
});
