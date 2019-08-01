import React from 'react';
import './SportNews.css';
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY

class SportNews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            showing: [],
        }
        this.props = props;
    }
    redirectMe = () => {
        this.props.history.push('/')
    }
    componentDidMount() {
        this.fetchSportNews()
    }
    fetchSportNews = async () => {
        try {
            const url = `https://newsapi.org/v2/everything?q=talksport&apiKey=${apiKey}`
            const response = await axios.get(url)
            const {
                data: { articles }
            } = response 
            this.setState({ articles })
        } catch (error) { 
        };
    }
    handleOnClickShow = (article) => {
        if(!this.state.showing.includes(article)){
            this.setState({showing: [...this.state.showing, article]})
        }
    }
    handleOnClickHide = (article) => {
        this.state.showing.splice(article, 1)
        this.setState({showing: [...this.state.showing]})
    }

    toggleButton = (content) => {
        if (this.state.showing.includes(content)) {
            return ( 
            <button onClick={()=>this.handleOnClickHide(content)}>
                    Hide
                </button>
            )
        } else {
            return (
                <button onClick={()=>
                     this.handleOnClickShow(content)}>
                        Read More
                    </button>
            )
        }
    }

    renderItems = () => {
        const { articles } = this.state 
        return articles.map((article) => {
            const { source, title, urlToImage, content } = article
            return (
                <div className="news-container">
                    <div className="title-container">
                        <h3 className="news-title">{title}</h3>
                    </div>
                    <p className="source">Source: {source.name}</p>
                    <img src={urlToImage} alt="sport" />
                    <article>{this.state.showing.includes(article) ? content : content.substring(0, 50)} ...</article>
                        {this.toggleButton(article)}
                    <div className="break"></div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="sport-news">
                <main className="news-page">
                    {this.renderItems()}
                </main>
            </div>
        )
    }
}

export default SportNews 

