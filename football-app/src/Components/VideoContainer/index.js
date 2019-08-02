import React from 'react';
import './VideoContainer.css'
import axios from 'axios'
import Iframe from 'react-iframe'
import FootballFilter from '../FootballFilter/'

class VideoContainer extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            videos: [], 
            isLoaded: false,
            footballFilter: '', 
        }
        this.props = props;
    }
    handleLoading() {
        this.setState((state) => ({
          isLoaded: true
        }))
      }
    componentDidMount() {
        this.fetchHighlights()
        this.setState((state) => ({
            isLoaded: !state.isLoaded
          }))
    }
    fetchHighlights = async () => {
        try {
            const url = `https://www.scorebat.com/video-api/v1/`
            const response = await axios.get(url)
            console.log(response)
            this.setState({ videos : response.data })
        } catch (error) {
        }
    }

    handleFilterChange = (event) => {
        const footballFilter = event.target.value 
        const filteredVideos = this.state.videos.filter(video => {
            if(video.title.toLowerCase().includes(footballFilter.toLowerCase())){
                return video
            }
        })
        if(footballFilter.length < 2){
            this.fetchHighlights()
        }
        this.setState({videos: filteredVideos})
    }

    renderItems = () => {
        const { videos } = this.state
        const regex = /https:\/\/www.scorebat.com\/embed\/g\/[0-9]{4,}\//g
        if (videos) {
            return videos.map((video) => {
                const { title, competition:{name}, date, embed } = video
                if (embed) {
                    return (
                        <div key={{video}} className="video-container">
                            <div className="info-container">
                                <h3 className="video-title">{title}</h3>
                                <div className="league-container">
                                    <p className="league-title">{name}</p>
                                </div>
                                <p className="game-date">{date}</p>
                            </div>        
                            <Iframe url={embed.match(regex)}
                                key="match"
                                width="300px"
                                height="450px"
                                id="myId"
                                className="game-video"
                                display="initial"
                                position="relative"
                                allowFullScreen/>
                            <div className="break"></div>
                        </div>
                )
                // }
            }})
        }
    }
    render() {
        return(
            <div>
                <FootballFilter value={this.state.value} onChange={this.handleFilterChange}/>
                <div className="main">
                    {this.state.isLoaded}
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}
export default VideoContainer 