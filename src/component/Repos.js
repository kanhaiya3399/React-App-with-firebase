import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Repo = ({repos_url}) => {


  const [repos, setRepos] = useState([])

  const fetchRepos = async () => {
    const {data} = await Axios.get(repos_url)
    setRepos(data)
  }

  useEffect(() => {
    fetchRepos()
  }, [repos_url])

  return (
    <ListGroup>
      {repos.map((repos) => (
        <ListGroupItem key={repos.id}>
          <div className="text-primary">{repos.name}</div>
          <div className="text-secondary">{repos.language}</div>
          <div className="text-info">{repos.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );

}

export default Repo;