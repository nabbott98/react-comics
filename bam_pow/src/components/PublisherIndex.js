import React, { useEffect, useState } from "react";
import { Card, Icon, Image, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { publisherIndex } from "../api/publisher";
import { favoritesPublisherPost } from "../api/favorites";

const PublisherIndex = ({ user, msgAlert }) => {
  const [allPublishers, setAllPublishers] = useState([]);
  const [liked, setLiked] = useState(false);
  console.log(user);

  useEffect(() => {
    publisherIndex(user)
      .then((res) => {
        setAllPublishers(res.data.publishers);
      })
      .catch((error) => {
        msgAlert({
          heading: "Failure",
          message: "Index Publishers Failure" + error,
          variant: "danger",
        });
      });
  }, []);

  const postFave = (id, user) => {
	// console.log("this is the id", id)
	// console.log("this is the user", user)
	let fav = { favorite_publishers: id }
	favoritesPublisherPost(fav, user).catch((error) => {
		msgAlert({
			heading: "Failure",
			message: "favorite Author Failure" + error,
			variant: "danger",
		})
	})
}
  // ----------- Unused so I commented it out ------------------
  // const handleLike = () => {
  //   setLiked(true);
  //   console.log("liked");
  // };
  // -----------------------------------------------------------

  let heart;

  if (liked === true) {
    heart = <Icon className="heart"></Icon>;
  } else {
    heart = <Icon className="heart outline"></Icon>;
  }

  const PublisherCards = allPublishers.map((Publisher) => (
    <Card>
      <Image src={Publisher.cover} wrapped ui={false} />
      <Card.Content>
        <i class="right floated like icon" onClick={() => postFave(Publisher.id, user)}></i>
        <Card.Header>{Publisher.publisher_name}</Card.Header>
      </Card.Content>

      {/* <Card.Content extra> */}
      <Link to={`/publishers/${Publisher.id}`}>
        <div class="ui bottom attached button orange">
          <i class="eye icon"></i>
          View {Publisher.publisher_name}
        </div>
      </Link>
    </Card>
  ));

  return (
    <>
      <Link to="/discover">
        <Button color="orange" className="back-button">
          <i class="left arrow icon"></i>
          Back to Discover
        </Button>
      </Link>
      <h1 className="index-header">Publishers</h1>
      <Container className="comic-panel">
        <Card.Group 
            centered
            stackable
            itemsPerRow={4} 
            >
              {PublisherCards}
          </Card.Group>
      </Container>
    </>
  );
};

export default PublisherIndex;
