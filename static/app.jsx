/**
 * Created by arkadiy on 29.10.16.
 */

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
                <div className="count">{this.state.count}</div>
                <img src={this.props.imageUrl} onClick={ this.handleClick }/>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
});

ReactDOM.render(<div>
        <Hero title="React"
        subtitle="Библиотека для создания пользовательского интерфейса"
        imageUrl="https://facebook.github.io/react/img/logo.svg" alt="Logo"/>
        <Hero title="Angular"
              subtitle="Супер фреймворк"
              imageUrl="https://angular.io/resources/images/logos/angular2/angular.svg" alt="Logo"/>
    </div>, document.getElementById('root'));