window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.APIGoogleMaps = window.blockly.js.APIGoogleMaps || {};

/**
 * APIGoogleMaps
 */
window.blockly.js.APIGoogleMaps.Executar = function() {
 var item, saida, destino;
  if (!this.cronapi.maps.isInitialized("map2683")) {
    this.cronapi.maps.init("map2683", 'roadmap', this.cronapi.maps.createLatLngPoint('-13.0011623', '-38.4685141'), '16', function(sender_item) {
        item = sender_item;
      this.blockly.js.APIGoogleMaps.AutoCompletarSaida();
      this.blockly.js.APIGoogleMaps.AutoCompletarDestino();
    }.bind(this));
  }
}

/**
 * Descreva esta função...
 */
window.blockly.js.APIGoogleMaps.AutoCompletarSaida = function() {
 var item, saida, destino;
  this.cronapi.maps.createAutoComplete("map2683", "inputSaida", 'address', this.cronapi.maps.createLatLngBounds(this.cronapi.maps.createLatLngPoint('-13.0183736', '-38.5480934'), this.cronapi.maps.createLatLngPoint('-12.7513579', '-38.1534927')), 'true', '', function(sender_item) {
      item = sender_item;
    this.cronapi.screen.createScopeVariable('saida', item);
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.APIGoogleMaps.GeraRota = function() {
 var item, saida, destino;
  destino = this.cronapi.screen.getScopeVariable('destino');
  saida = this.cronapi.screen.getScopeVariable('saida');
  this.cronapi.maps.directionRoute(this.cronapi.maps.createRequestDirection(this.cronapi.maps.createLatLngPoint(this.cronapi.maps.getPropertyFromAutoComplete(destino, 'latitude'), this.cronapi.maps.getPropertyFromAutoComplete(destino, 'longitude')), this.cronapi.maps.createLatLngPoint(this.cronapi.maps.getPropertyFromAutoComplete(saida, 'latitude'), this.cronapi.maps.getPropertyFromAutoComplete(saida, 'longitude')), 'DRIVING', null), function(sender_item) {
      item = sender_item;
    this.cronapi.maps.drawRoute("map2683", item, '{\"preserveViewport\": false}', function(sender_item) {
        item = sender_item;
    }.bind(this));
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.APIGoogleMaps.AutoCompletarDestino = function() {
 var item, saida, destino;
  this.cronapi.maps.createAutoComplete("map2683", "inputDestino2", 'address', null, 'false', '', function(sender_item) {
      item = sender_item;
    this.cronapi.screen.createScopeVariable('destino', item);
  }.bind(this));
}
