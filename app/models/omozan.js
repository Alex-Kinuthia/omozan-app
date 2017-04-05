import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  contact: DS.attr(),
  price: DS.attr(),
  picture: DS.attr()
});
