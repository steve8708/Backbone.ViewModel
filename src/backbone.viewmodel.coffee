class Backbone.ViewModel extends Backbone.View
  constructor: ->
    @state = new Backbone.Model
    super
    @listenTo @state, 'all', =>
      @trigger eventName, arguments...


viewModelMethods = [
  'get', 'set', 'toJSON', 'has', 'unset', 'escape', 'changed', 'fetch', 'sync'
  'clone', 'keys', 'values', 'pairs', 'invert', 'pick', 'omit', 'clear'
  'toggle'
]

for method in viewModelMethods
  do (method) ->
    Backbone.ViewModel::[method] or= ->
      @state[method] arguments...