var React = require('react');
var d3PriceEngine = require('../scripts/d3PriceEngine');

module.exports = React.createClass({
  startEngine: function(width, height) {

    var query = this.props.query;
    var pricesArray = [];

    this.props.walmartRelatedResults.results.forEach(function(item) {
      var itemObject = {
        name: item.name,
        salePrice: item.salePrice,
        source: 'Walmart'
      };
      pricesArray.push(itemObject);
    });

    this.props.bestbuyRelatedResults.results.forEach(function(item) {
      var itemObject = {
        name: item.name,
        salePrice: item.salePrice,
        source: 'Best Buy'
      };
      pricesArray.push(itemObject);
    });


    d3PriceEngine(pricesArray, query);

  },

  render: function() {
    return (
      <div className="d3-price-container">
        <svg className="price-chart"></svg>
      </div>
    );
  }

});