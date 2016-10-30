/**
 * Created by arkadiy on 29.10.16.
 */

let ImageCounter = function (props) {
    return (
        <div className="image-counter">
            <div className="count">{props.count}</div>
            <img src={props.imageUrl} onClick={props.onCount}/>
        </div>
    )
};

let Hero = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },

    handleClick: function () {
        this.setState({
            count: this.state.count + 1
        });
    },

    render: function () {
        return (
            <div className="container">
                <ImageCounter imageUrl={this.props.imageUrl} count={this.state.count} onCount={this.handleClick}/>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
});

let App = React.createClass({
   render: function () {
       return (
           <div>
               {this.props.heroes.map(function(hero) {
                   "use strict";
                   return (<Hero key = {hero.id} title={hero.title}
                         subtitle={hero.subtitle}
                         imageUrl={hero.imageUrl} alt="Logo"/>)
               })}
           </div>
       );
   }
});

let data = [
    {
        id: 1,
        title: "React",
        subtitle: "Библиотека для создания пользовательского интерфейса",
        imageUrl: "https://facebook.github.io/react/img/logo.svg"
    },
    {
        id: 2,
        title: "Angular",
        subtitle: "Супер фреймворк",
        imageUrl: "https://angular.io/resources/images/logos/angular2/angular.svg"
    }
];

ReactDOM.render(<App heroes = {data}/>, document.getElementById('root'));