var React = require('react');
var ReactDOM = require('react-dom')

var ReactRouter = require('react-router')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;

var createBrowserHistory = require('history/lib/createBrowserHistory');

var Header = React.createClass({
  render: function() {
    return(
      <header className="top">
        <h1> catch
          <span className="ofThe">
            <span className="of"> of </span>
            <span className="the"> the </span>
          </span>
        day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
        </header>
    )
  }
})

var Order = React.createClass({
  render: function() {
    return(
      <p> Order </p>
    )
  }
})

var Inventory = React.createClass({
  render: function() {
    return(
      <p> Inventory </p>
    )
  }
})

var App = React.createClass({
  render: function() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market" num="5000" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
})

var StorePicker = React.createClass({
  render: function() {
    return (
      <form className="store-selector">
        <h2> Select Your Store </h2>
        <input type="text" ref="storeId" />
        <input type="submit" />
      </form>
    )
  }
})



// not found

var NotFound = React.createClass({
  render: function() {
    return <h1> not found! </h1>
  }
})

/*
Begin Routes
*/

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)


ReactDOM.render(routes, document.querySelector('#main'));
