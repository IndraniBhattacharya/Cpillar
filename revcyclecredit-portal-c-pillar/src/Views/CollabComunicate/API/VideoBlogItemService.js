import axios from 'axios'

class VideoBlogItemService {
    retrieveAllItems(){
        return axios.get(`http://localhost:9090/Cpillar/CollabComm/spotlight`)
        //console.log('Executed service')
    }
}

export default new VideoBlogItemService()